function armstrong(n){
    let rem=0,sum=0,original=n,count=0;
    while(n>0){
        rem=n%10;
        n=parseInt(n/10);

       sum+=Math.pow(rem,original.toString().length)
    }

    return sum==original
}

console.log(armstrong(1634))