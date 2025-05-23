//brute
//tc -o(n^2)

function longestSubArrayOfSumK(ar, K) {
  let sum = 0,
    len = 0;
  for (let i = 0; i < ar.length; i++) {
    sum = 0;
    for (let j = i; j < ar.length; j++) {
      sum += ar[j];
      if (sum === K) {
        len = Math.max(len, j - i + 1);
        break;
      }
    }
  }
  return len;
}

//better - optimal fr array having 0's,positives & negatives -prefix sum method
//tc-o(n)

function longestSubArrayOfSumKBetter(ar, k) {
  let sum = 0,
    len = 0,
    hashObj = {},
    rem;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
    if (sum === k) len = Math.max(len, i + 1);
    rem = sum - k;
    if (hashObj[rem] || hashObj[rem] === 0) {
      len = Math.max(len, i - hashObj[rem]);
    }
    if (hashObj[sum] !== 0 && !hashObj[sum]) hashObj[sum] = i;
    // hashObj[sum]=i;
  }
  return len;
}

//optimal - only for positives & zeroes
//tc-o(2n)
function longestSubArrayOfSumKOptimal(ar, k) {
  let left = 0,
    right = 0,
    sum = ar[0],
    len = 0;
  while (right < ar.length) {
    while (left <= right && sum > k) {
      sum -= ar[left];
      ++left;
    }
    if (sum === k) len = Math.max(len, right - left + 1);
    ++right;
    if (right < ar.length) sum += ar[right];
  }
  return len;
}

console.log(longestSubArrayOfSumK([1, 2, 3, 1, 1, 1, 1, 4, 3, 2], 3));
console.log(longestSubArrayOfSumKBetter([1, 2, 3, 1, 1, 1, 1, 4, 3, 2], 3));
console.log(longestSubArrayOfSumKBetter([-1, 2, 0, 0, 0, 0, 3], 3));
console.log(longestSubArrayOfSumKOptimal([1, 2, 3, 1, 1, 1, 1, 4, 3, 2], 3));
