export function change(input: string, prog: string, version: string): string {
  return [
    { regex: /^Corporation.*$/gm, rep: '' },
    { regex: /^Level.*$/gm, rep: '' },
    { regex: /Date: .*/, rep: 'Date: 2019-01-01' },
    { regex: /Author: \w+\n/, rep: 'Author: g964' },
    { regex: /Program [tT]itle: \w+/, rep: `Program: ${prog}` },
    {
      regex: /\Phone: \+1-\d{3}-\d{3}-\d{4}/,
      rep: 'Phone: +1-503-555-0090',
      err: 'ERROR: VERSION or PHONE',
    },
    {
      cond: !input.includes('Version: 2.0'),
      regex: /Version: \d+\.\d+\s/,
      rep: `Version: ${version} `,
      err: 'ERROR: VERSION or PHONE',
    },
    { regex: /\n/g, rep: ' ' },
  ]
    .filter(({ cond }) => cond == null || cond === true)
    .reduce((str, { regex, rep, err }) => {
      if (err != null && !str.match(regex)) return err;
      else return str.replace(regex, rep);
    }, input)
    .trim();
}
