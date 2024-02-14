function PrimeNumber(n){
    //a number that has exactly 2 factors 1 & itself
let count=0;
    for(i=1;i<=parseInt(Math.sqrt(n));i++){
        if(n%i===0){
            count++;
            if(n/i!=i){count++}
        }

    }
    if(count==2) return true;
    return false
}
console.log(PrimeNumber(32))