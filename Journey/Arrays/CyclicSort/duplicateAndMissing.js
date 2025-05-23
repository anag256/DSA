function swap(ar,a,b){
    let temp;
    temp=ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
}
function duplicateAndMissingNumbers(ar){
    let i=0;
    let ele=[];
    while(i<ar.length){
        let correct=ar[i]-1;
        if(ar[i]!=ar[correct]){
            swap(ar,i,correct)
        }
        else{
            i++;
        }
    }
    for(let j=0;j<ar.length;j++){
        if(ar[j]!=j+1) ele.push(ar[j],j+1);
    }
    return ele;
}

console.log(duplicateAndMissingNumbers([1,3,4,2,2]));