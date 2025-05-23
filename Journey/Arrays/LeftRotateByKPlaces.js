function LeftRotateByOnePlace(ar){
    let temp=ar[0];
    for(let i=1;i<ar.length;i++){
        ar[i-1]=ar[i];
    }
    ar[ar.length-1]=temp;
    return ar;
}

function reverseAr(ar){
    let i=0,j=ar.length-1,temp;
    while(i<j){
        temp=ar[i];
        ar[i]=ar[j];
        ar[j]=temp;
        i++;
        j--;
    }
    return ar;
}
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

//brute
//tc o(n+k)
//sc o(k)
function LeftRotateByKPlaces(ar,k){
    k=k%ar.length;
    let temp=[]; //extra space - o(k)
   for(let i=0;i<k;i++){
    temp.push(ar[i]);  //o(k)
   }
    for(let i=k;i<ar.length;i++){
        ar[i-k]=ar[i]; //o(n-k)
    }
    // for(let i=ar.length-k,j=0;i<ar.length;i++,j++){
    //     ar[i]=temp[j]
    // }
    for(let i=ar.length-k;i<ar.length;i++){
        ar[i]=temp[i-(ar.length-k)] //o(k)
    }
    return ar;
}

//optimal
//reverse(a,a+d)
//reverse(a+d,a+n)
//reverse(a,a+n)
//tc o(2n)
//sc o(1)

function LeftRotateOptimal(ar,k){
    ar=reverseAr(ar,0,k-1);
    ar=reverseAr(ar,k,ar.length-1);
    ar=reverseAr(ar,0,ar.length-1);
    return ar;
}
console.log(LeftRotateByOnePlace([1,2,3,4,5,6,7]));
console.log(reverseAr([1,2,3,4,5,6,7]));
console.log(LeftRotateByKPlaces([1,2,3,4,5,6,7],3));

console.log(LeftRotateOptimal([1,2,3,4,5,6,7],3));