import { likes } from './solution';

describe('6 kyu - Who likes this', () => {
  it('should return noone', () => {
    expect(likes([])).toEqual('no one likes this');
  });

  it('should with name', () => {
    expect(likes(['Peter'])).toEqual('Peter likes this');
  });

  it('should join two names with "and"', () => {
    expect(likes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this');
  });

  it('should join only join add on last name', () => {
    expect(likes(['Max', 'John', 'Mark'])).toEqual('Max, John and Mark like this');
  });
  
  it('should join only join add on last name', () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toEqual('Alex, Jacob and 2 others like this');
  });
});
