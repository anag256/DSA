// https://www.youtube.com/watch?v=kx7PSOBagFY&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4&index=10
//brute force
function SlidingWindow(ar,k){
    let max=Number.MIN_SAFE_INTEGER,res=[];
    for(let i=0;i<=ar.length-k;i++){
        max=ar[i];

        for(let j=i+1;j<k+i;j++){
            if(ar[j]>max){
                max=ar[j];
            }
        }
        res.push(max)
    }
    return res;
}


// https://www.youtube.com/watch?v=NwBvene4Imo
//deque-> in normal queue we can add from rear, remove from front. In dque we can also add from front & remove from rear

function SlidingWindowOptimal(ar,k){
    let dq=[],res=[];

   for(let i=0;i<ar.length;i++){
    //1) if some index does not fall in the range of sliding window,we remove it
        if(dq.length>0 && dq[0]<=i-k){
            dq.shift();
        }
    //2) check the new entry against all the existing dq elements. If the current entry is greater, we pop frm dq
    while(dq.length>0 && ar[i]>=dq[dq.length-1]){
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