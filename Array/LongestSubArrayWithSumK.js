function LongestSubArrayWithSumKBruteForce(ar,k){

    let len=0;
    let n=ar.length;
    let sum;
    for(let i=1;i<=n;i++){
        for(let j=i;j<n;j++){
            sum=0;
            for(let l=i;l<j;l++){
                sum=sum+ar[l];
            }
            if(sum==k) len=Math.max(len,(j-i))
        }
    }
    return len;
}

console.log(LongestSubArrayWithSumKBruteForce([1,2,3,1,1,1,4,2,3],3))