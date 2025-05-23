// https://leetcode.com/problems/first-missing-positive/description/

function swap(ar,a,b){
    let temp;
    temp=ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
}
function firstMissingPositive(ar){
    let i=0;

    while(i<ar.length){
        let correct=ar[i]-1;
        if(ar[i]>0 && ar[i]<ar.length && ar[i]!=ar[correct]){
            swap(ar,i,correct)
        }
        else{
            i++;
        }
    }
    for(let j=0;j<ar.length;j++){
        if(ar[j]!=j+1) return j+1;
    }
    return ar.length;
}

console.log(firstMissingPositive([3,4,-1,1,2]));