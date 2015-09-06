import expect from "expect.js";
import doubler from "../doubler";

export default () => {
  describe('doubler', () => {
    it('doubles a single integer argument', () => {
      expect(doubler(4)).to.equal(8);
      expect(doubler(-1)).to.equal(-2);
    });

    it('doubles every letter in a string argument', () => {
      expect(doubler('hello')).to.equal('hheelllloo');
    });

    it('doubles every element in an array argument', () => {
      expect(doubler([42])).to.eql([84]);
      expect(doubler([1, 4, 5, 'ok'])).to.eql([2, 8, 10, 'ookk']);
    });

    it('doubles every value in an object argument', () => {
      expect(doubler({a: 4, b: 'hi'})).to.eql({ a: 8, b: 'hhii' });
    });

    it('works on nested objects', () => {
      expect(doubler({a: { c: 8 }, b: ['hi', 'jameela']})).to.eql({ a: {c: 16} , b: ['hhii', 'jjaammeeeellaa'] });
    });

    it('returns the same boolean argument', () => {
      expect(doubler(true)).to.be.ok();
      expect(doubler(false)).to.not.be.ok();
    });

    it('works on every argument', () => {
      expect(doubler(1, 'hi', [4, 5])).to.eql([2, 'hhii', [8, 10]]);
    });

    it('call a function twitce if the argument is a function', () => {
      let counter = 40;
      let fn = () => { counter++; };
      doubler(fn);
      expect(counter).to.equal(42);
    });

  });
};
