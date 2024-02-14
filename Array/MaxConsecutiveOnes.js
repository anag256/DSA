//o(n)
function MaxConsecutiveOnes(ar){
    let max=0;
    let count=0;
    for(let i=0;i<ar.length;i++){
        if(ar[i]==1){
            count++;
            max=count>max?count:max;
        }
        else count=0;
    }
    return max;
}
console.log(MaxConsecutiveOnes([1,1,0,1,1,1,0,1,1]))