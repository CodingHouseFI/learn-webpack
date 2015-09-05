// let $ = require("jquery");
import $ from "jquery";

// var changes = require("./change");
import changes from "./change";

const sick = "Awesome";

let doubler = numbers => numbers.map(number => 2 * number);

$(() => {
  let numbers = [1,4,7,9,0];
  // let doubles = numbers.map(number => 2*number);
  console.log(doubler(numbers));
  console.log(`ES6 is really ${sick}`);
  changes.documentReadyChanges();
});

// function(number) {}
// (number) => {}
