/**
 * Detects whether a given string is correctly paranthesised, only considering parantheses, i.e. '(' and ')'.
 * Returns true or false.
 */
function isCorrectlyParanthesised(str) {
  // lets define what correctly paranthesised means:
  // 1. each opening paren '(' must have a matching closing paren ')'
  // 2. each opening paren must come before a closing paren

  // our challenge right is getting the parens out of the string
  // if we get every paren in the string, in order, we could then do
  // run some logic to see if it follows our conditions

  // get the parens from the string
  const parens = [];

  for (let i = 0; i < str.length; i++) {
    const el = str[i];

    if (el === '(' || el === ')') parens.push(el);
  }
  // console.log(parens);

  if (parens.length === 0) return true;

  // perform check to see if parens are in correct order
  // the way we're checking this is an opening paren must come first
  // we'll keep track for each paren by incrementing count by one for each instance
  // we'll then decrement the amount for each closing paren we have
  // at any point if we go into the negative we know we have a closing paren coming
  // before an open so we'll immediately return false
  let count = 0;
  for (let i = 0; i < parens.length; i++) {
    const paren = parens[i];

    if (paren === '(') {
      count += 1;
    } else {
      count -= 1;
      if (count < 0) return false;
    }
  }

  // to account for the possibility of having more opening parens than closing
  // parens we do a final check to see if count is equal to zero. If it isn't
  // we know that we have more opening parens than closing and that's an improper
  // format

  return count === 0;
}

console.log('should detect any non-paranthesised text as correct');
console.log(isCorrectlyParanthesised(""));
console.log(isCorrectlyParanthesised("Testing testing"));
console.log(isCorrectlyParanthesised("Foobar"));
console.log(isCorrectlyParanthesised("Potato Warriors rejoice!"));

console.log('should detect correctly paranthesised text');
console.log(isCorrectlyParanthesised("()"));
console.log(isCorrectlyParanthesised("(())"));
console.log(isCorrectlyParanthesised("()()()"));
console.log(isCorrectlyParanthesised("()(())()"));
console.log(isCorrectlyParanthesised("(Hello)"));
console.log(isCorrectlyParanthesised("((Hello))"));
console.log(isCorrectlyParanthesised("()(Hello)"));
console.log(isCorrectlyParanthesised("((((Test))))()"));
console.log('should detect incorrectly paranthesised text');
console.log(isCorrectlyParanthesised("("));
console.log(isCorrectlyParanthesised(")("));
console.log(isCorrectlyParanthesised("(()"));
console.log(isCorrectlyParanthesised("))(("));
console.log(isCorrectlyParanthesised(")(()"));
console.log(isCorrectlyParanthesised("(((("));
console.log(isCorrectlyParanthesised("))()"));
console.log(isCorrectlyParanthesised("(Test("));
console.log(isCorrectlyParanthesised("(Hell)o("));


// describe('isCorrectlyParanthesised', function () {
//   const assert = require("chai").assert;

//   it('should detect any non-paranthesised text as correct', function () {
//     assert.isTrue(isCorrectlyParanthesised(""));
//     assert.isTrue(isCorrectlyParanthesised("Testing testing"));
//     assert.isTrue(isCorrectlyParanthesised("Foobar"));
//     assert.isTrue(isCorrectlyParanthesised("Potato Warriors rejoice!"));
//   });

//   it('should detect correctly paranthesised text', function () {
//     assert.isTrue(isCorrectlyParanthesised("()"));
//     assert.isTrue(isCorrectlyParanthesised("(())"));
//     assert.isTrue(isCorrectlyParanthesised("()()()"));
//     assert.isTrue(isCorrectlyParanthesised("()(())()"));
//     assert.isTrue(isCorrectlyParanthesised("(Hello)"));
//     assert.isTrue(isCorrectlyParanthesised("((Hello))"));
//     assert.isTrue(isCorrectlyParanthesised("()(Hello)"));
//     assert.isTrue(isCorrectlyParanthesised("((((Test))))()"));
//   });

//   it('should detect incorrectly paranthesised text', function () {
//     assert.isFalse(isCorrectlyParanthesised("("));
//     assert.isFalse(isCorrectlyParanthesised(")("));
//     assert.isFalse(isCorrectlyParanthesised("(()"));
//     assert.isFalse(isCorrectlyParanthesised("))(("));
//     assert.isFalse(isCorrectlyParanthesised(")(()"));
//     assert.isFalse(isCorrectlyParanthesised("(((("));
//     assert.isFalse(isCorrectlyParanthesised("))()"));
//     assert.isFalse(isCorrectlyParanthesised("(Test("));
//     assert.isFalse(isCorrectlyParanthesised("(Hell)o("));
//   });
// });
