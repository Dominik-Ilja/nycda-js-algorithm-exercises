/**
 * Detects whether a given string is correctly bracketed with '(', ')', '[', ']', '{' and '}'. This means not only that their counts are in balance, but also that the ordering is correct, for example "([hello])" is correct, but "([hello)]" is not.
 * Returns true or false.
 */

/**
 * @param {string} str 
 */

// the string will contain brackets
// we need to 
// as we go through the brackets we need to check that once we get a 

const extractBrackets = (str) => {
  const brackets = [];
  const regex = /[\(\)\[\]\{\}]/; // matches any type of bracket

  for (let i = 0; i < str.length; i++) {
    const el = str[i];

    if (regex.test(el)) brackets.push(el);
  }

  return brackets;
};

// correct bracketing is simply making sure that a set of brackets
// isn't broken by another brackets closing pair
// 1. correct ({[]}) {([])} [({})]
// 2. incorrect [{]} ([{])} or any variation

// i think if we detect when a closing bracket is up we test to see
// if the last opening bracket is a pair or not
// we could store opening braces in an array and then compare if the closing brace
// matches or not

function isCorrectlyBracketed(str) {
  const brackets = extractBrackets(str);

  if (brackets.length === 0) return true;

  const openingPairs = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  const openingBrackets = [];
  const openingRegex = /[\(\{\[]/; // all the opening brackets

  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];

    // if it's an opening bracket then add to the array
    if (openingRegex.test(bracket)) {
      openingBrackets.push(bracket);
    }
    // this means we have a closing bracket
    else {
      // if there are no opening brackets it's invalid
      if (openingBrackets.length === 0) return false;
      // if the last opening bracket doesn't match the current bracket it's invalid
      if (openingBrackets.pop() !== openingPairs[bracket]) return false;
    }
  }

  return openingBrackets.length === 0;
}

describe('isCorrectlyBracketed', function () {
  const assert = require("chai").assert;

  it('should detect any non-bracketed text as correct', function () {
    assert.isTrue(isCorrectlyBracketed(""));
    assert.isTrue(isCorrectlyBracketed("Testing testing"));
    assert.isTrue(isCorrectlyBracketed("Foobar"));
    assert.isTrue(isCorrectlyBracketed("Potato Warriors rejoice!"));
  });

  it('should detect correctly bracketed text', function () {
    // Yes, these are the same tests as in level1/isCorrectlyParanthesised.js.
    assert.isTrue(isCorrectlyBracketed("()"));
    assert.isTrue(isCorrectlyBracketed("(())"));
    assert.isTrue(isCorrectlyBracketed("()()()"));
    assert.isTrue(isCorrectlyBracketed("()(())()"));
    assert.isTrue(isCorrectlyBracketed("(Hello)"));
    assert.isTrue(isCorrectlyBracketed("((Hello))"));
    assert.isTrue(isCorrectlyBracketed("()(Hello)"));
    assert.isTrue(isCorrectlyBracketed("((((Test))))()"));

    assert.isTrue(isCorrectlyBracketed("[]"));
    assert.isTrue(isCorrectlyBracketed("{}"));
    assert.isTrue(isCorrectlyBracketed("()[]"));
    assert.isTrue(isCorrectlyBracketed("([])"));
    assert.isTrue(isCorrectlyBracketed("([]){}"));
    assert.isTrue(isCorrectlyBracketed("([{}]){[()]}"));
    assert.isTrue(isCorrectlyBracketed("test{something}"));
    assert.isTrue(isCorrectlyBracketed("[test]({something})"));
  });

  it('should detect incorrectly bracketed text', function () {
    assert.isFalse(isCorrectlyBracketed("("));
    assert.isFalse(isCorrectlyBracketed("(()"));
    assert.isFalse(isCorrectlyBracketed("(((("));
    assert.isFalse(isCorrectlyBracketed("))()"));
    assert.isFalse(isCorrectlyBracketed("(Test("));
    assert.isFalse(isCorrectlyBracketed("(Hell)o("));

    assert.isFalse(isCorrectlyBracketed("["));
    assert.isFalse(isCorrectlyBracketed("{"));
    assert.isFalse(isCorrectlyBracketed("{{"));
    assert.isFalse(isCorrectlyBracketed("{["));
    assert.isFalse(isCorrectlyBracketed("{)"));
    assert.isFalse(isCorrectlyBracketed("{]"));
    assert.isFalse(isCorrectlyBracketed("[)"));
    assert.isFalse(isCorrectlyBracketed("{]]{"));
  });

  it('should not merely count balances, ordering is also important', function () {
    // Merely counting brackets is not enough! If I open a [ before a {, but try to close ] before I close }, that's also an error!
    assert.isFalse(isCorrectlyBracketed("{[}]"));
    assert.isFalse(isCorrectlyBracketed("{()[}]"));
    assert.isFalse(isCorrectlyBracketed("{hello{"));
    assert.isFalse(isCorrectlyBracketed("{[testing}]"));
    assert.isFalse(isCorrectlyBracketed("test{something{"));
  });
});
