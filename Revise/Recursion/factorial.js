function factorial_param(i,fact){
    if(i==1) {
        return fact;
    };
    return factorial_param(i-1,fact*i);
}

function factorial_functional(n){
    if(n==1) return 1;
    return n * factorial_functional(n-1);
}
console.log(factorial_functional(5));