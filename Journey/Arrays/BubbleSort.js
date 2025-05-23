function BubbleSort(ar){
    let n=ar.length;
    for(let i=n-1;i>=1;i--){
        for(let j=0;j<=i;j++){
            if(ar[j]>ar[j+1]){
                temp=ar[j];
                ar[j]=ar[j+1];
                ar[j+1]=temp;
            }
        }
    }
    return ar;

}

console.log(BubbleSort([20,5,-9,65,87,24,12,7,90,76,32,-21]))