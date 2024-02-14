//https://leetcode.com/problems/missing-number/description/
//cyclic sort
//or use sum of n nos.
//o(2n)
function MissingNumber(ar){
    let i=0;
    while(i<ar.length){
        if(ar[i]<ar.length && ar[i]!==ar[ar[i]]){
            swap(ar,i,ar[i])
        }
        else{
            i++;
        }

    }

    for(let i=0;i<=ar.length;i++){
        if(ar[i]!==i){
            return i
        }
    }
    return ar.length;
}
// o(n)
function usingSummation(ar){
    let n=ar.length;
    // let sum =Math.floor(n*(n-1)/2)
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+ar[i];
    }
    return Math.floor(n*(n+1)/2)-sum;
}
function swap(ar,ele1,ele2){
    let temp=ar[ele1];
    ar[ele1]=ar[ele2];
    ar[ele2]=temp;
    // return ar;
}

console.log(usingSummation([9,6,4,2,3,5,7,0,1]))