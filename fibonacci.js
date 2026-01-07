//recursion O(2^n)
function fib(n){
    if(n==0 || n==1) // 當 n 為 0 或 1 時，直接回傳 n
        return n;
    else
        return fib(n-1)+fib(n-2); // 否則回傳前兩項的和：fib(n-1) + fib(n-2)

}
// iteration version O(n)
function fib(n){
    //prevent n<0
    var a=0,b=1;  // 初始化兩個變數：
    // a 表示當前 Fibonacci 值
    // b 表示下一個 Fibonacci 值
    for(var i=1;i<=n;i++){
        a = a+b;
        b = a-b;
         // 每次更新 a、b
        // a 變成下一個數（a+b）
        // b 變成原本的 a（透過 a-b 反推）
    }
    return a;
}
var n=50;
console.log("fib("+n+")="+fib(n));