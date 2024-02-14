//https://leetcode.com/problems/first-missing-positive/description/

function MissingNumber(ar){
    let i=0;
    while(i<ar.length){
        if(ar[i]>0 && ar[i]<ar.length && ar[i]!==ar[ar[i]-1]){
            swap(ar,i,ar[i]-1)
        }
        else{
            i++;
        }

    }

    for(let i=0;i<=ar.length;i++){
        if(ar[i]!==i+1){
            return i+1
        }
    }
    return ar.length;
}
    function swap(ar,ele1,ele2){
        let temp=ar[ele1];
        ar[ele1]=ar[ele2];
        ar[ele2]=temp;
        // return ar;
    }

console.log(MissingNumber([7,8,9,11,12]))