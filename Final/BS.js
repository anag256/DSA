function LinearSearch(ar, target) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === target) {
      return i;
    }
  }
  return -1;
}

function BinarySearch(ar, target) {
  let low = 0,
    high = ar.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (target === ar[mid]) {
      return mid;
    } else if (target > ar[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
function OrderAgnosticBinarySearchWithParams(ar, target,start,end) {
    let low = start,
      high = end,
      isAsc = ar[high] > ar[low] ? true : false;
    while (low <= high) {
      let mid = parseInt((low + high) / 2);

      if (target === ar[mid]) {
        return mid;
      } else {
        if (isAsc) {
          if (target > ar[mid]) {
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        } else {
          if (target > ar[mid]) {
            high = mid - 1;
          } else {
            low = mid + 1;
          }
        }
      }
    }
    return -1;
  }

function OrderAgnosticBinarySearch(ar, target) {
  let low = 0,
    high = ar.length - 1,
    isAsc = ar[high] > ar[low] ? true : false;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (target === ar[mid]) {
      return mid;
    } else {
      if (isAsc) {
        if (target > ar[mid]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      } else {
        if (target > ar[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
    }
  }
  return -1;
}

function floor(ar, target) {
  let low = 0,
    high = ar.length - 1,
    isAsc = ar[high] > ar[low] ? true : false;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (target === ar[mid]) {
      return mid;
    } else {
      if (isAsc) {
        if (target > ar[mid]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      } else {
        if (target > ar[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
    }
  }
  return high;
}

function ceiling(ar, target) {
  let low = 0,
    high = ar.length - 1,
    isAsc = ar[high] > ar[low] ? true : false;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (target === ar[mid]) {
      return mid;
    } else {
      if (isAsc) {
        if (target > ar[mid]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      } else {
        if (target > ar[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
    }
  }
  return low;
}

function peakIndexInMountainArray(ar) {
  let low = 0,
    high = ar.length - 1;
  while (low < high) {
    let mid = parseInt((low + high) / 2);
    if (ar[mid] < ar[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

function searchInInfiniteSortedArray(ar, target) {
  let start = 0,
    end = 1,
    oldStart;
  while (target > ar[end]) {
    oldStart = start;
    start = end + 1;
    end = start + 2 * (end - oldStart);
  }
  return OrderAgnosticBinarySearch(ar, target);
}

function findFirstAndLastOccurenceBS(ar, target) {
  let ans = [-1,-1];
  function BS(ar, target, findFirstIndex) {
    let low = 0,
      high = ar.length - 1,ans=-1;
    while (low <= high) {
      let mid = parseInt((low + high) / 2);

      if (target === ar[mid]) {
        ans=mid;
        if(findFirstIndex){

            high=mid-1;
        }
        else{
            low=mid+1;
        }
      } else if (target > ar[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return ans;
  }

  ans[0] = BS(ar, target, true);
  ans[1] = BS(ar, target, false);
  return ans;
}


function findPivot(ar){
    let start = 0,
      end = ar.length - 1;
    while (start < end) {
      let mid = parseInt((start + end) / 2);

      if(ar[mid]>ar[mid+1]){
        return mid;
      }
      else if(ar[mid-1]>ar[mid]){
        return mid-1;
      }
      else if(ar[start]>ar[mid] && ar[start>ar[end]]){
        end=mid-1;
      }
      else{
        start=mid+1;
      }
    }
    return -1;
}
function searchRotatedSortedArray(ar, target) {
    let ans,pivot;
    pivot=findPivot(ar);
    console.log("pivot",pivot);
    ans=OrderAgnosticBinarySearchWithParams(ar,target,0,pivot);
    if(ans===-1){
        ans=OrderAgnosticBinarySearchWithParams(ar,target,pivot+1,ar.length-1);
    }
    return ans;
  }

// console.log(OrderAgnosticBinarySearch([-5,20,56,89,90,99,101],89));
console.log(floor([-5, 20, 56, 89, 90, 99, 101], 95));
console.log(ceiling([-5, 20, 56, 89, 90, 99, 101], 95));
console.log(peakIndexInMountainArray([1, 3, 5, 7, 8, 9, 10, 6, 2, -1, 0]));
console.log(searchInInfiniteSortedArray([2, 4, 6, 8, 12, 20, 22], 8));
console.log("indexes",findFirstAndLastOccurenceBS([4, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8], 7));

console.log(searchRotatedSortedArray([8,10,12,14,2,5,6,8],14))
// console.log(OrderAgnosticBinarySearch([-5,20,56,89,90,99,101].reverse(),-5));
