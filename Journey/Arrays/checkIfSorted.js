//tc -o(n)
function checkIfSorted(ar){
    for(let i=0;i<ar.length-1;i++){
        if(ar[i+1]<ar[i]){
            return false;
        }
    }
    return true;
}

console.log(checkIfSorted([-10,1,1,9,10,20,22]))