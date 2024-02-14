//-smallest element in arry >= target element
//letters wrap around
function ceiling(letters,target){
    let start=0;
    let end=letters.length-1
    let mid;

    while(start<=end){
      mid=Math.round(start+(end-start)/2);
      if(target<letters[mid]){
        end=mid-1;
      }
      else {
        start=mid+1
      }

    }
    return letters[start % letters.length];
}

console.log(ceiling(["x","x","y","y"],"z"));