function smallestLetter(ar,target){
    let start=0;
    let end=ar.length-1;
    while(start<=end){
        let mid=parseInt(start+(end-start)/2);
        if(ar[mid]>target){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    return ar[start%(ar.length)]
}
console.log(smallestLetter(["x","x","y","y"],"z"));