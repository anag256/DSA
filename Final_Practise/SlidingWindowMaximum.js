function SlidingWindowMax(ar,k){
    let maxAr=[],max=Number.MIN_SAFE_INTEGER
    for(let i=0;i<=ar.length-k;i++){
        max=Number.MIN_SAFE_INTEGER;
        for(let j=i;j<i+k;j++){
            max=Math.max(max,ar[j]);
        }
        maxAr.push(max);
    }
    return maxAr;
}


function SlidingWindowMaxOptimal(ar,k){
    let dq=[],i=0,maxAr=[];
    while(i<ar.length){
        if(dq.length!==0 && dq[0]<=i-k){
            dq.shift();
        }
        while(dq.length !==0 && ar[i] > ar[dq[dq.length-1]]){
            dq.pop();
        }
        dq.push(i);
        if(i>=k-1){
            maxAr.push(ar[dq[0]]);
        }

        i++;
    }
    return maxAr;
}

console.log(SlidingWindowMax([1,3,-1,-3,5,3,6,7],3))
console.log(SlidingWindowMaxOptimal([1,3,-1,-3,5,3,6,7],3))