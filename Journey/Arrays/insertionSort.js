function InsertionSort(ar){
    let temp,j=0;
    for(let i=0;i<ar.length;i++){
        j=i;
        while(j>0 && ar[j-1]>ar[j]){
            temp=ar[j];
            ar[j]=ar[j-1];
            ar[j-1]=temp;
            j--;
        }

    }

    return ar;
}

console.log(InsertionSort([20,5,-9,65,87,24,12,7,90,76,32,-21]))