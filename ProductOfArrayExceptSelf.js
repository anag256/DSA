function ProductOfArrayExceptSelf(ar){
    let left=[],right=[];

    left[0]=1;
    right[ar.length-1]=1;

    for(let i=1;i<ar.length;i++){
        left[i]=left[i-1]*ar[i-1];
    }

    for(let i=ar.length-2;i>=0;i--){
        right[i]=right[i+1]*ar[i+1];
    }

    for(let i=0;i<ar.length;i++){
        ar[i]=left[i]*right[i];
    }
    return ar;
}

console.log(ProductOfArrayExceptSelf([1,2,3,4]))