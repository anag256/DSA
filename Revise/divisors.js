function divisors(n){
    for(let i=1;i<=n;i++){
        if(n%i==0){
            console.log(i)
        }
    }
}

function optimised_divisors(n){
    let ar=[];
    //o(sqrt(n))
    for(let i=1;i<=Math.sqrt(n);i++){ // use i*i<=n in place of Math.sqrt
        if(n%i==0){
            ar.push(i);
            if(parseInt(n/i)!=i){
                ar.push(parseInt(n/i))
            }

        }
    }
    //o(nlogn) - n no of factors
    return ar.sort((a,b)=>a-b);
}

console.log(optimised_divisors(36))