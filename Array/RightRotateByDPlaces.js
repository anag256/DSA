function RightRotateByDPlaces(ar,d){
    let temp=[];
     d=d%ar.length;
     let n=ar.length;
    if(d==0) return ar;
    for(let i=0;i<n-d;i++){
        temp.push(ar[i])

    }
    //shifting
    for(let i=n-d;i<n;i++){

            ar[i-(n-d)]=ar[i]

    }
    for(let i=d;i<n;i++){
        ar[i]=temp[i-d]
    }
    return ar;
}
//Right rotation of d places = left rotation of n-d places

console.log(RightRotateByDPlaces([2,5,1,89,56,45,23,12],3))


function optimal(ar,d){
    let n=ar.length;
    ar=reverse(ar,0,n-d-1);
    ar=reverse(ar,n-d,ar.length-1);
    return reverse(ar,0,ar.length-1);
}

function reverse(ar,start,end){
    let i=start,j=end;
   while(i<=j){
   ar= swap(ar,i,j);
   i++;
   j--;
   }
   return ar;
}

function swap(ar,i,j){
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;
    return ar;
}
console.log('optimal',optimal([2,5,1,89,56,45,23,12],3))
