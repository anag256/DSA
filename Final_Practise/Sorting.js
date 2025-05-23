function swap(ar,i,j){
    let temp;
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;
}
function BubbleSort(ar){
    for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length-i-1;j++){
            if(ar[j]>ar[j+1]){
                swap(ar,j+1,j);
            }
        }
    }
    return ar;
}


function SelectionSort(ar){
    let max=Number.MIN_SAFE_INTEGER,maxIndex=-1;
    for(let i=0;i<ar.length;i++){
        max=Number.MIN_SAFE_INTEGER;
        maxIndex=-1;
        for(let j=0;j<ar.length-i;j++){
            if(ar[j]>max){
                max=ar[j];
                maxIndex=j;
            }
        }
        swap(ar,maxIndex,ar.length-i-1);
    }
    return ar;
}


function InsertionSort(ar){

    for(let i=1;i<ar.length;i++){
        let j=i;
        while(ar[j]<ar[j-1] && j>=1){
            swap(ar,j,j-1);
            j--;
        }
    }
    return ar;
}


function CycleSort(ar){

let i=0;
   while(i<ar.length){
    let correctIndex=ar[i]-1;
    if(ar[i]!==ar[correctIndex]){
        swap(ar,i,correctIndex);
    }
    else{
        i++;
    }
   }
   return ar;
}


function duplicateAndMissingNumbers(ar){
    let duplicates=[],missings=[];

    let i=0;

    while(i<ar.length){
        let correctIndex=ar[i]-1;
        if(ar[i] !== ar[correctIndex]){
            swap(ar,i,correctIndex);
        }
        else{
            i++;
        }
    }

    for(let j=0;j<ar.length;j++){
        if(ar[j] !== j+1){
            duplicates.push(ar[j]);
            missings.push(j+1);
        }
    }
    return {
        duplicates,
        missings
    }
}

function merge(ar,low,mid,high){
    let temp=[],i=low,j=mid+1;

    while(i<=mid && j<=high){
        if(ar[i]<ar[j]){
            temp.push(ar[i]);
            i++;
        }
        else{
            temp.push(ar[j]);
            j++;
        }
    }

    while(i<=mid){
        temp.push(ar[i]);
        i++;
    }
    while(j<=high){
        temp.push(ar[j]);
        j++;
    }
    for(let k=low;k<=high;k++){
        ar[k]=temp[k-low]
    }
// return ar
}

function mergeSort(ar,low,high){
    if(low<high){
        let mid=parseInt((low+high)/2);
        mergeSort(ar,low,mid);
        mergeSort(ar,mid+1,high);
          merge(ar,low,mid,high)

    }
    return ar;
}

function findPartitionInex(ar,low,high){
    let i=low,j=high,pivot=low;
    while(i<j){
          //find first el > pivot
    while(i<=high && ar[i]<=ar[pivot] ){
        i++;

    }
    //find first ele < pivot
    while(j>=low && ar[j]>ar[pivot] ){
        j--;

    }

    if(i<j) swap(ar,i,j);
    }


    swap(ar,pivot,j);

    return j;
}
function quickSort(ar,low,high){
    if(low<high){
        let partitionIndex=findPartitionInex(ar,low,high);
        quickSort(ar,low,partitionIndex-1);
        quickSort(ar,partitionIndex+1,high);
    }
    return ar;
}
console.log(BubbleSort([-2,-29,-12,9,7,3,0,-6,20,12,3,-1]))
console.log(SelectionSort([-2,-29,-12,9,7,3,0,-6,20,12,3,-1]))
console.log(InsertionSort([-2,-29,-12,9,7,3,0,-6,20,12,3,-1]))

console.log(CycleSort([2,3,1,5,4,6]));


console.log(duplicateAndMissingNumbers([1,3,4,2,2]))

console.log(mergeSort([-2,-29,-12,9,7,3,0,-6,20,12,3,-1],0,11))
console.log("qs",quickSort([-2,-29,-12,9,7,3,0,-6,20,12,3,-1],0,11))