function findPivot(nums){
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else if (nums[mid] < nums[right]) {
                right = mid;
            } else { // nums[mid] === nums[right]
                // Handle case where nums[mid] === nums[right]
                // Decrement right to ensure we are moving towards the correct pivot
                if (nums[left] === nums[mid]) {
                    left++; // move left pointer to skip duplicates
                } else {
                    right = mid; // move right pointer towards potential pivot
                }
            }
        }

        return left;
}

// function BinarySearch(ar,start,end,target){
//     while(start<=end){
//         mid=parseInt(start+(end-start)/2);
//         if(ar[mid]===target){
//             return mid;
//         }
//         else if(ar[mid]>target){
//             end=mid-1;
//         }
//         else{
//             start=mid+1;
//         }
//     }
//     return -1;
// }


function callBS(ar,target){
    let start=0;
    let end=ar.length-1;
    let pivot=findPivot(ar);
//    let result= BinarySearch(ar,start,pivot,target);
//     if(result===-1)  result=BinarySearch(ar,pivot+1,end,target);
// return result;
return pivot;
}
console.log(callBS([1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1],3
))