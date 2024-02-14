//tc->o(nlogn)
//sc->o(1) //betteer than mergesort

function QuickSort(ar,low,high){
    if(low<high){
             let partitionIndex=placePivot(ar,low,high);
             QuickSort(ar,low,partitionIndex);
             QuickSort(ar,partitionIndex+1,high);
             return ar;
    }

}

function swap(ar,i,j){
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;
}

function placePivot(ar,low,high){
    let pivot=low;
    let i=low;
    let j=high;
    while(i<j){
        while(ar[i]<=ar[pivot] && i<= high){ //find greater than pivot from left hand side
            i++;
        }
        while(ar[j]>ar[pivot] && j>=low) {
            // find smaller than pivot from right hand side
            j--;
        }
        if(i<j) {
            swap(ar,i,j);
        }
    }

    swap(ar,pivot,j);
    return j;

}

console.log(QuickSort([2,9,1,25,16,8,3,5,10],0,8))

