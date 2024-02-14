//pivot is largest element in rotated sorted array either side of which willl be an ascending array
function findPivot(ar){
    let start=0;
    let end=ar.length-1
    while(start<=end){
      let mid=Math.floor(start+(end-start)/2);
      if(ar[mid]>ar[mid+1]){
        return mid;
      }
      if(ar[mid-1]>ar[mid]){
        return mid-1;
      }
      if(ar[start]>ar[mid]){
        end=mid-1;
      }
      else{
        start=mid+1;
      }
    }
    return -1;
}

function binarySearch(ar,target,start,end){
    while(start<=end){
      let mid=Math.floor(start+(end-start)/2);
      if(target<ar[mid]){
        end=mid-1;
      }
      else if(target>ar[mid]){
        start=mid+1
      }
      else {
        return mid
      }
    }
    return -1;
}

function searchRotatedSortedArray(ar,target){
    let pivot=findPivot(ar);
    let result=binarySearch(ar,target,0,pivot)
    if(result==-1){
        result=binarySearch(ar,target,pivot+1,ar.length-1)
    }
    return result;
}

console.log(searchRotatedSortedArray([4,5,6,7,0,1,2],7));