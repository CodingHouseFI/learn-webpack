// let $ = require("jquery");
import $ from "jquery";

// var changes = require("./change");
import changes from "./change";

// let o = { firstName: 'Charles', lastName: 'Watson' }
// let { firstName, lastName } = o;

const sick = "Awesome";

// let doubler = numbers => numbers.map(number => 2 * number);

// import doubler from "./doubler";

$(() => {
  // let o = {
  //   a1: 42,
  //   a2: () => { console.log('hello a2'); },
  //   a3() { console.log('hello a3'); },
  //   sick,
  //   codinghouse: `Hello

  //   Yes`
  // };

  // console.log(o);
  // let { a2, a3 } = o;
  // a2();
  // a3();

  // let reporter = function*() {
  //   yield 12;
  //   yield 24;
  //   yield 42;
  //   yield 84;
  // };

  // console.log(reporter());

  // let numbers = [1,4,7,9,0];
  // let doubles = numbers.map(number => 2*number);
  // console.log(doubler(numbers));
  // let numbers = [1,4,7,9,0];
  // let doubles = numbers.map(number => 2*number);
  // console.log(doubler(numbers));
  console.log(`ES6 is really ${sick}`);
  changes.documentReadyChanges();
});

// function(number) {}
// (number) => {}
