const addition: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

const number1: number = 5;
const number2: number = 10;
const result: number = addition(number1, number2);

console.log('The result is %d', result);
