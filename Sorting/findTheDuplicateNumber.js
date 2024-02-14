//https://leetcode.com/problems/find-the-duplicate-number/description/

function findTheDuplicateNumber(ar){
    let i=0;
    while(i<ar.length){
        if( ar[i]!==ar[ar[i]-1]){
            swap(ar,i,ar[i]-1)
        }
        else{
            i++;
        }

    }

    for(let i=0;i<ar.length;i++){
        if(ar[i]!==i+1){
           return ar[i];
        }
    }

}
function swap(ar,ele1,ele2){
    let temp=ar[ele1];
    ar[ele1]=ar[ele2];
    ar[ele2]=temp;
    // return ar;
}
console.log(findTheDuplicateNumber([1,3,4,2,2]))