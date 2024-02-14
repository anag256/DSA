//brute force approach
//tc o(d) + o(n-d) +o(d)=o(n+d)
//sc o(d) ->temp
function LeftRotateByDPlaces(ar,d){
    let temp=[];
     d=d%ar.length;
    if(d==0) return ar;
    for(let i=0;i<d;i++){
        temp.push(ar[i])

    }
    //shifting
    for(let i=d;i<ar.length;i++){
        ar[i-d]=ar[i];
    }
    for(let i=ar.length-d;i<ar.length;i++){
        ar[i]=temp[i-(ar.length-d)]
    }
    return ar;
}
// console.log(LeftRotateByDPlaces([2,5,1,89,56,45,23,12],9))
//optimal approach sc-o(1)

function optimal(ar,d){
    ar=reverse(ar,0,d-1);
    console.log('ar',ar)
    ar=reverse(ar,d,ar.length-1);
    console.log('ar2',ar)
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
console.log(optimal([2,5,1,89,56,45,23,12],4))
