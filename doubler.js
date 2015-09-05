let doubler = input => {

  if (typeof(input) === "number") {
    return 2*input;
  }

  if (typeof(input) === "string") {
    return input.split('').map(char => char + char).join('');
  }

  if (typeof(input) === "object") {
    Object.keys(input).forEach(key => input[key] = doubler(input[key]));
    return input;
  }

  if (typeof(input) === "function") {
    input();
    input();
  }
}

// test cases
console.log(doubler(4)); // 8
console.log(doubler(-1)); // -2

console.log(doubler('hello')); // hheelllloo

console.log(doubler([1, 4, 5, 'ok'])); // [2,8,10,'ookk']

console.log(doubler({a: 4, b: 'hi'})) // { a: 8, b: 'hhii' }

let hello = () => { console.log("what") };
doubler(hello); // what what

export default doubler;
