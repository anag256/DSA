function MaxProductSubarray(ar){
    let prefix=1,suffix=1,maxProd=0;
    for(let i=0;i<ar.length;i++){
        prefix*=ar[i];
        suffix*=ar[ar.length-1-i];
        maxProd=Math.max(maxProd,Math.max(prefix,suffix));
        if(prefix===0) prefix=1;
        if(suffix===0) suffix=1;
    }
    return maxProd;
}


console.log(MaxProductSubarray([2,3,-2,4]))