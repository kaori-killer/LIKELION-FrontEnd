let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let H = input[0];
let M = input[1];

if (M < 45){
    H--;
    M = 60 - (45 - M);
    if(H < 0){
        H = 23;
    }
    console.log(H + ' ' + M);
}
else {
    console.log(H + ' ' + (M-45));
}