


function BinarySearch(ar,target,findStartIndex){
    let start=0;
    let end=ar.length-1
    let ans=-1;
    while(start<=end){
      let mid=Math.floor(start+(end-start)/2);
      if(target<ar[mid]){
        end=mid-1;
      }
      else if(target>ar[mid]){
        start=mid+1
      }
      else {
        ans=mid;
        if(findStartIndex){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
      }
    }
    return ans;
}

function firstAndLastOccurence(ar,target){
    let ans=[-1,-1];
    ans[0]=BinarySearch(ar,target,true)
    ans[1]=BinarySearch(ar,target,false)
    return ans;
}

console.log(firstAndLastOccurence([5,7,7,8,8,10],7))