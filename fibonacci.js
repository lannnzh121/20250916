//recursion O(2^n)
function fib(n){
    if(n==0 || n==1)
        return n;
    else
        return fib(n-1)+fib(n-2);

}
// iteration version O(n)
function fib(n){
    //prevent n<0
    var a=0,b=1;
    for(var i=1;i<=n;i++){
        a = a+b;
        b = a-b;
    }
    return a;
}
var n=50;
console.log("fib("+n+")="+fib(n));