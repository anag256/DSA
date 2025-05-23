function swap(ar,a,b){
    let temp;
    temp=ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
}
function duplicateNumber(ar){
    let i=0;

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
        if(ar[j]!=j+1) return ar[j]
    }
}
function allduplicateNumbers(ar){
    let i=0,duplicate=[];

    while(i<ar.length){
        let correct=ar[i]-1;
        if(ar[i]!=ar[correct]){
            swap(ar,i,correct)
        }
        else{
            i++;
        }
    }
    console.log("ar",ar);
    for(let j=0;j<ar.length;j++){
        if(ar[j]!=j+1)  duplicate.push(ar[j])
    }
return duplicate;
}
console.log(duplicateNumber([1,3,4,2,2]));
console.log(allduplicateNumbers([1,3,4,2,2,4,4,7,8,7,3,2]));