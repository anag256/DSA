//o(n2)-worst
//o(n)-best
function InsetionSort(ar){
    for(let i=0;i<ar.length-1;i++){
        for(let j=i+1;j>0;j--){

            if(ar[j]<ar[j-1]){
                swap(ar,j,j-1)
            }
            else{break;}
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

console.log(InsetionSort([5,2,9,-5,0,25,1,7]))