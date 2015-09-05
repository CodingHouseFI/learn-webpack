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

export default doubler;
