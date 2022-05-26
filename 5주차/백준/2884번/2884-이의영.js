let fs=require('fs');
let input=fs.readFileSync('./input.txt').toString().split(' ');
let h = parseInt(input[0]);
let min=parseInt(input[1]);

if (min>=45){
    min-=45;
}
else{
    min+=15;
    h-=1;
    if (h<0){
        h+=24;
    }
}
console.log(h+' '+min);
