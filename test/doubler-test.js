import expect from "expect.js";

// test cases
// console.log(doubler(4)); // 8
// console.log(doubler(-1)); // -2

// console.log(doubler('hello')); // hheelllloo

// console.log(doubler([1, 4, 5, 'ok'])); // [2,8,10,'ookk']

// console.log(doubler({a: 4, b: 'hi'})) // { a: 8, b: 'hhii' }

// let hello = () => { console.log("what") };
// doubler(hello); // what what

import doubler from "../doubler";

export default () => {
  describe('doubler', () => {
    it('doubles a single integer argument', () => {
      expect(doubler(4)).to.equal(8);
      expect(doubler(-1)).to.equal(-2);
    });
  });
};
