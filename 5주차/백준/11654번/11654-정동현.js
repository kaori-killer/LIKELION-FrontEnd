let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();

const userInput = input;

let result = userInput.charCodeAt();

console.log(result);