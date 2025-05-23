function BubbleSort(ar){
    for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length-i-1;j++){
            if(ar[j]>ar[j+1]){
                temp=ar[j];
                ar[j]=ar[j+1];
                ar[j+1]=temp;
            }
        }
    }
    return ar;
}



function SelectionSort(ar){
    let temp,maxIndex=0,lastIndex=ar.length-1,max=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<ar.length;i++){
        //find max
        max=Number.MIN_SAFE_INTEGER,maxIndex=0;
        for(let j=0;j<=ar.length-1-i;j++){
            if(ar[j]>max){
                max=ar[j];
                maxIndex=j;
            }
        }
        //swap last and max
        temp=ar[maxIndex];
        ar[maxIndex]=ar[lastIndex-i];
        ar[lastIndex-i]=temp;

    }
    return ar;
}


function InsertionSort(ar){
    let temp,j;
    for(let i=1;i<ar.length;i++){
        j=i;
        while(j>0 && ar[j]<ar[j-1]){
            temp=ar[j];
            ar[j]=ar[j-1];
            ar[j-1]=temp;
            j--;
        }
    }
    return ar;
}

function CycleSort(ar){
    let i=0,correctIndex=ar[i]-1;
    while(i<ar.length){
        correctIndex=ar[i]-1
        if(ar[correctIndex]!==ar[i]){
            temp=ar[correctIndex];
            ar[correctIndex]=ar[i];
            ar[i]=temp;
        }
        else{
            i++;
        }
    }
    return ar;
}

function findDuplicateAndMissingNumbers(ar){
    let i=0,missing={};
    while(i<ar.length){
        correctIndex=ar[i]-1;
        if(ar[i]!==ar[correctIndex]){
            temp=ar[i];
            ar[i]=ar[correctIndex];
            ar[correctIndex]=temp;

        }
        else{
            i++;
        }
    }
   for(let i=0;i<ar.length;i++){
    if(ar[i]!==i+1){
        missing['missing']=i+1;
        missing['duplicate']=ar[i];
    }
   }
   return missing;
}

function findAllDuplicateAndMissingNumbers(ar){
    let i=0,missing={missing:[],duplicate:[]};
    while(i<ar.length){
        correctIndex=ar[i]-1;
        if(ar[i]!==ar[correctIndex]){
            temp=ar[i];
            ar[i]=ar[correctIndex];
            ar[correctIndex]=temp;

        }
        else{
            i++;
        }
    }
   for(let i=0;i<ar.length;i++){
    if(ar[i]!==i+1){
        missing['missing'].push(i+1);
        missing['duplicate'].push(ar[i]);
    }
   }
   return missing;
}

function merge(ar,low,mid,high){
    let i=low,j=mid+1,temp=[];
    while(i<=mid && j<=high){
        if(ar[i]>=ar[j]){
            temp.push(ar[j]);
            j++;
        }
        else{
            temp.push(ar[i]);
            i++;

        }
    }

    //leftovers
    while(i<=mid){
        temp.push(ar[i]);
            i++;
    }
     //leftovers
     while( j<=high){
        temp.push(ar[j]);
            j++;
    }
    for(let i=low;i<=high;i++){
        ar[i]=temp[i-low]
    }

    return ar;
}
function MergeSort(ar,low,high){
    if(low<high){
        let mid=parseInt((low+high)/2);
        MergeSort(ar,low,mid);
        MergeSort(ar,mid+1,high);
       return  merge(ar,low,mid,high)
    }
}
function findPivot(ar,low,high){
    let i=low,j=high,pivot=low,temp;
    //try to find the first element from the left which is greater than pivot and find the first element from the right which is smaller than pivot
    while(i<j){
        while(ar[i]<=ar[pivot] && i<=high){
            i++;
        }
        while(ar[j]>ar[pivot] && j>=low){
            j--;
        }
        if(i<j){
            temp=ar[i];
            ar[i]=ar[j];
            ar[j]=temp;

        }

    }

        temp=ar[pivot];
        ar[pivot]=ar[j];
        ar[j]=temp;
return j;

}

function QuickSort(ar,low,high){
    if(low<high){
        pivot=findPivot(ar,low,high);
         QuickSort(ar,low,pivot);
         QuickSort(ar,pivot+1,high);
         return ar;
    }

}

console.log(InsertionSort([2,35,17,-7,-1,-23,89,62,32]));
console.log(InsertionSort([20,5,-9,65,87,24,12,7,90,76,32,-21]))

console.log(CycleSort([5,4,2,3,6,1]));

console.log(CycleSort([2,3,1,5,4,6]));
console.log(CycleSort([7,3,6,2,5,1,4]));

console.log(findDuplicateAndMissingNumbers([1,3,4,2,2]));

console.log(findAllDuplicateAndMissingNumbers([1,3,4,2,2,4,4,7,8,7,3,2]));


console.log("merge sort:",MergeSort([20,5,-9,65,87,24,12,7,90,76,32],0,10))

console.log(QuickSort([2,9,1,25,16,8,3,5,10],0,8))
console.log("Quick sort:",QuickSort([20,5,-9,65,87,24,12,7,90,76,32],0,10))