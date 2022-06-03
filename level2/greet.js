/**
 * Generates a string greeting for the given array of names. Note that the parameter is optional.
 * In the greeting you should use the Oxford comma. For example: greet([ "A", "B", "C" ]) === "Hi A, B, and C!" and not "Hi A, B and C!" (notice the comma before the "and").
 */
function greet(names) {
  // return, not the data type we want
  if (names !== undefined && !Array.isArray(names)) return;

  // no parameter or empty array
  if (!names || names.length === 0) return 'Hi!';

  const newNames = names.map(name => name === '' ? 'Anonymous' : name);

  // one name
  if (newNames.length === 1) return `Hi ${newNames[0]}!`;

  // two names
  if (newNames.length === 2) return `Hi ${newNames[0]} and ${newNames[1]}!`;

  // three or more names
  // we have to add a comma before each name except for the last index
  // if we're at the last index we'll add 'and ${name}!
  // we'll have the loop determine the left spacing between words
  let greeting = 'Hi';

  newNames.forEach((name, index) => {
    // last name
    if (newNames.length - 1 === index) {
      greeting += ` and ${name}!`;
    } else {
      greeting += ` ${name},`;
    }
  });


  return greeting;

}

console.log(greet());
console.log(greet([]));
console.log(greet(["Joe"]));
console.log(greet(["Potato"]));
console.log(greet(["Joe", "Foo", "Bar"]));
console.log(greet(["Bla", "Uh", "Baz", "Example"]));
console.log(greet([""])); // , "Hi Anonymous!"
console.log(greet(["Eve", "Frank", "", "Peter"]));

describe('greet', function () {
  const assert = require('chai').assert;

  it('generates a nameless greeting for zero names', function () {
    assert.equal(greet(), "Hi!");
    assert.equal(greet([]), "Hi!");
  });

  it('generates a simple greeting for one name', function () {
    assert.equal(greet(["Joe"]), "Hi Joe!");
    assert.equal(greet(["Potato"]), "Hi Potato!");
  });

  it('greets all names', function () {
    assert.equal(greet(["Joe", "Foo", "Bar"]), "Hi Joe, Foo, and Bar!");
    assert.equal(greet(["Bla", "Uh", "Baz", "Example"]), "Hi Bla, Uh, Baz, and Example!");
  });

  it('generates a greeting for Anonymous for empty names', function () {
    assert.equal(greet([""]), "Hi Anonymous!");
    assert.equal(greet(["Eve", "Frank", "", "Peter"]), "Hi Eve, Frank, Anonymous, and Peter!");
  });
});
