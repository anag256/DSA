function sum_parameterised(i,sum){
    if(i<1) {
        console.log(sum);
        return;
    }
    sum_parameterised(i-1,sum+i);

}
function sum_functional(n){
    if(n===0) return 0;
   return n+sum_functional(n-1);
}
console.log(sum_functional(5));
// sum_parameterised(5,0)