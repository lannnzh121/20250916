// === 遞迴計算階乘 (Factorial) ===
// fact(n) = n * (n-1) * (n-2) * ... * 1
function fact(n){
    if(n==1)
        return 1;
    else
        return n*(fact(n-1));
}
// === 遞迴計算 1 + 2 + 3 + ... + n 的總和 ===
function sum(n){
    if(n==1)
        return 1;
    else
        return n+sum(n-1);
}
var n=3;
console.log(n+"!="+fact(n));