// iterative
function reverseArrayIteration(ar){
    let i=0,j=ar.length-1;
    while(i!=j){
       temp=ar[i];
        ar[i]=ar[j];
        ar[j]=temp;
        i++;
        j--;
    }
    return ar;
}

//using two pointer
function recursiveRevers(ar,i,j){
    if(i==j) return ;
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;
    recursiveRevers(ar,i+1,j-1);
    return ar;
}

function callRecursiveReverse(ar){
    return recursiveRevers(ar,0,ar.length-1)
}

// console.log(callRecursiveReverse([4,2,5,8,1]))


//using single pointer

function recursiveReverseUsingSinglePointer(ar,i){
    if(i>ar.length/2) return ar;
    temp=ar[i];
    ar[i]=ar[ar.length-i-1];
    ar[ar.length-i-1]=temp;
    return  recursiveReverseUsingSinglePointer(ar,i+1);

}
console.log(recursiveReverseUsingSinglePointer([4,2,5,8,1],0))