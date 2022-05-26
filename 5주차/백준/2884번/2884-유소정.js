// 45분 일찍 알람 설정하기
// 0 ≤ H ≤ 23, 0 ≤ M ≤ 59
// 하루의 시작은 0:0(자정) 
// 끝은 23:59(다음날 자정 1분 전)이다. 
// 불필요한 0은 사용하지 않는다.

let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");

var h = parseInt(input[0]);
var m = parseInt(input[1]) - 45;

if (m < 0) { // 1) 음수는 1시간 minus 및 양수로 변경, 2) 1)에서 0시는 23시로
    h = h == 0 ? 23 : h-1;
    m += 60;
} 

console.log(h, m);