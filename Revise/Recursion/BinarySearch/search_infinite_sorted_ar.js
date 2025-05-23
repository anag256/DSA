function BinarySearch(ar,target,start,end){
    while(start<=end){
        let mid=parseInt(start+(end-start)/2);
        if(target==ar[mid]) {
            return mid;
        }
        else if(target>ar[mid]){
            start=mid+1;

            }
            else{
                end=mid-1;
            }
    }
    return -1;
}

function search_in_infinite_sorted_ar(ar,target){
        let start=0;
        let end=1;
        while(target>ar[end]){
            temp=end+1;
            end=(end-start+1)*2+end;
            start=temp;
        }
        return BinarySearch(ar,target,start,end);
}

console.log(search_in_infinite_sorted_ar([2,4,6,8,12,24,68,79],79))