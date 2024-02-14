//log(n)-> n-size

function binarySearch(ar,target){
    let start=0;
    let end=ar.length-1
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

console.log(binarySearch([-19,-12,-5,2,3,4,16,89,90,100],-12))


function orderAgnosticBS(ar,target){

    let start=0;
    let end=ar.length-1
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
console.log(orderAgnosticBS([100,87,67,45,10,-6],-6))