function ValidateSorting(ar){
    for(let i=1;i<ar.length;i++){
        if(ar[i]<ar[i-1]){
            return false;
        }
    }
    return true;
}
console.log(ValidateSorting([1,2,23,4,7,9]))