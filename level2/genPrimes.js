/**
 * Generates the first N prime numbers.
 */

function isPrime(num) {
  if (num <= 1) return false; // negative numbers can't be considered prime
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  if (num > 5) {
    if (num % 3 === 0) return false;
    if (num % 5 === 0) return false;
  }

  if (num > 7) {
    if (num % 7 === 0) return false;
  }

  if (num > 11) {
    if (num % 11 === 0) return false;
  }

  return true;
}

function genPrimes(numOfPrimes) {
  const result = [];

  let i = 0;
  while (numOfPrimes > result.length) {
    if (isPrime(i)) result.push(i);
    i += 1;
  }

  return result;
}

// console.log(genPrimes(100));

describe('genPrimes', function () {
  const assert = require("chai").assert;

  it('should be able to generate 0 primes', function () {
    assert.deepEqual(genPrimes(0), []);
  });

  it('should be able to generate a single prime', function () {
    assert.deepEqual(genPrimes(1), [2]);
  });

  it('should be able to generate a few primes', function () {
    assert.deepEqual(genPrimes(3), [2, 3, 5]);
    assert.deepEqual(genPrimes(5), [2, 3, 5, 7, 11]);
  });
});
