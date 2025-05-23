function isPrime(n){
    let count=0;
    for(let i=1;i*i<=n;i++){
        if(n%i==0){
            count++;
            if(parseInt(n/i)!=i){
                count++;
            }
        }

    }
   return count==2;
}
console.log(isPrime(11));