// o(2n) ->better approach better than sorting o(nlogn)
function secondLargest(ar){
    let largest=ar[0];
    let secondLargest=ar[0];
    for(let i=1;i<=ar.length-1;i++){
        if(ar[i]>largest) largest=ar[i]
    }
    for(let i=1;i<=ar.length-1;i++){
        if(ar[i]>secondLargest && ar[i]!=largest) secondLargest=ar[i]
    }
    return secondLargest
}
// console.log(secondLargest([2,5,1,89,56,45,23,12]))


//optimal approach - o(n)

function optimalApproch(ar){
    let largest=ar[0];
    let secondLargest=-1;
    for(let i=1;i<ar.length;i++){
        if(ar[i]>largest){
            secondLargest=largest;
            largest=ar[i];

        }
        if(ar[i]>secondLargest && ar[i]<largest){
            secondLargest=ar[i];
        }
    }
    return secondLargest;
}

function OptimalSecondSmallest(ar){
    let smallest=ar[0];
    let secondSmallest=Number.MAX_SAFE_INTEGER;

    for(let i=1;i<ar.length;i++){
        if(ar[i]<smallest){
            secondSmallest=smallest;
            smallest=ar[i];

        }
        if(ar[i]<secondSmallest && ar[i]>smallest){
            secondSmallest=ar[i];
        }
    }
    return secondSmallest;
}

console.log(optimalApproch([2,5,1,89,56,45,23,12]))
console.log(OptimalSecondSmallest([2,5,3,89,56,45,23,12]))