//Bubble sort
function swap(ar,i,j){
    let temp;
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;

}
function BubbleSort(ar){

    for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length-1-i;j++){
            if(ar[j]>ar[j+1]){
                swap(ar,j,j+1);
            }

        }
    }
    return ar;
}


function SelectionSort(ar){
    //select max & swap with last
    let max=Number.MIN_SAFE_INTEGER,maxIndex;
    for(let i=0;i<ar.length;i++){
        max=Number.MIN_SAFE_INTEGER;
        for(let j=0;j<ar.length-i;j++){
            if(ar[j]>max){
               max=ar[j];
               maxIndex=j;
            // swap(ar,maxIndex,ar.length-i-1);
            }
        }
        swap(ar,maxIndex,ar.length-i-1);
    }
    return ar;
}

function InsertionSort(ar){
    for(let i=0;i<ar.length;i++){
       let j=i;
       while(j>0 && ar[j]<ar[j-1]){
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
        if(ar[i]===ar[correctIndex]){
            i++;
        }
        else{
            swap(ar,i,correctIndex);
        }
    }
    return ar;
}


function duplicateAndMissingNumbers(ar){
    let i=0;
    while(i<ar.length){
        let correctIndex=ar[i]-1;
        if(ar[i]===ar[correctIndex]){
            i++;
        }
        else{
            swap(ar,i,correctIndex);
        }
    }
    for(let i=0;i<ar.length;i++){
        if(ar[i]!==i+1){
            return [ar[i],i+1];
        }
    }
}

function merge(ar,low,mid,high){
    let temp=[],i=low,j=mid+1;
    while(i<=mid && j<=high){
        if(ar[i]<=ar[j]){
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
    for(let i=low;i<=high;i++){
        ar[i]=temp[i-low];
    }
    return ar;
}
function mergeSort(ar,low,high){
    if(low<high){
        let mid=parseInt((low+high)/2);
        mergeSort(ar,low,mid);
        mergeSort(ar,mid+1,high);
       return merge(ar,low,mid,high)
    }
}

function findpartitionIndex(ar,low,high){
    let pivot=ar[low],i=low,j=high;
    while(i<j){
        while(ar[i]<=pivot && i<=high){
            i++;
        }
        while(ar[j]>pivot && j>=low){
            j--;

        }
        if(i<j){
            swap(ar,i,j);
        }
    }
    swap(ar,low,j);
    return j;
}

function quickSort(ar,low,high){
    if(low<high){
       let partitionIndex=findpartitionIndex(ar,low,high);
       quickSort(ar,low,partitionIndex);
       quickSort(ar,partitionIndex+1,high);
       return ar;
    }
}
console.log(InsertionSort([85,-9,35,10,-12,-3,2]))


console.log(CycleSort([5,2,4,1,3]))

console.log(duplicateAndMissingNumbers([1,3,4,2,2]))

console.log(mergeSort([-2,5,-8,3,4,1,9],0,6))
console.log(mergeSort([20,5,-9,65,87,24,12,7,90,76,32,-21,6],0,12));

console.log("qs",quickSort([20,5,-9,65,87,24,12,7,90,76,32,-21,6],0,12));