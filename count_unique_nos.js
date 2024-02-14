function count_unique(ar){
    let i=0;
    let j=ar.length-1;
    while(i<j){
        if(ar[i]!==ar[j]){

            i++;
        }
        j++;
    }
}

 console.log(count_unique([1,1,2,3,3,3,4,4,5,5,6]))