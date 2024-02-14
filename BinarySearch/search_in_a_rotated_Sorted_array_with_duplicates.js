//pivot is largest element in rotated sorted array either side of which willl be an scending array
function findPivot(ar){
    let start=0;
    let end=ar.length-1
    while(start<=end){
      let mid=Math.floor(start+(end-start)/2);
     if(ar[start]===ar[mid] && ar[mid]===ar[end]){
        //check if start is pivot
        if(ar[start]>ar[start+1]){
            return start;
        }

        start++;
        if(ar[end]<ar[end-1])
        {
            return end-1;
        }
        end--;
     }
     //left hand side is sorted,pivot is in right
     if(ar[start]<ar[mid] || ar[start]==ar[mid] && ar[mid]>ar[end]){
        start=mid+1;
     }
     else{
        end=mid-1;
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

console.log(searchRotatedSortedArray([4,7,9,2,3,4,4],9));