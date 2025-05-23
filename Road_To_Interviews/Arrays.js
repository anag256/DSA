//checkifsorted

function swap(ar, i, j) {
  let temp;
  temp = ar[i];
  ar[i] = ar[j];
  ar[j] = temp;
}

function checkifsorted(ar) {
  for (let i = 0; i < ar.length - 1; i++) {
    if (ar[i] > ar[i + 1]) return false;
  }
  return true;
}

function denomination(amount) {
  let denom = [2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  let hashObj = {};

  for (let i = 0; i < denom.length; i++) {
    hashObj[denom[i]] = parseInt(amount / denom[i]);
    amount = amount % denom[i];
  }
  return hashObj;
}

function dailyTemperatures(ar) {
  let stack = [],
    res = Array.from({ length: ar.length }).fill(0);
  for (let i = 0; i < ar.length; i++) {
    while (ar[i] > ar[stack[stack.length - 1]]) {
      let index = stack.pop();
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
}

function secondLargest(ar) {
  let largest = Number.MIN_SAFE_INTEGER,
    secondLargest;

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > largest) {
      secondLargest = largest;
      largest = ar[i];
    }
    if (ar[i] > secondLargest && ar[i] < largest) {
      secondLargest = ar[i];
    }
  }
  return { largest, secondLargest };
}

function reverseAr(ar, i, j) {
  while (i < j) {
    temp = ar[i];
    ar[i] = ar[j];
    ar[j] = temp;
    i++;
    j--;
  }
  return ar;
}

function LeftRotateByDPlaces(ar, d) {
  let n = ar.length,
    temp = [];
  d = d % n;

  for (let i = 0; i < d; i++) {
    temp.push(ar[i]);
  }
  for (let i = d; i < n; i++) {
    ar[i - d] = ar[i];
  }
  for (let i = n - d; i < n; i++) {
    ar[i] = temp[i - (n - d)];
  }
  return ar;
}

function LeftRotateByDPlacesOptimal(ar, d) {
  d = d % ar.length;
  reverseAr(ar, 0, d - 1);
  reverseAr(ar, d, ar.length - 1);
  reverseAr(ar, 0, ar.length - 1);
  return ar;
}

function RightRotateByDPlaces(ar, d) {
  let n = ar.length,
    temp = [];
  d = d % n;

  for (let i = ar.length - d; i < ar.length; i++) {
    temp.push(ar[i]);
  }
  for (let i = ar.length - d - 1; i >= 0; i--) {
    ar[i + d] = ar[i];
  }
  for (let i = 0; i < d; i++) {
    ar[i] = temp[i];
  }
  return ar;
}

function RightRotateByDPlacesOptimal(ar, d) {
  let n = ar.length;
  d = d % n;

  reverseAr(ar, 0, n - 1);
  reverseAr(ar, 0, d - 1);
  reverseAr(ar, d, n - 1);
  return ar;
}

function Union(ar1, ar2) {
  let unionSet = new Set(),
    res = [];

  for (let i = 0; i < ar1.length; i++) {
    unionSet.add(ar1[i]);
  }
  for (let i = 0; i < ar2.length; i++) {
    unionSet.add(ar2[i]);
  }

  for (let el of unionSet) {
    res.push(el);
  }
  return res;
}

function UnionOptimal(ar1, ar2) {
  let i = 0,
    j = 0,
    res = [];

  while (i < ar1.length && j < ar2.length) {
    if (ar1[i] <= ar2[j]) {
      if (ar1[i] > res[res.length - 1] || res.length === 0) {
        res.push(ar1[i]);
      }
      i++;
    } else {
      if (ar2[j] > res[res.length - 1] || res.length === 0) {
        res.push(ar2[j]);
      }
      j++;
    }
  }
  while (i < ar1.length) {
    if (ar1[i] > res[res.length - 1] || res.length === 0) {
      res.push(ar1[i]);
    }
    i++;
  }

  while (j < ar2.length) {
    if (ar2[j] > res[res.length - 1] || res.length === 0) {
      res.push(ar2[j]);
    }
    j++;
  }

  return res;
}

function intersection(ar1, ar2) {
  let vis = Array.from({ length: ar2.length }).fill(0),
    res = [];
  for (let i = 0; i < ar1.length; i++) {
    for (let j = 0; j < ar2.length; j++) {
      if (ar1[i] === ar2[j] && vis[j] === 0) {
        vis[j] = 1;
        res.push(ar1[i]);
        break;
      }
    }
  }
  return res;
}

function intersectionOptimal(ar1, ar2) {
  let i = 0,
    j = 0,
    res = [];
  while (i < ar1.length && j < ar2.length) {
    if (ar2[j] === ar1[i]) {
      res.push(ar1[i]);
      i++;
      j++;
    } else if (ar1[i] > ar2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return res;
}

function moveZeroesToEnd(ar) {
  let i = 0,
    j = 1;
  while (j < ar.length) {
    if (ar[i] !== 0) i++;
    if (ar[j] !== 0 && ar[i] === 0) {
      swap(ar, i, j);
      i++;
      j++;
    } else {
      j++;
    }
  }
  return ar;
}

function TwoSum(ar, target) {
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      if (ar[i] + ar[j] === target) {
        return [i, j];
      }
    }
  }
}

function TwoSumOptimal(ar, target) {
  let hashObj = {};

  for (let i = 0; i < ar.length; i++) {
    if (hashObj[target - ar[i]] || hashObj[target - ar[i]] === 0) {
      return [hashObj[target - ar[i]], i];
    }
    hashObj[ar[i]] = i;
  }
}

function BestTimetoBuyAndSellStocks(ar) {
  let profit = 0,
    min = 0,
    cost = 0,
    max = 0;

  for (let i = 1; i < ar.length; i++) {
    cost = ar[i] - ar[min];
    if (cost > profit) {
      profit = cost;
      max = i;
    }
    if (ar[i] < ar[min]) {
      min = i;
    }
  }
  return [profit, min, max];
}

function LeadersInArray(ar) {
  let leaders = [],
    isLeader = true;
  for (let i = 0; i < ar.length; i++) {
    isLeader = true;
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[j] > ar[i]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) leaders.push(ar[i]);
  }
  return leaders;
}

function LeaderInArrayOptimal(ar) {
  let max = Number.MIN_SAFE_INTEGER,
    leaders = [];
  for (let i = ar.length; i >= 0; i--) {
    if (ar[i] > max) {
      leaders.push(ar[i]);
      max = ar[i];
    }
  }
  return leaders;
}

function linearSearch(ar, target) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === target) return i;
  }
  return false;
}
function LongestConsecutiveSequence(ar) {
  let count = 0,
    max = 0;
  for (let i = 0; i < ar.length; i++) {
    x = ar[i];
    count = 1;
    while (linearSearch(ar, x + 1)) {
      count++;
      if (count > max) {
        max = count;
      }
      x++;
    }
  }

  return max;
}

function LongestConsecutiveSequenceBetter(ar) {
  let x = 0,
    count = 0,
    max = 0;
  ar.sort((a, b) => a - b);
  console.log("ar", ar);
  for (let i = 0; i < ar.length; i++) {
    if (count === 0 || (ar[i] !== x + 1 && ar[i] !== x)) {
      x = ar[i];
      count = 1;
    } else if (ar[i] == x + 1) {
      count++;
      x++;
    }

    max = Math.max(count, max);
  }
  return max;
}

function LongestConsecutiveSequenceOptimal(ar) {
  let set = new Set(),
    count = 0,
    max = 0,
    x;

  for (let i = 0; i < ar.length; i++) {
    set.add(ar[i]);
  }

  for (let ele of set) {
    let i = 0;
    count = 1;
    x = ele;
    if (!set.has(x - 1)) {
      while (set.has(x + 1)) {
        count++;

        x++;
      }
    }
    max = Math.max(count, max);
  }
  return max;
}

function longestSubArrayOfSumK(ar,k) {
  let sum = 0,
    start = 0,
    end = 0,
    max = 0;
  for (let i = 0; i < ar.length; i++) {
    sum = ar[i];
    for (let j = i+1; j < ar.length; j++) {
      sum += ar[j];
      if (sum === k) {
        if ((j - i)+1 > max) {
          max = (j - i )+1;
          start = i;
          end = j;
        }
      }
    }
  }
  return [max,start,end]
}

//prefix sum
function longestSubArrayOfSumKBetter(ar,k){

  let hashObj={},prefixSum=0,length=0,start=0,end=0;
  for(let i=0;i<ar.length;i++){
    prefixSum+=ar[i];
    if(prefixSum===k){
        if(i+1 > length){
          length=i+1;
          start=0;
          end=i;
        }
    }
    let rem=prefixSum-k;
    if(hashObj[rem] || hashObj[rem]==0){
      let len=i-hashObj[rem];
      if(len>length){
        length=len;
        start=hashObj[rem]+1;
        end=i;
      }
    }
if(!hashObj[prefixSum]) hashObj[prefixSum]=i;
  }
  return [length,start,end];
}

function longestSubArrayOfSumKOptimal(ar,k){
  let left=0,right=0,sum=ar[0],maxLen=0,start=0,end=0;

  while(right<ar.length){

      while(sum>k){
        sum-=ar[left];
        left++;
      }
      if(sum===k){
        let len=right-left +1;
        if(len>maxLen){
          maxLen=len;
          start=left;
          end=right;
        }
      }
      ++right;
     if(right<ar.length) sum+=ar[right];

  }
  return [maxLen,start,end]
}

function MajorityElementBetter(ar){
  let hashObj={};

  for(let i=0;i<ar.length;i++){
    if(hashObj[ar[i]]){
      hashObj[ar[i]]++;
    }
    else{
      hashObj[ar[i]]=1;
    }
  }
  for(let i=0;i<ar.length;i++){
    if(hashObj[ar[i]]>(ar.length/2)){
      return ar[i];
    }
  }
}

function MajorityElementUsingMoore(ar){
    let count=0,x=0,finalCount=0;
    for(let i=0;i<ar.length;i++){
        if(count==0){
          x=ar[i];
          count=1;
        }
        else if(x==ar[i] && count!==0){
          count++;
        }
        else{
          count--;
        }
    }
    for(let i=0;i<ar.length;i++){
      if(ar[i]===x){
        finalCount++;
      }
    }
    if(finalCount>(ar.length/2)){
      return x;
    }
}

function MaximumSubArraySum(ar){
  let sum=0,max=0,start=0,end=0;
  for(let i=0;i<ar.length;i++){
    sum=0;
    for(let j=i;j<ar.length;j++){
      sum+=ar[j];
      if(sum>max){
        max=sum;
        start=i;
        end=j;
      }
    }
  }
  return [max,start,end];
}


function MaximumSubArraySumOptimal(ar){
  let sum=0,start=0,end=0,max=Number.MIN_SAFE_INTEGER,finalStart=0;
  for(let i=0;i<ar.length;i++){
    if(sum===0){
      start=i;

    }
    sum+=ar[i];
    if(sum>max){
      max=sum;
      finalStart=start;
      end=i;
    }
    if(sum<0){
      sum=0;
    }

  }
  return [max,finalStart,end]
}

function RearrangeElementsBySign(ar){
  let pos=[],neg=[];

  for(let i=0;i<ar.length;i++){
    if(ar[i]>0){
      pos.push(ar[i]);
    }
   else{
    neg.push(ar[i]);
   }
  }
  for(let i=0;i<pos.length;i++){
    ar[2*i]=pos[i];
    ar[2*i + 1]=neg[i];
  }
  return ar;
}

function RearrangeElementsBySignOptimal(ar){
  let ans=[],posIndex=0,negIndex=0;
  for(let i=0;i<ar.length;i++){
    if(ar[i]>0){
      ans[2*posIndex]=ar[i];
      posIndex++;
    }
    else{
      ans[2*negIndex + 1]=ar[i];
      negIndex++;
    }
  }
  return ans;
}

function RearrangeElementsBySignOdd(ar){
  let pos=[],neg=[];
  for(let i=0;i<ar.length;i++){
    if(ar[i]>0) pos.push(ar[i]);
    else {neg.push(ar[i])};
  }
console.log("pos",pos);
console.log("neg",neg);
  if(pos.length>neg.length){
    let j=1;
    for(let i=0;i<neg.length;i++){
      ar[2*i]=pos[i];
      ar[2*i + 1]=neg[i];
    }
   for(let i=neg.length*2;i<ar.length;i++){

    ar[i]=pos[neg.length-j];
    j--;
   }

  }
  else{
    let j=1;
    for(let i=0;i<pos.length;i++){
      ar[2*i]=pos[i];
      ar[2*i + 1]=neg[i];
    }
    for(let i=pos.length*2;i<ar.length;i++){

      ar[i]=neg[pos.length-j];
      j--;
     }
  }
  return ar;
}

// [0.....low-1] - 0
//[low...mid-1]- 1
// [mid....high]- unsorted
// [high+1...n-1]- 2
function sort0s1s2sOptimal(ar){
  let mid=0,low=0,high=ar.length-1;
  while(mid<=high){
    if(ar[mid]===0){
      swap(ar,mid,low);
      low++;
    }
  else if(ar[mid]==1){
    mid++;
  }
  else{
    swap(ar,mid,high);
    high--;
  }
  }
  return ar;
}

function sortedSquares(ar){
  let i=0;j=ar.length-1,ans=Array.from({length:ar.length}),ansIndex=ar.length-1;
  while(i<=j){
    if(Math.abs(ar[i])>=Math.abs(ar[j])){
     ans[ansIndex]=ar[i]*ar[i];
     ansIndex--;
     i++;
    }
    else{
      ans[ansIndex]=ar[j]*ar[j];
      ansIndex--;
      j--;
    }
  }
  return ans;
}
console.log(checkifsorted([, 2, 4, 5, 23, 6, 8, 9]));

console.log(denomination(3645));

console.log(dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78]));

console.log(secondLargest([2, 5, 8, 75, 89, 35, 12, -8, -10, 23, -2]));

console.log(LeftRotateByDPlaces([1, 2, 3, 4, 5, 6, 7, 8], 3));

console.log(LeftRotateByDPlacesOptimal([1, 2, 3, 4, 5, 6, 7, 8], 3));

console.log(RightRotateByDPlaces([1, 2, 3, 4, 5, 6, 7, 8], 3));

console.log(RightRotateByDPlacesOptimal([1, 2, 3, 4, 5, 6, 7, 8], 3));

console.log(Union([1, 1, 2, 3, 3, 3, 4, 5, 5, 6], [2, 3, 5, 7, 9, 12]));

console.log(
  "optimal here:",
  UnionOptimal([1, 1, 2, 3, 3, 3, 4, 5, 5, 6], [2, 3, 5, 7, 9, 12])
);

console.log(
  "intersection",
  intersection([1, 1, 2, 3, 3, 3, 4, 5, 5, 6], [2, 3, 3, 5, 7, 9, 12])
);

console.log(
  "intersection optimal",
  intersectionOptimal([1, 1, 2, 3, 3, 3, 4, 5, 5, 6], [2, 3, 3, 5, 7, 9, 12])
);

console.log(moveZeroesToEnd([0, 5, 2, 3, 0, 44, 0, 0, 5, 4, 5, 0]));

console.log(TwoSum([2, 4, 8, 16, 24, 5], 24));

console.log(TwoSumOptimal([2, 4, 8, 16, 24, 5], 24));

console.log(BestTimetoBuyAndSellStocks([7, 1, 5, 3, 6, 4]));

console.log(LeadersInArray([10, 22, 12, 3, 0, 6]));

console.log(LeaderInArrayOptimal([10, 22, 12, 3, 0, 6]));

console.log(LongestConsecutiveSequence([102, 4, 100, 1, 101, 3, 2, 1, 1]));
console.log(
  LongestConsecutiveSequenceBetter([102, 4, 100, 1, 101, 3, 2, 1, 1])
);
console.log(
  "optimal",
  LongestConsecutiveSequenceOptimal([102, 4, 100, 1, 101, 3, 2, 1, 1])
);

console.log(longestSubArrayOfSumK([1, 2, 3, 1, 1, 1, 1, 4, 3, 2], 3));
console.log(longestSubArrayOfSumKBetter([1, 2, 3, 1, 1, 1, 1, 4, 3, 2], 3));
console.log(longestSubArrayOfSumKBetter([-1, 2, 0, 0, 0, 0, 3], 3));
console.log(longestSubArrayOfSumKOptimal([1, 2, 3, 1, 1, 1, 1, 4, 3, 2], 3));

console.log(MajorityElementBetter([-1,0,8,2,3,1,1,2,3,2,2,2,2,2,2,2,2,2,2,1,1,1,1]))
// console.log(MajorityElementBetter([-1,0,8,2,3,1,1,2,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1]))
console.log(MajorityElementUsingMoore([-1,0,8,2,3,1,1,2,3,2,2,2,2,2,2,2,2,2,2,1,1,1,1]))


console.log(MaximumSubArraySum([-2,-3,4,-1,-2,5,-3]));
console.log(MaximumSubArraySumOptimal([-2,-3,4,-1,-2,5,-3]));

console.log(MaximumSubArraySumOptimal([-2,-3,-1]));

console.log(RearrangeElementsBySign([3, 1, -2, -5, 2, -4]));
console.log(RearrangeElementsBySignOptimal([3, 1, -2, -5, 2, -4]));

console.log(RearrangeElementsBySignOdd([3, 1, -2,9, -5, 2, -4,8]));


console.log(sort0s1s2sOptimal([2,1,1,1,1,0,2,0,0,0,0,0,2,0,1,0,1,1,1]))
console.log(sortedSquares([-7,-3,2,3,11]))