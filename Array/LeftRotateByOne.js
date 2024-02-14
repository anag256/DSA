function LeftRotateByOne(ar){
    let temp=ar[0];
    for(let i=1;i<ar.length;i++){
        ar[i-1]=ar[i];
    }
    ar[ar.length-1]=temp;
    return ar;
}
console.log(LeftRotateByOne([2,5,1,89,56,45,23,12]))