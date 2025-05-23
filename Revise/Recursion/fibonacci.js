//iterative

function fibonacci(n){
    let n1=0,n2=1;
    let res=[];
    res.push(n1,n2);
    for(let i=2;i<n;i++){
       temp=n2;
        n2=n1+n2;
        n1=temp;
        res.push(n2);

    }
    return res;
}

function fibonacci_recursive(n){
    if(n==0 || n==1) return n;
    return fibonacci_recursive(n-1)+fibonacci_recursive(n-2);
}

console.log(fibonacci_recursive(4));