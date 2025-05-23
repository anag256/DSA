function swap(ar,a,b){
    let temp;
    temp=ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
    return ar;
}
function CycleSort(ar){
    let i=0;
    while(i<ar.length){
        if(ar[i]!==ar[ar[i]-1]){
            ar=swap(ar,i,ar[i]-1)
        }
        else{
            i++;
        }
    }
    return ar;
}
function duplicateAndMissingNumbers(ar){
    let i=0;
    let ans=[-1,-1];
    while(i<ar.length){
        if(ar[i]!==ar[ar[i]-1]){
            ar=swap(ar,i,ar[i]-1)
        }
        else{
            i++;
        }
    }
    for(let j=0;j<ar.length;j++){
        if(ar[j]-1!==j){
            ans= [j+1,ar[j]]
        }
    }
    return ans;
}

function firstMissingPositive(ar){
    let i=0;
    while(i<ar.length){
        if(ar[i]>0 && ar[i]<ar.length-1 && ar[i]!==ar[ar[i]-1]){
            ar=swap(ar,i,ar[i]-1)
        }
        else{
            i++;
        }
    }
    for(let j=0;j<ar.length;j++){
        if(ar[j]-1!==j){
            return j+1;
        }
    }
    return ans;
}
console.log(CycleSort([2,3,1,5,4,6]))
console.log(duplicateAndMissingNumbers([1,3,4,2,2]))
console.log(firstMissingPositive([3,4,-1,1]))