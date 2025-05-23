//better
//tc- o(n^2)
function countSubarray(ar,k){
    let sum=0,count=0;
    for(let i=0;i<ar.length;i++){
        sum=0;
        for(let j=i;j<ar.length;j++){
            sum+=ar[j];
            if(sum===k) count++;
        }

    }
    return count;
}

//optimal
//incomplete-todo
function countSubarrayOptimal(ar,k){
    let prefixSum=0,count=0,hashObj={0:1};
    for(let i=0;i<ar.length;i++){
        prefixSum+=ar[i];
        let rem=prefixSum-k;
       count=hashObj[rem] || hashObj[rem]==0 ? count+hashObj[rem] :0;
       hashObj[prefixSum]=hashObj[prefixSum] || hashObj[prefixSum]==0 ? hashObj[prefixSum]+1:0;

    }
    return count;
}

console.log(countSubarray([1, 2, 3, 1, 1, 1, 1, 4, 3, 2],3))
console.log(countSubarrayOptimal([1, 2, 3, 1, 1, 1, 1, 4, 3, 2],3))