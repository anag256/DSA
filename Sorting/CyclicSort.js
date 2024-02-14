//when nos given in the range 1->n => cyclic sort or 0=>n
//[3,2,1,5,4]
// 0 1 2 3 4
function CyclicSort(ar){
    let i=0;
    while(i<ar.length){
        if(ar[i]!==ar[ar[i]-1]){
            swap(ar,i,ar[i]-1)
        }
        else{
            i++;
        }

    }
    return ar;
}

function swap(ar,ele1,ele2){
    let temp=ar[ele1];
    ar[ele1]=ar[ele2];
    ar[ele2]=temp;
    // return ar;
}
console.log(CyclicSort([9,6,4,2,3,5,8,7,1]));