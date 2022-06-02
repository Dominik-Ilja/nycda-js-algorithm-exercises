/*
 * Checks whether x and y are in epsilon range of each other, that is, whether x and y are the same within a certain margin of error (given by epsilon).
 * You're not allowed to use any functions from Math.
 * Returns true or false.
 */
function equalsWithEpsilon(x, y, epsilon) {
  // we don't know if x or y will be larger so we need to take that into account
  // we'll do that by seeing if the value is negative or not and act accordingly
  // if the value is negative then make the epsilon negative

  // examples :
  // equalsWithEpsilon(5, 6, 2)
  // 5 - 6 = -1 the range is still within 2 despite being negative
  // so by turning the epsilon negative we can make a comparison
  // -2 < -1 = true
  // we take into account 2 in the positve and negative direction
  // altering the conditions for both cases

  const range = x - y;

  return range < 0 ? -epsilon <= range : epsilon >= range;
}

console.log(equalsWithEpsilon(5, 6, 2));
console.log(equalsWithEpsilon(5, 6, 1));
console.log(equalsWithEpsilon(5, 6, 0.5));
console.log(equalsWithEpsilon(5, 6, 0));
console.log(equalsWithEpsilon(7, -7, 100));
console.log(equalsWithEpsilon(7, -7, 14));
console.log(equalsWithEpsilon(7, -7, 5));

describe('equalsWithEpsilon', function () {
  const assert = require("chai").assert;

  it('should work', function () {
    assert.isTrue(equalsWithEpsilon(5, 6, 2));
    assert.isTrue(equalsWithEpsilon(5, 6, 1));
    assert.isFalse(equalsWithEpsilon(5, 6, 0.5));
    assert.isFalse(equalsWithEpsilon(5, 6, 0));

    assert.isTrue(equalsWithEpsilon(7, -7, 100));
    assert.isTrue(equalsWithEpsilon(7, -7, 14));
    assert.isFalse(equalsWithEpsilon(7, -7, 5));
  });

  it('should work same as == with epsilon = 0', function () {
    assert.isTrue(equalsWithEpsilon(1, 1, 0));
    assert.isFalse(equalsWithEpsilon(1, 2, 0));
    assert.isFalse(equalsWithEpsilon(-3, 1, 0));
  });
});
