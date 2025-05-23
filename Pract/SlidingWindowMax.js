function SlidingWindowMax(ar,k ){
    let max=[],maxVal=Number.MIN_SAFE_INTEGER;

    for(let i=0;i<=ar.length-k;i++){
        maxVal=Number.MIN_SAFE_INTEGER
        for(let j=i;j<i+k;j++){
            maxVal=Math.max(maxVal,ar[j]);

        }
        max.push(maxVal);
    }
    return max;
}

function SlidingWindowOptimal(ar,k){
    let dq=[],res=[];

    for(let i=0;i<ar.length;i++){
        if(dq.length!==0 && dq[0]<=i-k){
            dq.shift();
        }

        while(dq.length!==0 &&  ar[i]>dq[dq.length-1]){
            dq.pop();
        }

        dq.push(i);

        if(i>=k-1){
            res.push(ar[dq[0]])
        }
    }
    return res;
}


console.log(SlidingWindowMax([1,3,-1,-3,5,3,6,7],3))
console.log(SlidingWindowOptimal([1,3,-1,-3,5,3,6,7],3))