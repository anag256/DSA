function reverseAr(ar){
    let i=0,j=ar.length-1;
    while(i<j){
        temp=ar[i];
        ar[i]=ar[j];
        ar[j]=temp;
        i++;
        j--;
    }
    return ar;
}
//two pointers
function recursiveReverse(ar,i,j){
    if(i>=j){
        return ar;
    }
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;
    return recursiveReverse(ar,i+1,j-1)
}

function recursiveReversUsingSinglePointer(ar,i){
    if(i>=parseInt(ar.length/2)){
        return ar;
    }
    temp=ar[i];
    ar[i]=ar[ar.length-i-1];
    ar[ar.length-i-1]=temp;
    return recursiveReversUsingSinglePointer(ar,i+1);
}
console.log(recursiveReversUsingSinglePointer([2,4,7,1,36,87],0))