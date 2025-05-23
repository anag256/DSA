function checkIfSorted(ar){
    for(let i=0;i<ar.length-1;i++){
        if(ar[i]>ar[i+1]){
            return false;
        }
    }
    return true;
}

function dailyTemperatures(ar){
    let stack=[],res=Array.from({length:ar.length}).fill(0);
    for(let i=0;i<ar.length;i++){
        while(ar[i]>ar[stack[stack.length-1]]){
            let poppedIndex=stack.pop();
            res[poppedIndex]=i-poppedIndex;
        }
        stack.push(i);
    }
    return res;
}


function denomination(amount){
    let currencyAr=[2000,1000,500,200,100,50,10,5,1],hashObj={};

    for(let i=0;i<currencyAr.length;i++){
        hashObj[currencyAr[i]]=parseInt(amount/currencyAr[i]);
        amount=amount%currencyAr[i];
    }

    return hashObj;
}


function leftRotateByDPlaces(ar,d){
    let n=ar.length,temp=[];
d=d%n;
for(let i=0;i<d;i++){
    temp.push(ar[i]);
}

for(let i=d;i<n;i++){
    ar[i-d]=ar[i];
}

for(let i=n-d;i<n;i++){
    ar[i]=temp[i-(n-d)];
}
return ar;
}

function swap(ar,i,j){
    let temp;
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;
}

function reverseAr(ar,i,j){

  while(i<j){
    swap(ar,i,j);
    i++;
    j--;
  }
}
function leftRotateOptimal(ar,d){
    let n=ar.length;
    d=d%n;
    reverseAr(ar,0,d-1);
    reverseAr(ar,d,n-1);
    reverseAr(ar,0,n-1);
    return ar;

}

function rightRotateByDPlaces(ar,d){
    let n=ar.length,temp=[];
    d=d%n;

    for(let i=n-d;i<n;i++){
        temp.push(ar[i]);
        console.log("temp",temp)
    }

    for(let i=n-d-1;i>=0;i--){
        ar[i+d]=ar[i];
    }

    for(let i=0;i<d;i++){
        ar[i]=temp[i];
    }

return ar;
}

function rightRotateOptimal(ar,d){
    let n=ar.length;
    d=d%n;

    reverseAr(ar,0,n-1);
    reverseAr(ar,0,d-1);
    reverseAr(ar,d,n-1);
    return ar;
}

function maxConsecOnes(ar){
    let maxLen=0,count=0;
    for(let i=0;i<ar.length;i++){
        if(ar[i]===1){
            count++;
        }
        else{
            count=0;
        }
        maxLen=Math.max(count,maxLen);
    }

    return maxLen;
}

function removeDuplicates(ar){
    let set=new Set(),res=[];
   for(let i=0;i<ar.length;i++){
    set.add(ar[i]);
   }
   for(let el of set){
    res.push(el);
   }

   return res;

}

function removeDuplicatesOptimal(ar){

  let i=0,j=1,res=[];

  while(j<ar.length){
    if(ar[j]>ar[i]){
        swap(ar,i+1,j);
        i++;
    }
    j++;
  }

  for(let k=0;k<=i;k++){
    res.push(ar[k]);
  }

  return res;

}
function moveZeroesToEnd(ar){
    let temp=[];
    for(let i=0;i<ar.length;i++){
        if(ar[i]!==0) temp.push(ar[i]);

    }
    for(let i=0;i<temp.length;i++){
        ar[i]=temp[i];
    }
    for(let i=temp.length;i<ar.length;i++){
        ar[i]=0
    }

    return ar;
}

function moveZeroesToEndOptimal(ar){
    let i=0,j=0;

    while(j<ar.length){
        if(ar[j]==0){
            j++;
        }

       else if(ar[i]===0 && ar[j]!==0){
            swap(ar,i,j);
            i++;
            j++;
        }
        else{
            i++;
            j++;
        }
    }
    return ar;
}

function secondLargest(ar){
    let largest=Number.MIN_SAFE_INTEGER,secondLargest;

    for(let i=0;i<ar.length;i++){
        if(ar[i]>largest){
            secondLargest=largest;
            largest=ar[i];
        }
        if(ar[i]<largest && ar[i]>secondLargest){
            secondLargest=ar[i]
        }
    }

    return {largest,secondLargest}
}


function union(ar1,ar2){
    let set=new Set([...ar1,...ar2]);
    return Array.from(set);
}

function UnionOptimal(ar1,ar2){
    let i=0,j=0,union=[];

    while(i<ar1.length && j<ar2.length){
        if(ar1[i]<ar2[j]){
            if(union[union.length-1] !==ar1[i]){
                union.push(ar1[i]);
                i++;
            }
            else{
               i++;
            }

        }

        else{
            if(union[union.length-1] !==ar2[j]){
                union.push(ar2[j]);
                j++;
            }
            else{
               j++;
            }
        }
    }

    while(i<ar1.length){

            if(union[union.length-1] !==ar1[i]){
                union.push(ar1[i]);
                i++;
            }
            else{
               i++;
            }

        }

        while(j<ar2.length){
            if(union[union.length-1] !==ar2[j]){
                union.push(ar2[j]);
                j++;
            }
            else{
               j++;
            }
        }
return union;
}


function intersection(ar1,ar2){
    let visited=Array.from({length:ar2.length}).fill(0),inter=[];
    for(let i=0;i<ar1.length;i++){
        for(let j=0;j<ar2.length;j++){
            if(ar2[j]===ar1[i] && visited[j]===0){
                inter.push(ar2[j]);
                visited[j]=1;
                break;
            }
            if(ar2[j]>ar1[i]) break;
        }

    }

    return inter;
}


function intersectionOptimal(ar1,ar2){
    let i=0,j=0,inter=[];

    while(i<ar1.length && j<ar2.length){
        if(ar2[j]>ar1[i]){
            i++;
        }
        else if(ar2[j]===ar1[i]){
            inter.push(ar2[j]);
            i++;
            j++;
        }
        else{
            j++;
        }
    }
    return inter;
}

function twoSum(ar,sum){
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
            if(ar[i]+ar[j] === sum){
                return [i,j];
            }
        }
    }
}

function twoSumBetter(ar,sum){
    let hashObj={};

    for(let i=0;i<ar.length;i++){
        if(hashObj[sum-ar[i]]){
            return [i,hashObj[sum-ar[i]]]
        }

            hashObj[ar[i]]=i;
    }
    return -1;
}

function twoSumOptimal(ar,target){
    let unsortedAr=[...ar];
    ar.sort((a,b)=>a-b);
    let i=0,j=ar.length-1;

    while(i<j){
        let sum=ar[i]+ar[j];
        if(sum > target){
            j--;
        }
        else if( sum <target){
            i++;
        }
        else{
            return [unsortedAr.findIndex(el=>el===ar[i]),unsortedAr.findIndex(el=>el===ar[j])];
        }
    }
}

function bestTimeToBuyAndSellStocks(ar){
    let maxProfit=Number.MIN_SAFE_INTEGER,min=0,profit=0,endIndex;
    for(let i=1;i<ar.length;i++){
        profit=ar[i]-ar[min];
        if(profit >  maxProfit){
            maxProfit=profit;
            endIndex=i;
        }
       if(ar[i] < ar[min]){
        min=i;
       }
    }
    return {maxProfit,min,endIndex}

}

function LeadersInArray(ar){
    let leaders=[],isLeader=true;
    for(let i=0;i<ar.length;i++){
        isLeader=true;
        for(let j=i+1;j<ar.length;j++){
            if(ar[i]<ar[j]){
                isLeader=false;
                break;
            }
        }
        if(isLeader) leaders.push(ar[i]);
    }
    return leaders;
}

function LeadersInArrayOptimal(ar){
    let max=Number.MIN_SAFE_INTEGER,leaders=[];
    for(let i=ar.length-1;i>=0;i--){
        if(ar[i]>max){
            max=ar[i];
            leaders.push(ar[i]);
        }
    }
    return leaders;
}

function LinearSearch(ar,target){
    for(let i=0;i<ar.length;i++){
        if(ar[i]===target) return true;
    }
    return false;
}


function LongestConsecutiveSequence(ar){
    let count=0,longes=0;
    for(let i=0;i<ar.length;i++){
        let x=ar[i];
        count=1;
        while(LinearSearch(ar,x+1)){
            count++;
            x++;
            longes=Math.max(longes,count)
        }
    }
    return longes
}


function LongestConsecutiveSequenceBetter(ar){
    let lastSmaller=0,longest=0,count=0;

    ar.sort((a,b)=>a-b);
    for(let i=0;i<ar.length;i++){
        longest=Math.max(longest,count);
        if(lastSmaller !== ar[i] && lastSmaller !==ar[i]-1){
            lastSmaller=ar[i];
            count=1;
        }
        if(lastSmaller===ar[i]-1){
            lastSmaller=ar[i];
            count++;

        }


    }

    return longest;
}


function LongestConsecutiveSequenceOptimal(ar){
    let set=new Set(ar),x=0,count=0,longest=0;
    for(let i=0;i<ar.length;i++){
        x=ar[i];
        count=1;
        if(!set.has(x-1)){
            while(set.has(x+1)){
                count++;
                x++;
                longest=Math.max(longest,count);
            }
        }
    }
    return longest
}


function longestSubArrayOfSumK(ar,k){
    let sum=0,longest=0,start,end;
    for(let i=0;i<ar.length;i++){
        sum=0

        for(let j=i;j<ar.length;j++){
            sum+=ar[j];
            if(sum===k) {
                if( (j-i + 1)> longest  ){
                    longest= j-i +1;
                    start=i;
                    end=j;
                }
            }
            if(sum>k) break;
        }
    }
    return {longest,start,end}
}

function longestSubArrayOfSumKBetter(ar,k){
    let hashObj={},prefixSum=0,len=0,maxLen=0,startIndex,endIndex;
    for(let i=0;i<ar.length;i++){
        prefixSum+=ar[i];
        if(prefixSum===k){
            len=i+1;
            if(len>maxLen){
                    maxLen=len;
                    startIndex=0;
                   endIndex=i;
            }
        }
        let rem=prefixSum-k;
        if(hashObj[rem] || hashObj[rem]===0){
            len=i-hashObj[rem];
            if(len>maxLen){
                maxLen=len;
                startIndex=hashObj[rem]+1;
                endIndex=i

            }
        }

            if(!hashObj[prefixSum])hashObj[prefixSum]=i;
    }
    return {maxLen,startIndex,endIndex}
}

function longestSubArrayOfSumKOptimal(ar,k){
let left=0,right=0,sum=ar[0],maxLen=0;

while(right<ar.length){
    if(sum===k){
        maxLen=Math.max(maxLen, right-left+1)
    }
    if(sum>k){
        sum-=ar[left];
        left++;
    }
    ++right;


    if(right<ar.length) sum+=ar[right];
}
return maxLen;
}

function MajorityElement(ar){
    let count,x;
    for(let i=0;i<ar.length;i++){
        count=0;
        x=ar[i];
        for(let j=0;j<ar.length;j++){
            if(j!==i && ar[j]===ar[i]){
                count++;
            }
            if(count>parseInt(ar.length/2)){
                return ar[i];
            }
        }
    }
    return -1;
}

function MajorityElementBetter(ar){
    let hashObj={};
    for(let i=0;i<ar.length;i++){
        if(hashObj[ar[i]]){
            hashObj[ar[i]]++
        }
        else{
            hashObj[ar[i]]=1;
        }
    }

    for(let key in hashObj){
        if(hashObj[key] > parseInt(ar.length/2)){
            return key;
        }
    }
    return -1;
}

function MajorityElementUsingMoore(ar){
    let count=0,x=0,count2=0;
    for(let i=0;i<ar.length;i++){
        if(count===0){
            x=ar[i];
            count=1;
        }
        else if( x ===ar[i]){
            count++;
        }
        else{
            count--;
        }
    }

    for(let i=0;i<ar.length;i++){
        if(ar[i]===x){
            count2++;
        }
    }
    if(count2 > parseInt(ar.length/2)) return x;
    return -1;
}

function MaximumSubArraySum(ar){
    let maxSum=0,sum=0,startIndex,endIndex;
    for(let i=0;i<ar.length;i++){
        sum=0;
        for(let j=i;j<ar.length;j++){
            sum+=ar[j];
            if(sum > maxSum){
                maxSum=sum;
                endIndex=j;
                startIndex=i;
            }
        }
    }
    return [maxSum,startIndex,endIndex]
}

//kadane's algo
function MaximumSubArraySumOptimal(ar){
    let maxSum=Number.MIN_SAFE_INTEGER,sum=0,startIndex,endIndex;
    for(let i=0;i<ar.length;i++){
        if(sum===0){
            startIndex=i;
        }
        sum+=ar[i];

        if(sum > maxSum){
            maxSum=sum;
            endIndex=i;
        }
        if(sum < 0){
            sum=0;

        }
    }
    return {maxSum,startIndex,endIndex}
}

function sortedSquares(ar){
    let res=[],i=0,j=ar.length-1;
    while(i<=j){
        if(Math.abs(ar[i]) >= Math.abs(ar[j])){
            res.unshift(ar[i]*ar[i]);
            i++;
        }
        else{
            res.unshift(ar[j]*ar[j]);
            j++;
        }
    }
    return res;
}

function sort0s1s2s(ar){
let count0=0,count1=0,count2=0;

for(let i=0;i<ar.length;i++){
    if(ar[i]===0){
        count0++;
    }
    if(ar[i]===1){
        count1++;
    }
    else count2++;
}

for(let i=0;i<count0;i++){
    ar[i]=0;
}
for(let i=count0;i<(count0+count1);i++){
    ar[i]=1;
}
for(let i=count0+count1;i<ar.length;i++){
    ar[i]=2;
}
return ar;
}

//dutch national flag algo
//[0....low-1] - 0
//[low....mid-1] -1
//[mid....high]-unsorted
//[high+1....n-1]-2
function sort0s1s2sOptimal(ar){
    let low=0,high=ar.length-1,mid=0;
    while(mid<=high){
        if(ar[mid]===0){
            swap(ar,mid,low);
            low++;
            mid++;
        }
        else if(ar[mid]===1){
            mid++;
        }
        else{
            swap(ar,mid,high);
            high--;

        }
    }
    return ar;
}

function RearrangeElementsBySignEven(ar){
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

function RearrangeElementsBySignOdd(ar){
    let pos=[],neg=[];
    for(let i=0;i<ar.length;i++){
        if(ar[i]>0){
            pos.push(ar[i]);
        }
        else{
            neg.push(ar[i]);
        }
    }
    if(pos.length > neg.length){
        let posIndex=neg.length * 2,k=0;
       for(let i=0;i<neg.length;i++){
        ar[2*i]=pos[i];
        ar[2*i +1]=neg[i];

       }
       for(let i=posIndex;i<ar.length;i++){
        ar[i]=pos[neg.length+k]
        k++;
       }
    }
    else{
        let negIndex=pos.length * 2,k=0;
        for(let i=0;i<pos.length;i++){
         ar[2*i]=pos[i];
         ar[2*i +1]=neg[i];

        }
        for(let i=negIndex;i<ar.length;i++){
         ar[i]=pos[pos.length+k]
         k++;
        }
    }
    return ar;
}
console.log(checkIfSorted([2,4,5,3,6,8]))

console.log(dailyTemperatures([55,38,53,81,61,93,97,32,43,78]));

console.log(denomination([3333]));


console.log(leftRotateByDPlaces([2,5,1,89,56,45,23,12],4))

console.log(leftRotateOptimal([2,5,1,89,56,45,23,12],4))


console.log(rightRotateByDPlaces([2,5,1,89,56,45,23,12],3))

console.log(rightRotateOptimal([2,5,1,89,56,45,23,12],3))


console.log(maxConsecOnes([0,1,0,1,1,0,2,1,1,1,1,0,1,1,1,1,1,1,0,1]))


console.log(removeDuplicates([1,1,2,2,2,3,3,4]))

console.log(removeDuplicatesOptimal([1,1,2,2,2,3,3,4]))


console.log(moveZeroesToEnd([2,0,2,3,0,44,0,0,5,4,5,0]))

console.log(moveZeroesToEndOptimal([2,0,2,3,0,44,0,0,5,4,5,0]))

console.log(secondLargest([2,5,1,89,56,45,23,12]))


console.log(union([1,1,2,3,3,3,4,5,5,6],[2,3,5,7,9,12]))

console.log(UnionOptimal([1,1,2,3,3,3,4,5,5,6],[2,3,5,7,9,12]))


console.log("intersection",intersection([1,1,2,3,3,3,4,5,5,6],[2,3,3,5,7,9,12]))

console.log("intersectionoptimal",intersectionOptimal([1,1,2,3,3,3,4,5,5,6],[2,3,3,5,7,9,12]))


console.log(twoSum([2,4,8,16,24,5],24))

console.log(twoSumBetter([2,4,8,16,24,5],24))

console.log(twoSumOptimal([2,4,8,16,24,5],24))


console.log(bestTimeToBuyAndSellStocks([7,1,5,3,6,4]))


console.log(LeadersInArray([10,22,12,3,0,6]))

console.log(LeadersInArrayOptimal([10,22,12,3,0,6]))

console.log(LongestConsecutiveSequence([102,4,100,1,101,3,2,1,4,5,6,1,103]))
console.log(LongestConsecutiveSequenceBetter([102,4,100,1,101,3,2,1,4,5,6,1,103]))
//[1,1,1,2,3,4,100,101,102,103,104]
console.log(LongestConsecutiveSequenceOptimal([102,4,100,1,101,3,2,1,4,5,6,1,103]))


console.log(longestSubArrayOfSumK([1, 2, 3, 1, 1, 1, 1, 4, 3, 2], 3));
console.log(longestSubArrayOfSumKBetter([1, 2, 3, 1, 1, 1, 1, 4, 3, 2], 3));
console.log(longestSubArrayOfSumKBetter([-1, 2, 0, 0, 0, 0, 3], 3));
console.log(longestSubArrayOfSumKOptimal([1, 2, 3, 1, 1, 1, 1, 4, 3, 2], 3));



console.log(MajorityElement([-1,0,8,2,3,1,1,2,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1]))
console.log(MajorityElementBetter([-1,0,8,2,3,1,1,2,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1]))
console.log(MajorityElementUsingMoore([-1,0,8,2,3,1,1,2,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1]))



console.log(MaximumSubArraySum([-2,-3,4,-1,-2,5,-3]));
console.log(MaximumSubArraySumOptimal([-2,-3,4,-1,-2,5,-3]));

console.log(MaximumSubArraySumOptimal([-2,-3,-1]));


console.log(sortedSquares([-5,-3,-2,-1]))

console.log(sort0s1s2s([2,1,1,1,1,0,2,0,0,0,0,0,2,0,1,0,1,1,1]))

console.log(sort0s1s2sOptimal([2,1,1,1,1,0,2,0,0,0,0,0,2,0,1,0,1,1,1]))


console.log(RearrangeElementsBySignEven([3, 1, -2, -5, 2, -4]));
console.log(RearrangeElementsBySignOdd([3, 1, -2,9, -5, 2, -4,8]));
