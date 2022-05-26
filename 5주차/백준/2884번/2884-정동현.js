let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(' ');

let H = Number(input[0]); // H = 1
let M = Number(input[1]); // M = 30

M = M - 45; // M = -15

if (M < 0) {
  H = H - 1; 
  M = M + 60; 
  if (H < 0) {
  H = 23;
  }
}

console.log(H, M);
