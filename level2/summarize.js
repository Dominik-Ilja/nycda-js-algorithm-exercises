/**
 * Given an array of numbers, it performs some analysis on it and returns the results as an object. The attributes of the object should be as follows:
 * - min: the smallest number in the array
 * - max: the largest number in the array
 * - sum: the sum of all numbers in the array
 * - avg: the average of all numbers in the array
 */

/**
 * @param {number[]} numbers 
 * @returns {object} 
 */

function summarize(numbers) {
  let min, max, sum, avg;

  if (numbers.length === 0) {
    min = null;
    max = null;
    sum = null;
    avg = null;
  }
  else {
    min = numbers[0];
    max = numbers[0];
    sum = numbers[0];
    avg = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      const num = numbers[i];

      // min
      if (min > num) min = num;
      // max
      if (max < num) max = num;

      sum += num;
    }

    avg = sum / numbers.length;
  }


  return { min, max, sum, avg };
}

// console.log(summarize([]));
// console.log(summarize([42]));
// console.log(summarize([1, 2, 3, 4, 5]));
// console.log(summarize([-7, 3, 3, 0, 7, 42]));

describe('summarize', function () {
  const assert = require('chai').assert;

  it('should work for empty array', function () {
    assert.deepEqual(summarize([]), {
      min: null,
      max: null,
      sum: null,
      avg: null
    });
  });

  it('should work for trivial arrays', function () {
    assert.deepEqual(summarize([42]), {
      min: 42,
      max: 42,
      sum: 42,
      avg: 42
    });
  });

  it('should work on simple arrays', function () {
    assert.deepEqual(summarize([1, 2, 3, 4, 5]), {
      min: 1,
      max: 5,
      sum: 15,
      avg: 3
    });
  });

  it('should work with negative numbers', function () {
    assert.deepEqual(summarize([-7, 3, 3, 0, 7, 42]), {
      min: -7,
      max: 42,
      sum: 48,
      avg: 8
    });
  });
});
