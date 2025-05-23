//brute force sort frst and take last element . sorting will be o(nlogn)
//optimal approach
function largest(ar){
    let largest=ar[0];
    for(let i=1;i<ar.length;i++){
        if(ar[i]>largest){
            largest=ar[i]
        }
    }
    return largest;
}
//better o(2n)
function secondLargest(ar){
    let largestNo=largest(ar);
    let secondLargest=ar[0]
    for(let i=1;i<ar.length;i++){
        if(ar[i]>secondLargest && ar[i]<largestNo){
            secondLargest=ar[i]
        }
    }
    return secondLargest;
}

//optimal o(n)
function secondLargestOptimal(ar){
    let largest=ar[0];
    let secondLargest=-1;
    for(let i=1;i<ar.length;i++){
        if(ar[i]>largest){
            secondLargest=largest;
            largest=ar[i];

        }
         if(ar[i]>secondLargest && ar[i]<largest){
            secondLargest=ar[i]
        }
    }

    return [largest,secondLargest];

}

function secondSmallestOptimal(ar){
    let smallest=ar[0];
    let secondSmallest=9999999999;
    for(let i=1;i<ar.length;i++){
        if(ar[i]<smallest){
            secondSmallest=smallest;
            smallest=ar[i];

        }
         if(ar[i]<secondSmallest && ar[i]>smallest){
            secondSmallest=ar[i]
        }
    }

    return [smallest,secondSmallest];

}
console.log(largest([2,4,8,76,28,72,89,43,32,12,16]))
console.log(secondLargestOptimal([2,4,8,76,28,72,89,43,32,12,16]))
console.log(secondSmallestOptimal([2,4,8,76,28,72,89,43,32,12,16]))