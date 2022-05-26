const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let hour = Number(input[0]);
let min = Number(input[1]);

if(hour === 0) {
    hour === 24;
}

let time = (hour * 60) + min - 45;
let hour2 = parseInt(time / 60);
let min2 = time % 60;

console.log(hour2 + " " + min2);


