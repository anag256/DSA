//brute
//nearly - o(n^2)
function NSum(ar,target){
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
            if(ar[i]+ar[j]===target){
                return [i,j];
            }
        }
    }
    return -1;
}


//tc-o(n)
function NSumOptimal(ar,target){
    let hashObj={};
    for(let i=0;i<ar.length;i++){
       if(hashObj[target-ar[i]]){
        return [hashObj[target-ar[i]]-1,i]
       }
       hashObj[ar[i]]=i+1;
    }
    return [-1,-1]
}

function TwoSumMostOptimal(ar,target){
    let unsortedAr=[...ar];


    ar.sort((a,b)=>a-b);
    let left=0,right=ar.length-1;
    console.log(ar);
    while(left<right){
        if((ar[left]+ar[right])=== target){
            return [ar[left],ar[right]];
        }
        if(ar[left]+ar[right] > target){
            right--;
        }
        else{
            left++;
        }
    }
    return -1
}
console.log(NSum([2,4,8,16,24,5],24))

console.log(NSumOptimal([2,4,8,16,24,5],7))

console.log(TwoSumMostOptimal([2,4,8,16,24,5],12))