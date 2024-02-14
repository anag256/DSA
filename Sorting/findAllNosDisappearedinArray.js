//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
function findAllNumbersDisappearedinArray(ar){
    let i=0;
    let res=[];
    while(i<ar.length){
        if( ar[i]!==ar[ar[i]-1]){
            swap(ar,i,ar[i]-1)
        }
        else{
            i++;
        }

    }
    console.log(ar);
    for(let i=0;i<ar.length;i++){
        if(ar[i]!==i+1){
            res.push(i+1);
        }
    }
    return res;
}
function swap(ar,ele1,ele2){
    let temp=ar[ele1];
    ar[ele1]=ar[ele2];
    ar[ele2]=temp;
    // return ar;
}
console.log(findAllNumbersDisappearedinArray([1,3,4,2,2]))