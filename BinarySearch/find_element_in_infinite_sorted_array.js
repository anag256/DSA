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



//start with the box of size of 2 and increase the chunk sie exponentially
function search(ar,target){
    let start=0;
    let end=1;
   while(target>ar[end]){
    temp=end+1;
    //previous end + sizeofbox*2
    end=end+(end-start+1)*2;
    start=temp;
   }
   return binarySearch(ar,target,start,end)
}

console.log(search([3,5,6,8,9,12,15,20,25,30,50,60,90],5))
