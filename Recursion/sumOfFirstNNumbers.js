//parameteried
function Sum(n,sum){
    if(n<1){
        console.log(sum);
        return;
    }
    Sum(n-1,sum+n);
}

// functional
function SumViaFunction(n){
    if(n==0) return 0;
    return n+SumViaFunction(n-1)
}
//factorial
function ProductViaFunction(n){
    if(n==1) return 1;
    return n*ProductViaFunction(n-1)
}

console.log(SumViaFunction(5));
console.log(ProductViaFunction(3));