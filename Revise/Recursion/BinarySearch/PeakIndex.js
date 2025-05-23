function PeakIndex(ar){
    let start=0;
    let end=ar.length-1;
    let mid=-1;
    while(start<end){
        mid=parseInt(start+(end-start)/2);
        if(ar[mid]>ar[mid+1]){
            end=mid;
        }
        else{
            start=mid+1;
        }
    }
return start;
}
console.log(PeakIndex([2,4,6,8,12,10,7,5,3,1]))