function BinarySearch(ar,target){
    let start=0;
    let end=ar.length-1;
    let isAsc=ar[start]<ar[end] ? true :false;
    if(isAsc) {
        if(target>ar[end]) return -1;
    }
    else{
        if(target>ar[start]) return -1;
    }
    while(start<=end){
        let mid=parseInt(start+(end-start)/2);
        if(target==ar[mid]) return mid;
        if(isAsc){
            if(target>ar[mid]){
                start=mid+1;
            }
            else{
                end=mid-1;
            }
        }
        else{
            if(target>ar[mid]){
                end=mid-1;

            }
            else{
                start=mid+1;
            }
        }
    }
    return isAsc?ar[start]:ar[end];
}

// console.log(BinarySearch([2,4,6,8,12,24,68,79],72))

console.log(BinarySearch([79,68,28,18,12,6,3],25))