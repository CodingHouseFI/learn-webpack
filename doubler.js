let doubler = (...args) => {
  let singleArgDoubler = {
    number: (input) => 2 * input,
    boolean: (input) => input,
    string: (input) => input.split('').map(char => char + char).join(''),
    object: (input) => {
      let output = {};
      Object.keys(input).forEach(key => output[key] = doubler(input[key]));
      return output;
    },
    function: (input) => {
      input();
      input();
      return;
    }
  };

  let result = args.map(input => singleArgDoubler[typeof(input)](input) );
  return result.length === 1 ? result[0] : result;
};

export default doubler;
