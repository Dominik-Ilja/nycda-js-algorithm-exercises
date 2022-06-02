/**
 * Represents a counter that remembers its value and can be used to count up.
 */
class Counter {
  constructor(count = 0) {
    this.count = count;
  }

  current() {
    // console.log("current", this.count);
    return this.count;
  }
  next() {
    // console.log("next", this.count);
    return this.count += 1;
  }
}

// let a = new Counter();
// console.log("a: ", a);
// let b = new Counter(10);
// console.log("b: ", b);
// let c = new Counter();
// console.log("c: ", c);
// console.log(c.current());
// console.log(c.next());
// console.log(c);
// console.log(c.current());
// console.log(c.next());
// console.log(c);

describe('Counter', function () {
  const assert = require("chai").assert;

  it('has the default initial value of 0', function () {
    let c = new Counter();
    assert.equal(c.current(), 0);
  });

  it('should accept an initial value', function () {
    let c = new Counter(10);
    assert.equal(c.current(), 10);
  });

  it('should remember its state', function () {
    let c = new Counter();
    assert.equal(c.current(), 0);
    assert.equal(c.next(), 1);
    assert.equal(c.current(), 1);

    c.next();
    assert.equal(c.current(), 2);
  });
});
