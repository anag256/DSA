function Peak(ar){
    let start=0;
    let end=ar.length-1
    while(start<end){
      let mid=Math.floor(start+(end-start)/2);
      if(ar[mid]>ar[mid+1]){
        end=mid;
      }
      else {
        start=mid+1;
      }

    }
    return start;
}


function orderAgnosticBS(ar,target,start,end){
  let isAsc=ar[start]<ar[end]?true:false;
  while(start<=end){
    let mid=Math.floor(start+(end-start)/2);
    if(target===ar[mid]){
      return mid
    }
    if(isAsc){
      if(target>ar[mid]){
          start=mid+1
        }
        else {
          end=mid-1;
        }
    }
    else{
      if(target>ar[mid]){
          end=mid-1;
        }
        else {
          start=mid+1
        }
    }

  }
  return -1;

}

function find(ar,target){
    let peakIndex=Peak(ar,target);
    let result=orderAgnosticBS(ar,target,0,peakIndex);

    if(result==-1){
        result=orderAgnosticBS(ar,target,peakIndex,ar.length-1);
    }
return result;
}

console.log(find([1,2,3,4,5,3,1],3))