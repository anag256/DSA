//brute
//tc- o(n^2) sc- o(1)
function MaximumSubArraySum(ar){
    let sum=0,max=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<ar.length;i++){
        sum=0;
        for(let j=i+1;j<ar.length;j++){
            sum+=ar[j];
            max=Math.max(sum,max);
        }

    }
    return max;
}

//optimal- kadane's algo
//tc - o(n) sc- o(1)

function MaximumSubArraySumOptimal(ar){
    let sum=0,max=Number.MIN_SAFE_INTEGER,ansStart=-1,ansEnd=-1;
    for(let i=0;i<ar.length;i++){
        if(sum===0){
            ansStart=i;
        }
        sum+=ar[i];

       if(sum>max){
        max=sum;
        ansEnd=i;
       }

        if(sum<0){
            sum=0;
        }
    }
    return [max,ansStart,ansEnd];
}
console.log(MaximumSubArraySum([-2,-3,4,-1,-2,5,-3]));
console.log(MaximumSubArraySumOptimal([-2,-3,4,-1,-2,5,-3]));

console.log(MaximumSubArraySumOptimal([-2,-3,-1]));