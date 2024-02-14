//iterative
function fibonacci(n) {
  let n1 = 0,
    n2 = 1;
    let res=[];
    res.push(n1,n2);
  for (let i = 0; i < n; i++) {
    temp = n2;
    n2 = n1 + n2;
    n1 = temp;
    res.push(n2);
  }
  return res;
}

//recursive ( get the nth fibonacci)
//o(2^n) exponential
function recursive(n){
    if(n<=1) return n;
    return recursive(n-1)+recursive(n-2);
}
console.log(recursive(6));