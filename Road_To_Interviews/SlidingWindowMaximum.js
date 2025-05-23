
function SlidingWindow(ar,k){
    let max=Number.MIN_SAFE_INTEGER,maxAr=[];
    for(let i=0;i<=ar.length-k;i++){
        max=Number.MIN_SAFE_INTEGER;
        for(let j=i;j<i+k;j++){
            max=Math.max(max,ar[j]);
        }
        maxAr.push(max);
    }
    return maxAr;
}


function SlidingWindowOptimal(ar,k){
    let deque=[],maxAr=[];
    for(let i=0;i<ar.length;i++){
        //check if dq is not empty and we are maintaining the correct window elements

        if(!deque.length==0 && deque[0]<=i-k){
            deque.shift();
        }

        //check if current ele > deque elements
        while(ar[i]>ar[deque[deque.length-1]]){
            deque.pop();
        }

        deque.push(i);

        if(i>=k-1){
            maxAr.push(ar[deque[0]]);
        }
    }
    return maxAr;
}


console.log(SlidingWindow([1,3,-1,-3,5,3,6,7],3))
console.log(SlidingWindowOptimal([1,3,-1,-3,5,3,6,7],3))