//roattation count will always be pivot+1
//pivot is largest element in rotated sorted array either side of which willl be an scending array
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

function rotationCount(ar){
    let pivot=findPivot(ar);
    if(pivot==-1){
        return 0;// its not rotated
    }
   return pivot+1;

}

console.log(rotationCount([4,5,6,7,0,1,2]));