// console.log("Hello from Jenkins!");

// index.js
const [,, a, b, op] = process.argv;

const num1 = parseFloat(a);
const num2 = parseFloat(b);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter two valid numbers.");
  process.exit(1);
}

switch(op) {
  case 'add':
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case 'sub':
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case 'mul':
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case 'div':
    if (num2 === 0) {
      console.log("Cannot divide by zero.");
    } else {
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
    break;
  default:
    console.log("Operation must be one of: add, sub, mul, div");
}
