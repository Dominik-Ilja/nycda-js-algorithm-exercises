/**
 * Given a string, it "camelizes" by uppercasing every character at an even index, and lowercasing every character at an odd index.
 * Returns the new string.
 */
function camelize(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result += i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  }

  return result;
}

describe('camelize', function () {
  const assert = require("chai").assert;

  it('should work on empty strings', function () {
    assert.equal(camelize(""), "");
  });

  it('should work on single characters', function () {
    assert.equal(camelize("a"), "A");
    assert.equal(camelize("q"), "Q");
    assert.equal(camelize("5"), "5");
    assert.equal(camelize(" "), " ");
  });

  it('should work for pairs', function () {
    assert.equal(camelize("fo"), "Fo");
    assert.equal(camelize("AB"), "Ab");
    assert.equal(camelize("cY"), "Cy");
    assert.equal(camelize("Xd"), "Xd");
  });

  it('should work for longer strings', function () {
    assert.equal(camelize("lol"), "LoL");
    assert.equal(camelize("potato warrior"), "PoTaTo wArRiOr");
  });
});
