//with the first pass,largest element comes in the end and so on
//best o(n)
//worst o(n2)
function BubbleSort(ar){
    let swapped=false;
    for(let i=0;i<ar.length;i++){
        for(let j=1;j<ar.length-i;j++){ // ar.length-i because last elements will get sorted after each pass
            if(ar[j]<ar[j-1]){
                temp=ar[j];
                ar[j]=ar[j-1];
                ar[j-1]=temp
                swapped=true;
            }
        }
        //if you did not swap a j for a particular value of i then array is sorted
        if(!swapped){
            break;
        }
    }

    return ar;
}

console.log(BubbleSort([5,2,9,-5,0,25,1,7]))