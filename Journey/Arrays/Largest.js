
//brute force would be to sort & get the last element- o(nlogn)
//o(n)
function Largest(ar){
    let largest=ar[0];
    for(let i=0;i<ar.length;i++){
        if(ar[i]>largest){
            largest=ar[i]
        }
    }
    return largest;
}

function secondLargest(ar){
    let largest=ar[0],secondL=Number.MAX_SAFE_INTEGER;
    for(let i=1;i<ar.length;i++){
        if(ar[i]>largest){
            secondL=largest;
            largest=ar[i];

        }
        if(ar[i]<largest && ar[i]>secondL){
            secondL=ar[i];
        }
    }
    return secondL;
}

console.log(Largest([3,7,1,5,89,54,25,12,90]));
console.log(secondLargest([3,7,1,5,89,54,25,12,0]));