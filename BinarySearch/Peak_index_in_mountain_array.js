

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

console.log(Peak([1,3,5,7,8,9,6,2,-1,0]))

