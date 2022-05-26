const fs = require('fs');
let input = fs.readFileSync(file).toString().split('\n');
let str = input[0];

console.log(str.charCodeAt(0));