function printAllDivisors(num){
    let factors=[]
    for(let i=1;i<=num;i++){
        if(num%i===0){
            factors.push(i)
        }
    }
    return factors;
}
function OptimisedApproach(num){
    let factors=[];
    for(let i=1;i<=Math.sqrt(num);i++){
        // o(sqrt(n))
        if(num%i===0){
            factors.push(i);
            if(num/i!==i){
                factors.push(num/i)
            }
        }
    }
    //o(nlogn) n:no of factors
    return factors.sort((a,b)=>a-b);
}
console.log(OptimisedApproach(36))