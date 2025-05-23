function swap(ar,a,b){
    let temp;
    temp=ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
    return ar;
}
//tc - o(n)
//sc - o(1)
function CycleSort(ar){
    let i=0;

    while(i<ar.length){
        let correct=ar[i]-1;
        if(ar[i]!=ar[correct]){ //index=value-1
            swap(ar,i,correct);

        }
        else{
        i++;
        }
    }
    return ar;
}

console.log(CycleSort([2,3,1,5,4,6]));