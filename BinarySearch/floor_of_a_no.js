//gretaest no that is smaller or equal to target no.

//-smallest element in arry >= target element

function floor(ar,target){
    let start=0;
    let end=ar.length-1
    let mid;
    // if target< first index
    // if(target<ar[start]){
    //     return -1;
    // }
    while(start<=end){
      mid=Math.floor(start+(end-start)/2);
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
    return end;
}

console.log(floor([-19,-12,-5,2,3,4,16,89,90,100],1));