function MaxProductSubarray(ar){
let prefix=1,suffix=1,max=Number.MIN_SAFE_INTEGER;
for(let i=0;i<ar.length;i++){
    if(prefix===0) prefix=1;
    if(suffix===0) suffix=1;
    prefix*=ar[i];
    suffix*=ar[ar.length-1-i];
    max=Math.max(max,Math.max(prefix,suffix));
}
return max;
}



console.log(MaxProductSubarray([2,3,-2,4]))