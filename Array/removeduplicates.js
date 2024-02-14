
function removeDuplicates(ar){
    let set=new Set(ar);

    return set
}

function better(ar){
    let i=0;
    for(let j=1;j<ar.length;j++){
        if(ar[j]!=ar[i]){
            ar[i+1]=ar[j]
            i++;
        }

    }
    return i+1;
}
console.log(removeDuplicates([1,1,2,2,2,3,3,4]))
//no of unique
console.log(better([1,1,2,2,2,3,3,4]))