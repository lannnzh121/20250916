function fact(n){
    if(n==1)
        return 1;
    else
        return n*(fact(n-1));
}
function sum(n){
    if(n==1)
        return 1;
    else
        return n+sum(n-1);
}
var n=3;
console.log(n+"!="+fact(n));