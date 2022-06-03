/**
 * Determines whether the given matrix (two-dimensional array of numbers) is diagonal, as in, all numbers outside of the main diagonal are 0. A cell belongs to the main diagonal, if its X coordinate is equal to its Y coordinate.
 */

/**
 * @param {array} arr 
 */


function isDiagonal(arr) {
  // i don't quite understand the language they're using, but what I'm seeing is this :
  // the beginning and ending of each array that "touches" another array must being and end with
  // zero on the sides that they're touching
  // [[7, 0, 0, 0], [0, 1, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0]]
  // see how the first array ends in zero, but can start with a number because the start of the array
  // doesnt have an array in front of it. While the

  if (arr.length <= 1) return true;

  const len = arr.length;

  for (let i = 0; i < arr.length; i++) {
    const subArray = arr[i];
    const subLen = subArray.length;

    // first subArray must end in 0 to be diagonal
    if (i === 0) {
      if (subArray[subLen - 1] !== 0) return false;
    }
    // last subArray must begin with 0 to be diagonal
    else if (i === arr.length - 1) {
      if (subArray[0] !== 0) return false;
    }
    // every other subArray must begin & end with 0 to be diagonal
    else {
      if (subArray[0] !== 0 || subArray[subLen - 1] !== 0) return false;
    }
  }

  return true;
}

describe('isDiagonal', function () {
  const assert = require('chai').assert;

  it('should work on empty matrices', function () {
    assert.isTrue(isDiagonal([]));
  });

  // a trivial matrix is one that only contains a single value
  it('should work on trivial matrices', function () {
    assert.isTrue(isDiagonal([[5]]));
  });

  it('should detect diagonal matrices', function () {
    assert.isTrue(isDiagonal([
      [2, 0],
      [0, 1]
    ]));

    assert.isTrue(isDiagonal([
      [0, 0, 0],
      [0, 9, 0],
      [0, 0, 3]
    ]));

    assert.isTrue(isDiagonal([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]));

    assert.isTrue(isDiagonal([
      [7, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 4, 0],
      [0, 0, 0, 0]
    ]));
  });

  it('should not have false positives', function () {
    assert.isFalse(isDiagonal([
      [1, 2],
      [0, 0]
    ]));

    assert.isFalse(isDiagonal([
      [2, 0],
      [1, 1]
    ]));

    assert.isFalse(isDiagonal([
      [0, 0, 5],
      [0, 5, 0],
      [5, 0, 0]
    ]));

    assert.isFalse(isDiagonal([
      [4, 0, 0, 0],
      [0, 0, 9, 3],
      [0, 0, 0, 0],
      [0, 2, 0, 5]
    ]));
  });
});
