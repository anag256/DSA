function LongestSubstringWithoutRepeatingChars(str) {
  let left = 0,
    right = 0,
    len = 0,
    maxLength = 0,
    hashObj = {},
    start = 0,
    end = 0;

  while (right < str.length) {
    if (
      (hashObj[str[right]] || hashObj[str[right]] === 0) &&
      hashObj[str[right]] >= left
    ) {
      left = hashObj[str[right]] + 1;
      //    hashObj[str[right]]=right;
    }

    hashObj[str[right]] = right;
    len = right - left + 1;
    if (len > maxLength) {
      maxLength = len;
      start = left;
      end = right;
    }

    right++;
  }

  return [maxLength, start, end];
}

function findMax(ar) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
      max = ar[i];
    }
  }
  return max;
}

function LongestRepeatingCharacterReplacement(str, k) {
  let left = 0,
    right = 0,
    longest = 0,
    hashObj = {},
    maxFreq = 0,
    len = 0,
    isRightIncremented = true;
  while (right < str.length) {
    if (isRightIncremented) {
      if (hashObj[str[right]]) {
        hashObj[str[right]]++;
      } else {
        hashObj[str[right]] = 1;
      }
    }

    maxFreq = Math.max(maxFreq, hashObj[str[right]]);
    len = right - left + 1;
    if (len - maxFreq <= k) {
      longest = Math.max(longest, len);
      right++;
      isRightIncremented = true;
    } else {
      hashObj[str[left]]--;
      left++;
      maxFreq = Math.max(...Object.values(hashObj));
      isRightIncremented = false;
    }
  }
  return longest;
}

function addDigits(num) {
  let isSingleDigitResult = false,
    rem = 0,
    sum = 0;

  while (!isSingleDigitResult) {
    rem = num % 10;
    sum += rem;
    num = parseInt(num / 10);
    if (num === 0) {
      if (sum > 9) {
        num = sum;
        sum = 0;
      } else {
        isSingleDigitResult = true;
      }
    }
  }
  return sum;
}

function putInHash(str) {
  let hashObj = {};
  for (let i = 0; i < str.length; i++) {
    if (!hashObj[str[i]]) {
      hashObj[str[i]] = 1;
    } else {
      hashObj[str[i]]++;
    }
  }
  return hashObj;
}
function Anagrams(str1, str2) {
  let left = 0,
    right = 0,
    res = [],
    hashObj = {},
    flag = true;
  let hashObjCheck = putInHash(str2);
  let k = Object.keys(hashObjCheck).length;
  while (right < str1.length) {
    if (hashObj[str1[right]]) {
      hashObj[str1[right]]++;
    } else {
      hashObj[str1[right]] = 1;
    }

    if (right >= k - 1) {
      //compare hashes
      flag = true;
      for (let key in hashObjCheck) {
        if (!(hashObj[key] && hashObj[key] === hashObjCheck[key])) {
          flag = false;
        }
      }
      if (flag) res.push(left);
    }
    right++;
    if (right >= k) {
      hashObj[str1[left]]--;
      if (hashObj[str1[left]] <= 0) delete hashObj[str1[left]];
      left++;
    }
  }
  return res;
}

function ContainerWithMaxWater(ar) {
  let left = 0,
    right = ar.length - 1,
    maxArea = 0,
    area = 0;
  while (left < right) {
    area = Math.min(ar[left], ar[right]) * (right - left);
    if (area > maxArea) {
      maxArea = area;
    }
    if (ar[left] >= ar[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
}
function countPalindromes(str, left, right) {
  let count = 0;
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    count++;
    left--;
    right++;
  }

  return count;
}

function CountPalidromicSubstrings(str) {
  let evencount = 0,
    oddCount = 0;
  for (let i = 0; i < str.length; i++) {
    //even
    evencount += countPalindromes(str, i, i + 1);
    //odd
    oddCount += countPalindromes(str, i, i);
  }

  return oddCount + evencount;
}

function LongestPalindromicSubstring(str) {
  function findLongestPali(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > longest.length) {
        longest = str.substring(left, right + 1);
      }
      left--;
      right++;
    }
  }
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    findLongestPali(str, i, i);
    findLongestPali(str, i, i + 1);
  }

  return { longest, len: longest.length };
}

function plusOne(ar) {
  let i = ar.length - 1,
    carry = 1,
    sum = 0;

  while (i >= 0 && carry > 0) {
    sum = ar[i] + carry;
    if (sum > 9) {
      ar[i] = sum % 10;
      carry = parseInt(sum / 10);
    } else {
      ar[i] = sum;
      carry = 0;
    }

    if (carry > 0 && i === 0) {
      ar.unshift(carry);
      carry = 0;
    }
    i--;
  }
  return ar;
}

function MaxProductSubarray(ar) {
  let prefix = 1,
    suffix = 1,
    maxProduct = 1;

  for (let i = 0; i < ar.length; i++) {
    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;
    prefix = prefix * ar[i];
    suffix = suffix * ar[ar.length - 1 - i];
    maxProduct = Math.max(maxProduct, Math.max(prefix, suffix));
  }

  return maxProduct;
}

function ProductOfArrayExceptSelf(ar) {
  let left = [],
    right = [];
  (left[0] = 1), (right[ar.length - 1] = 1);
  for (let i = 1; i < ar.length; i++) {
    left[i] = left[i - 1] * ar[i - 1];
  }
  for (let i = ar.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * ar[i + 1];
  }

  for (let i = 0; i < ar.length; i++) {
    ar[i] = left[i] * right[i];
  }
  return ar;
}

function SpiralTraversal(ar) {
  let m = ar.length,
    n = ar[0].length,
    left = 0,
    right = n - 1,
    top = 0,
    bottom = m - 1,
    res = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(ar[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res.push(ar[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(ar[bottom][i]);
      }
    }
    bottom--;
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(ar[i][left]);
      }
    }
    left++;
  }
  return res;
}

function MergeSorted(nums1,m,nums2,n){
  let i=m-1,j=n-1,finlIndex=nums1.length-1;

  while(i>=0  && j>=0){
    if(nums1[i] >=nums2[j]){
      nums1[finlIndex]=nums1[i];
      i--;
      finlIndex--;
    }
    else{
      nums1[finlIndex]=nums2[j];
      j--;
      finlIndex--;
    }
  }

  while(i>=0){
    nums1[finlIndex]=nums1[i];
    i--;
    finlIndex--;
  }

  while(j>=0){
    nums1[finlIndex]=nums2[j];
    j--;
    finlIndex--;
  }
  return nums1
}

function TrappingRainWater(ar){
    let leftMax=[],rightMax=[],area=0;
    leftMax[0]=ar[0],rightMax[ar.length-1]=ar[ar.length-1];
    for(let i=1;i<ar.length;i++){
      leftMax[i]=Math.max(leftMax[i-1],ar[i]);
    }

    for(let i=ar.length-2;i>=0;i--){
      rightMax[i]=Math.max(rightMax[i+1],ar[i]);
    }

    for(let i=0;i<ar.length;i++){
      area=area+(Math.min(leftMax[i],rightMax[i])-ar[i])
    }
return area;

}

function backTrack(ar,resultSet,tempSet,start){
  resultSet.push([...tempSet]);
  console.log("temp",tempSet,"--------",resultSet)
  for(let i=start;i<ar.length;i++){
    //case for including a number

    tempSet.push(ar[i]);
    backTrack(ar,resultSet,tempSet,i+1);
    //case for not incluing a number
    tempSet.pop();
  }
  return resultSet;
}
function Subsets(ar){
  let resultSet=[],tempSet=[];

  resultSet=backTrack(ar,resultSet,tempSet,0);
  return resultSet;
}

function threeSum(ar){
  let set=new Set(),res=[];
  for(let i=0;i<ar.length;i++){
    for(let j=i+1;j<ar.length;j++){
      for(let k=j+1;k<ar.length;k++){
        if((ar[i] +ar[j] +ar[k])===0)
        set.add(JSON.stringify([ar[i],ar[j],ar[k]].sort((a,b)=>a-b)));
      }
    }
  }
for(let ele of set){
  res.push(JSON.parse(ele));
}
return res;
}

function threeSumBetter(ar){
  let hashObj={},set=new Set(),res=[];
//ar[i]+ar[j]+ar[k]=0
//third=-(ar[i]+ar[j])
  for(let i=0;i<ar.length;i++){
    hashObj={};
    for(let j=i+1;j<ar.length;j++){
      let third=-(ar[i]+ar[j]);
      if(hashObj[third] ||  hashObj[third]===0){

        set.add(JSON.stringify([ar[i],ar[j],third].sort((a,b)=>a-b)));
      }
    hashObj[ar[j]]=j;
    }
  }
  for(let ele of set){
    res.push(JSON.parse(ele));
  }
  return res;
}

function MinimunWindowSubstring(s,t){
  let hashObj={},left=0,right=0,count=0,minLength=Number.MAX_SAFE_INTEGER,len,startIndex=-1;
  hashObj=putInHash(t);

  while(right<s.length){
      if(hashObj[s[right]]>0){

        count++;
        hashObj[s[right]]--;

      }
      else if(hashObj[s[right]]<=0){
        hashObj[s[right]]--;
      }
      else{
        hashObj[s[right]]=-1;
      }

      while(count===t.length){
        len=right-left+1;

        if(len<minLength){
          minLength=len;
          startIndex=left;
        }
        hashObj[s[left]]++;
        if(hashObj[s[left]]>0){
          count--;
        }
        left++;
      }

      right++;
  }
  return s.substr(startIndex,minLength)


}


function threeSumOptimal(ar){
  ar.sort((a,b)=>a-b);
const res=[]
  for(let i=0;i<ar.length;i++){

    if(i>0 && ar[i]===ar[i-1]) continue;
    let j=i+1;
    let k=ar.length-1;

    while(j<k){
      let sum=ar[i]+ar[j]+ar[k];
      if(sum>0){
        k--;

      }
      else if(sum<0){
        j++;

      }
      else{
        res.push([ar[i],ar[j],ar[k]]);
        j++;
        k--;
        while(k>=0 && ar[k]===ar[k+1]){
          k--;
        }
        while(j<ar.length && ar[j]===ar[j-1]){
          j++;
        }
      }
    }
  }
  return res;
}
console.log(LongestSubstringWithoutRepeatingChars("cdabzabcd"));

console.log(LongestRepeatingCharacterReplacement("AAABBCCD", 2));

console.log(addDigits(38));

console.log(Anagrams("cbaebabacd", "abc"));

console.log(ContainerWithMaxWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

console.log("Count:", CountPalidromicSubstrings("aaababbd"));
console.log("Longest:", LongestPalindromicSubstring("babad"));

console.log(plusOne([9]));

console.log(MaxProductSubarray([2, 3, -2, 4]));

console.log(ProductOfArrayExceptSelf([1, 2, 3, 4]));

// console.log(Subsets([1, 2, 3]));

console.log(
  SpiralTraversal([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);


console.log(MergeSorted([1,2,3,0,0,0],3,[2,5,6],3))


console.log(TrappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));


console.log(Subsets([1,2,3]))



console.log(threeSum([-1,0,1,2,-1,-4]))

console.log(threeSumBetter([-1,0,1,2,-1,-4]))



console.log(MinimunWindowSubstring("ddaaabbca","abc"))

console.log(threeSumOptimal([-1,0,1,2,-1,-4]))

// -4,-1,-1,0,1,2