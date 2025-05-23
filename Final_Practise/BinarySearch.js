function BinarySearch(ar, target) {
  let start = 0,
    end = ar.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (ar[mid] === target) {
      return mid;
    } else if (ar[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function BS(ar, target,start,end) {

    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      if (ar[mid] === target) {
        return mid;
      } else if (ar[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }


function BinarySearchOcc(ar, target, findFirstOcc = true) {
  let start = 0,
    end = ar.length - 1,
    ans = -1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (ar[mid] === target) {
      ans = mid;
      if (findFirstOcc) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (target < ar[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
}

function OrderAgnosticBS(ar, target) {
  let start = 0,
    end = ar.length - 1;
  let isAsc = ar[start] < ar[end];
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (ar[mid] === target) {
      return mid;
    }
    if (isAsc) {
      if (ar[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (ar[mid] > target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

function ceilingFloor(ar, target) {
  let start = 0,
    end = ar.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (ar[mid] === target) {
      return mid;
    } else if (ar[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return [ar[end], ar[start]];
}

function firstAndLast(ar, target) {
  let firstAndLast = [-1, -1];
  firstAndLast[0] = BinarySearchOcc(ar, target, true);
  firstAndLast[1] = BinarySearchOcc(ar, target, false);
  return firstAndLast;
}


function peakIndexInMountainArr(ar){
    let start=0,end=ar.length-1,peak=-1;
    while(start<end){
        let mid=parseInt((start+end)/2)
        if(ar[mid]>ar[mid+1]){
            peak=mid;
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    return peak
}

function searchInRotatedSortedAr(ar,target){
    let start=0,end=ar.length-1;

    while(start<=end){
        let mid=parseInt((start+end)/2);
        if(ar[mid]===target) return mid;
        if(ar[start]<=ar[mid]){
            //target is in left side
            if(target<ar[mid] && target>ar[start]){
                end=mid-1;
            }
            else{
                start=mid+1;
            }

            //target is in right side
        }
        else{
             //target is in left side
             if(target>ar[mid] && target<ar[start]){
                start=mid+1;
            }
            else{
                end=mid-1;
            }

            //target is in right side
        }
    }
    return -1;
}

function searchRotatedSortedArrayWithDuplicates(ar,target){
    let start=0,end=ar.length-1;

    while(start<=end){
        let mid=parseInt((start+end)/2);

        if(ar[start]===ar[mid] && ar[mid]===ar[end]){
            start++;
            end--;
            continue;
        }
        if(ar[mid]===target) return mid;
        if(ar[start]<=ar[mid]){
            //target is in left side
            if(target<ar[mid] && target>ar[start]){
                end=mid-1;
            }
            else{
                start=mid+1;
            }

            //target is in right side
        }
        else{
             //target is in left side
             if(target>ar[mid] && target<ar[start]){
                start=mid+1;
            }
            else{
                end=mid-1;
            }

            //target is in right side
        }
    }
    return -1;
}

function minInSortedArray(ar){
    let start=0,end=ar.length-1,min=Number.MAX_SAFE_INTEGER;

    while(start<=end){
        let mid=parseInt((start+end)/2);

        if(ar[start]<=ar[mid]){
            //left section is sorted
            min=Math.min(min,ar[start]);
            start=mid+1;
        }
        else {
            //right section is sorted
            min=Math.min(min,ar[mid]);
            end=mid-1;
        }
    }
    return min;
}


function searchInInfiniteSortedArray(ar,target){
    let start=0,end=1,temp;
    while(target>ar[end]){
        temp=start;
        start=end+1;
        end= 2*(end-temp) + start;
    }
   return BS(ar,target,start,end)
}
console.log(BinarySearch([-12, -5, 2, 6, 8, 10, 12, 14], -5));

console.log(OrderAgnosticBS([14, 12, 10, 8, 6, 2, -5, -12], -5));

console.log(ceilingFloor([-12, -5, 2, 6, 8, 10, 12, 14], 7));

console.log(firstAndLast([5, 7, 7, 8, 8, 10], 7));

console.log(peakIndexInMountainArr([2,4,6,8,12,10,7,5,3,1]))


console.log(searchInRotatedSortedAr([6,8,10,12,2,4],8));

console.log(searchRotatedSortedArrayWithDuplicates([4,4,5,7,4,4,4,4,4,4],5))

console.log("min",minInSortedArray([7,8,-5,1,2,3,4,5]))

console.log(searchInInfiniteSortedArray([-12, -5, 2, 6, 8, 10, 12, 14], -5));

