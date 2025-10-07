//calc 1-2+3-4......n
const readline = require("readline-sync")

function sum2(n){
var sum=0;
if(n<=0){
    console.log("error: n must>0");
    return null;
}
else{
    for(var i=1;i<=n;i++){
        //if(i%2==0){
        //    sum -= i;
       // }
       // else{
       //     sum += i;
       // }
        (i%2==0) ? sum -= i : sum += i;
    }
    return sum;
}
}
var i=readline.questionInt("1-2+3-4+5......+n N=?");
console.log("1-2+3-4+...+"+n+"="+sum2(n));