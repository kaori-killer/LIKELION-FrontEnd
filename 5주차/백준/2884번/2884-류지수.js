const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let H = Number(input[0]);
let M = Number(input[1]);

let final_M;

(M < 45) ?  (H--,final_M=M+15) : (final_M=M-45);
if (H<0) H=23;

console.log(H + ' ' + final_M);