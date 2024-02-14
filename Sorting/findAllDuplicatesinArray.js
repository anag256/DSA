
function findAllDuplicateNumber(ar){
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

    for(let i=0;i<ar.length;i++){
        if(ar[i]!==i+1){
           res.push(ar[i]);
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
console.log(findAllDuplicateNumber([4,3,2,7,8,2,3,1]))