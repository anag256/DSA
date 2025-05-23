//tc -o(n^2)
//swaps the min with the frst index every pass
function SelectionSort(ar){
    let n=ar.length,min=Number.MAX_SAFE_INTEGER;
    for(let i=0;i<n-1;i++){
        min=i;
        for(let j=i+1;j<n;j++){
            if(ar[j]<ar[min]){
                min=j;
            }
        }

        temp=ar[i];
        ar[i]=ar[min];
        ar[min]=temp;
    }
    return ar;

}

console.log(SelectionSort([20,5,-9,65,87,24,12,7,90,76,32,-21]))