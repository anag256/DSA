//tc->o(nlogn)
//sc->o(1) //betteer than mergesort
function swap(ar,i,j){
    let temp;
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp
}


function partition(ar,low,high){
    let pivot=ar[low];
    let i=low;
    let j=high;
    while(i<j){
        //till we find frst ele greater from left and frst ele smaller frm right
        while(ar[i]<=pivot && i<=high-1){
            i++;
        }
        while(ar[j]>pivot && j>=low+1){
            j--;
        }
        if(i<j){
            swap(ar,i,j);
         };
    }
    swap(ar,low,j);
    return j;
}
function QuickSort(ar,low,high){
    if(low<high){
        let partitionIndex=partition(ar,low,high);
        QuickSort(ar,low,partitionIndex-1);
        QuickSort(ar,partitionIndex+1,high);
        return ar;
    }

}
console.log(QuickSort([20,5,-9,65,87,24,12,7,90,76,32,-21,6],0,12))