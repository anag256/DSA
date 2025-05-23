function reverseAr(ar,i,j){
    let temp;
    while(i<j){
        temp=ar[i];
        ar[i]=ar[j];
        ar[j]=temp;
        i++;
        j--;
    }
    return ar;
}


function rightRotateByKPlaces(ar, k) {
  let temp = [];
  k=k%ar.length;
  for (let i = ar.length-k; i < ar.length; i++) {
    temp.push(ar[i]);
  }
  for(let i=ar.length-1-k;i>=0;i--){
    ar[i+k]=ar[i];

  }
  for(let i=0;i<k;i++){
    ar[i]=temp[i]
  }
  return ar;
}

function rightRotateOptimal(ar,k){
    k=k%ar.length;
    ar=reverseAr(ar,0,ar.length-1);
    ar=reverseAr(ar,0,k-1);
    ar=reverseAr(ar,k,ar.length-1);
    return ar;
}
console.log(rightRotateByKPlaces([1,2,3,4,5,6,7],5))

console.log(rightRotateOptimal([1,2,3,4,5,6,7],5)); 