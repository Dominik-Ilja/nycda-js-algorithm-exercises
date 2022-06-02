/**
 * Given an array of numbers, it checks whether it is sorted (in the ascending order). Returns true or false.
 */

// ascending order is least to greatest
// single values are sorted
// equal numbers are fine to be in a row

function isSorted(arr) {
  if (arr.length <= 1) return true;

  for (let i = 1; i < arr.length; i++) {
    let prev = arr[i - 1];
    let curr = arr[i];

    if (prev > curr) return false;
  }

  return true;

}

console.log(isSorted([]));                   //* true
console.log(isSorted([1]));                  //* true
console.log(isSorted([53]));                 //* true
console.log(isSorted([3, 3]));               //* true
console.log(isSorted([72, 72, 72, 72]));     //* true
console.log(isSorted([2, 4, 12]));           //* true
console.log(isSorted([-1, 0, 1, 90, 122]));  //* true
console.log(isSorted([3, 2, 1]));
console.log(isSorted([92, 12, 0, -50]));
console.log(isSorted([1, 5, 3]));
console.log(isSorted([7, 8, 9, 2]));
console.log(isSorted([0, 0, 3, 0]));

describe('isSorted', function () {
  const assert = require('chai').assert;

  it('should consider an empty array sorted', function () {
    assert.isTrue(isSorted([]));
  });

  it('should consider a trivial array sorted', function () {
    assert.isTrue(isSorted([1]));
    assert.isTrue(isSorted([53]));
  });

  it('should accept equal values next to each other', function () {
    assert.isTrue(isSorted([3, 3]));
    assert.isTrue(isSorted([72, 72, 72, 72]));
  });

  it('should detect good order', function () {
    assert.isTrue(isSorted([2, 4, 12]));
    assert.isTrue(isSorted([-1, 0, 1, 90, 122]));
  });

  it('should not accept descending order', function () {
    assert.isFalse(isSorted([3, 2, 1]));
    assert.isFalse(isSorted([92, 12, 0, -50]));
  });

  it('should not choose chaos over order', function () {
    assert.isFalse(isSorted([1, 5, 3]));
    assert.isFalse(isSorted([7, 8, 9, 2]));
    assert.isFalse(isSorted([0, 0, 3, 0]));
  });
});
