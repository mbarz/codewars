import { cakes } from './solution';
const assert = {
  equal: <T>(a: T, b: T) => {
    expect(a).toEqual(b);
  },
};

type Recipe = Record<string, number>;

describe('description example', () => {
  it('pass example tests', () => {
    let recipe: Record<string, number> = { flour: 500, sugar: 200, eggs: 1 };
    let available: Record<string, number> = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
    assert.equal(cakes(recipe, available), 2);

    recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
    available = { sugar: 500, flour: 2000, milk: 2000 };
    assert.equal(cakes(recipe, available), 0);
  });
});

describe('static tests', function () {
  it('basic recipes', function () {
    let recipe: Recipe = { flour: 500, sugar: 200, eggs: 1 };
    let available: Recipe = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
    let result = 2;
    assert.equal(cakes(recipe, available), result);

    recipe = { cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100 };
    available = {
      sugar: 1700,
      flour: 20000,
      milk: 20000,
      oil: 30000,
      cream: 5000,
    };
    result = 11;
    assert.equal(cakes(recipe, available), result);
  });

  it('missing ingredient', function () {
    const recipe: Recipe = {
      apples: 3,
      flour: 300,
      sugar: 150,
      milk: 100,
      oil: 100,
    };
    const available: Recipe = { sugar: 500, flour: 2000, milk: 2000 };
    const result = 0;
    assert.equal(cakes(recipe, available), result);
  });

  it('not enough ingredients', function () {
    const recipe: Recipe = {
      apples: 3,
      flour: 300,
      sugar: 150,
      milk: 100,
      oil: 100,
    };
    const available: Recipe = {
      sugar: 500,
      flour: 2000,
      milk: 2000,
      apples: 15,
      oil: 20,
    };
    const result = 0;
    assert.equal(cakes(recipe, available), result);
  });

  it('no ingredients available', () => {
    const recipe: Recipe = { eggs: 4, flour: 400 };
    const available: Recipe = {};
    const result = 0;
    assert.equal(cakes(recipe, available), result);
  });

  it('exactly enough ingredients for 1 cake', () => {
    const recipe: Recipe = {
      cream: 1,
      flour: 3,
      sugar: 1,
      milk: 1,
      oil: 1,
      eggs: 1,
    };
    const available: Recipe = {
      cream: 1,
      flour: 3,
      sugar: 1,
      milk: 1,
      oil: 1,
      eggs: 1,
    };
    const result = 1;
    assert.equal(cakes(recipe, available), result);
  });
});

const base = [
  'flour',
  'eggs',
  'oil',
  'milk',
  'apples',
  'sugar',
  'cream',
  'pears',
  'butter',
  'nuts',
  'chocolate',
  'cocoa',
  'crumbles',
];
const { random, sampleSize } = require('lodash');

describe('random tests', () => {
  it('tests', () => {
    for (let i = 0; i < 100; i++) {
      const recipe: Recipe = {};
      const available: Recipe = {};
      for (let x of sampleSize(base, random(2, 4))) recipe[x] = random(3, 5);
      for (let x of base) available[x] = random(1, 20);
      const expected = Object.keys(recipe).reduce((p, c) => {
        return Math.min(p, (available[c] | 0) / recipe[c]) | 0;
      }, Infinity);
      assert.equal(cakes(recipe, available), expected);
    }
  });
});
