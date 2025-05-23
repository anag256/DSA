var maximumCount = function (nums) {
  let start = 0,
    end = nums.length - 1,
    negCount = 0,
    posCount = 0;

  posCount = BS(nums, start, end, true);
  negCount = BS(nums, start, end, false);

  return Math.max(posCount, negCount);
};

function BS(nums, start, end, findPos) {
  let count = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (findPos) {
      if (nums[mid] <= 0) {
        start = mid + 1;
      }
      else {
        count = nums.length - mid;
        end = mid - 1;
      }
    } else {
      if (nums[mid] < 0) {
        count = mid + 1;
        start = mid + 1;
      }
      else{
        end = mid - 1;
      }
    }


  }
  return count;
}
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
