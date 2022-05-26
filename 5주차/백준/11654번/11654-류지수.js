const fs = require('fs');
let a = fs.readFileSync('/dev/stdin').toString();

var ASC = a.codePointAt(0);
console.log(ASC);