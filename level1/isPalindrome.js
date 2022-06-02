/**
 * Determines whether the given string is a palindrome, i.e. if you were to reverse the order of the characters inside the string, you would get back the original string.
 */
function isPalindrome(str) {
  // first we need to get a reversed string
  // we can then do a simple comparison to see if the strings
  // match or not
  const reversed = str.split('').reverse().join('');
  return str === reversed;

}

describe('isPalindrome', function () {
  const assert = require("chai").assert;

  it('works for empty string', function () {
    assert.isTrue(isPalindrome(''));
  });

  it('works for single characters', function () {
    assert.isTrue(isPalindrome('x'));
    assert.isTrue(isPalindrome('c'));
  });

  it('works for double characters', function () {
    assert.isTrue(isPalindrome('xx'));
    assert.isTrue(isPalindrome('gg'));
    assert.isFalse(isPalindrome('af'));
    assert.isFalse(isPalindrome('yt'));
  });

  it('works for words', function () {
    assert.isTrue(isPalindrome('racecar'));
    assert.isFalse(isPalindrome('potato'));
  });
});
