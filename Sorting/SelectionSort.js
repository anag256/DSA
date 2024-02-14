//choose any one element say max from array and put it at its correct index.best/worst o(n2) stable=no
// [4,6,3,1,2]=> in this array 6 is max so it will be first put at index 4 followed by 4  at index 3 and so on
function SelectionSort(ar){
let maxIndex;
   for(let i=0;i<ar.length;i++){
    let end=ar.length-i-1; // if its sorted at last ,ignore those
   maxIndex= getMaxIndex(ar,0,end);
   swap(ar,maxIndex,end)
   }


return ar;

}

function getMaxIndex(ar,start,end){
    let max=start;
    for(i=start+1;i<=end;i++){
        if(ar[i]>ar[max]){
            max=i;
        }
    }
    return max;
}
function swap(ar,ele1,ele2){
    let temp=ar[ele1];
    ar[ele1]=ar[ele2];
    ar[ele2]=temp;
    // return ar;
}

console.log(SelectionSort([5,2,9,-5,0,25,1,7]))