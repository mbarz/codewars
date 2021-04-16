type Logger = {
  log: (s: string) => void;
};

class LoggerFactory {
  static getInstance(): Logger {
    return console;
  }
}

function logged() {
  return (_target: any, key: string, descriptor: PropertyDescriptor) => ({
    ...descriptor,
    value: (...args: any[]) => {
      const res = descriptor.value(...args);
      LoggerFactory.getInstance().log(
        `called ${key} with [${args
          .map((arg) => String(arg))
          .join(', ')}] returning ${res}`
      );
      return res;
    },
  });
}

class Foo {
  @logged()
  foo(a: number) {
    return a * 2;
  }
  @logged()
  bar() {}
}

describe('Playground', () => {
  it('should run', () => {
    const log: string[] = [];
    jest
      .spyOn(LoggerFactory, 'getInstance')
      .mockReturnValue({ log: (s) => log.push(s) });
    const o = new Foo();
    o.foo(2);
    o.foo(4);
    o.bar();
    expect(log).toEqual([
      'called foo with [2] returning 4',
      'called foo with [4] returning 8',
      'called bar with [] returning undefined',
    ]);
  });
});
