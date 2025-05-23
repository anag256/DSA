function findPivot(ar){
    let start=0;
    let end=ar.length-1;
    while(start<=end){
        mid=parseInt(start+(end-start)/2);
        if(ar[mid]>ar[mid+1]){
            return mid;
        }
        else if(ar[mid-1]>ar[mid]){
            return mid-1;
        }
        else if(ar[start]>ar[mid]){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    return -1;
}

function BinarySearch(ar,start,end,target){
    while(start<=end){
        mid=parseInt(start+(end-start)/2);
        if(ar[mid]===target){
            return mid;
        }
        else if(ar[mid]>target){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    return -1;
}


function callBS(ar,target){
    let start=0;
    let end=ar.length-1;
    let pivot=findPivot(ar);
   let result= BinarySearch(ar,start,pivot,target);
    if(result===-1)  result=BinarySearch(ar,pivot+1,end,target);
return result;
}
console.log(callBS([1,2,3,4,5,6],3
))