function SlidingWindow(ar,k){
    let n=ar.length,max=Number.MIN_SAFE_INTEGER,res=[];
    for(let i=0;i<=n-k;i++){
        max=ar[i];
        for(let j=i+1;j<i+k;j++){
            if(ar[j]>max){
                max=ar[j];
            }
        }
        res.push(max);
    }
    return res;
}


function SlidingWindowOptimal(ar,k){
    let dq=[],res=[];
    for(let i=0;i<ar.length;i++){
        if(dq.length!==0 && dq[0]<=i-k){
            dq.shift()
        }

        while(dq.length!==0 && ar[i]>=dq[dq.length-1]){
            dq.pop();
        }
        dq.push(i);
        if(i>=k-1){
            res.push(ar[dq[0]]);
        }
    }
    return res;

}





console.log(SlidingWindow([1,3,-1,-3,5,3,6,7],3))
console.log(SlidingWindowOptimal([1,3,-1,-3,5,3,6,7],3))