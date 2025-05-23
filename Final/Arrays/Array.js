// 1) checkIfSorted
function checkIfSorted(ar){

    for(let i=0;i<ar.length-1;i++){
        if(ar[i+1]<ar[i]){
            return false;
        }
    }
    return true;
}

//DailyTem

function DailyTemp(ar){
    let count=0,res=[];
    for(let i=0;i<ar.length;i++){
        count=0;
        if(i===ar.length-1){
            res.push(0)
            break;
        }
        for(let j=i+1;j<ar.length;j++){
            if(ar[j]>ar[i]){
                count++;
                res.push(count);
                break;
            }
            else if(j===ar.length-1){
                res.push(0);
                break;
            }
            else{
                count++;
            }
        }
    }
    return res;
}

function optimizedDailyTemp(ar){
    let res=[],stack=[];
    res=Array.from(ar).fill(0);
    for(let i=0;i<ar.length;i++){
        while(ar[i]>ar[stack[stack.length-1]]){

                res[stack[stack.length-1]]=i-stack[stack.length-1];
                stack.pop();

        }
        stack.push(i);
    }
    return res;
}
function Denomination(amount){
    const Currency_Ar=[2000,500,200,100,50,10,5,1],obj={};
    for(let i=0;i<Currency_Ar.length;i++){
        obj[Currency_Ar[i]]=parseInt(amount/Currency_Ar[i]);
        amount=amount%Currency_Ar[i];

    }
    return obj;
}

function findElementThatAppearsOnce(ar){
    let freqObj={};
     freqObj=ar.reduce((acc,curr)=>{
        if(acc[curr]){
            acc[curr]++;
        }
        else{
            acc[curr]=1
        }
        return acc;
    },{});
    console.log("freqObj",freqObj)
    return Object.keys(freqObj).find((key)=>freqObj[key]===1)
}

function swap(ar,a,b){
    let temp;
    temp=ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
    return ar;
}
function reverse(ar,i,j){

    while(i<j){
       ar=swap(ar,i,j);
       i++;
       j--;
    }
    return ar;
}
function LeftRotateByDPlaces(ar,d){
    let k=ar.length
    d=d%k;
    if(d==0) return ar;
    let temp=[];
    for(let i=0;i<d;i++){
        temp.push(ar[i]);
    }
    for(let i=d;i<k;i++){
        ar[i-d]=ar[i];
    }
    for(let i=k-d;i<ar.length;i++){
        ar[i]=temp[i-(k-d)]
    }
    return ar;
}
function LeftRotateByDPlacesOptimal(ar,d){
    let k=ar.length
    d=d%k;
    if(d==0) return ar;
    ar=reverse(ar,0,d-1);
    ar=reverse(ar,d,k-1)
    return reverse(ar,0,k-1);
}

function RightRotateByDPlaces(ar,d){
    let k=ar.length,temp=[];

    d=d%k;
    for(let i=k-d;i<k;i++){
        temp.push(ar[i]);
    }
    for(let i=k-d-1;i>=0;i--){
        ar[i+d]=ar[i]
    }
    for(let i=0;i<d;i++){
        ar[i]=temp[i];
    }
    return ar;
}
function RightRotateByDPlacesOptimal(ar,d){
    let k=ar.length
    d=d%k;
    if(d==0) return ar;
    ar=reverse(ar,0,k-1);
    ar=reverse(ar,0,d-1)
    return reverse(ar,d,k-1);
}

function BestTimetoBuyAndSellStocks(ar){
  let profit=0,min=ar[0],cost=0,end;
  for(let i=0;i<ar.length;i++){
    cost=ar[i]-min;
    if(cost>profit){
        profit=cost;
        end=ar[i];
    }
    min=Math.min(min,ar[i]);
  }
  return [profit,min,end]
}

function DailyTemp(ar){
    let res=[],stack=[];
    res=Array.from(ar).fill(0);
    for(let i=0;i<ar.length;i++){
        while(ar[i]>ar[stack[stack.length-1]]){

                res[stack[stack.length-1]]=i-stack[stack.length-1];
                stack.pop();

        }
        stack.push(i);
    }
    return res;
}

function flattenArray(ar){
    let res=[];
    flattenAr(ar);
    function flattenAr(ar){
        for(let i=0;i<ar.length;i++){
            if(Array.isArray(ar[i])){
                flattenAr(ar[i]);
            }
            else{
                res.push(ar[i]);
            }
        }
    }
    return res;
}

function twoSum(ar,target){
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
            if(ar[i]+ar[j]===target){
                return [i,j]
            }
        }
    }
    return [-1,-1]
}

function twoSumOptimal(ar,target){
    let hashObj={};
    for(let i=0;i<ar.length;i++){

        if(hashObj[target-ar[i]]){
            return [ar[i],target-ar[i]]
        }
        hashObj[ar[i]]=i+1;
    }
}

function BubbleSort(ar){
    for(let i=0;i<ar.length-1;i++){
        for(let j=0;j<=ar.length-i-1;j++){
            if(ar[j+1]<ar[j]){
                ar=swap(ar,j,j+1);
            }
        }
    }
    return ar;
}
// https://www.geeksforgeeks.org/insertion-sort-algorithm/
function insertionSort(ar){
    let j;
    for(let i=1;i<ar.length;i++){
        j=i;
        while(j>0 && ar[j-1]>ar[j]){
            ar=swap(ar,j,j-1);
            j--;
        }
    }
    return ar;
}

function LargestAndSecondLargest(ar){
    let max=Number.MIN_SAFE_INTEGER,secondMax=null;
    for(let i=0;i<ar.length;i++){
        if(ar[i]>max){
            secondMax=max;
            max=ar[i];
        }
        if(ar[i]<max && ar[i]>secondMax){
            secondMax=ar[i];
        }
    }
    return [max,secondMax]
}
function intersection(ar1,ar2){
    let visited=Array.from(ar2).fill(0),inter=[];
    for(let i=0;i<ar1.length;i++){
        for(let j=0;j<ar2.length;j++){
            if(ar1[i]===ar2[j] && visited[j]===0){
                visited[j]=1;
                inter.push(ar2[j]);
                break;
            }
        }
    }
    return inter;
}

function intersectionOptimal(ar1,ar2){
    let i=0,j=0,inter=[];
    while(i<ar1.length && j<ar2.length){
        if(ar1[i]===ar2[j]){
            inter.push(ar1[i]);
            i++;
            j++;
        }
        else if(ar2[j]>ar1[i]){
            i++;
        }
        else{
            j++;
        }
    }
    return inter;
}

function leaderInArray(ar){
    let leader=true,leaders=[];
    for(let i=0;i<ar.length;i++){
        leader=true;
        for(let j=i+1;j<ar.length;j++){
            if(ar[j]>ar[i]){
                leader=false
                break;
            }

        }
        if(leader) leaders.push(ar[i]);
    }
    return leaders;
}

function LeaderInArrayOptimal(ar){
    let max=Number.MIN_SAFE_INTEGER,leaders=[];
    for(let i=ar.length-1;i>=0;i--){
        if(ar[i]>max){
            max=ar[i];
            leaders.push(ar[i]);
        }
        max=Math.max(max,ar[i]);
    }
    return leaders;
}

function findMin(ar,start){
    let min=start;
    for(let i=start+1;i<ar.length;i++){
        if(ar[i]<ar[min]){
            min=i;
        }
    }
    return min;
}
function selectionSort(ar){
    let min;
    for(let i=0;i<ar.length;i++){
       min= findMin(ar,i);
       ar=swap(ar,min,i);
    }
    return ar;
}
function LinearSearch(ar,target){
    for(let i=0;i<ar.length;i++){
        if(ar[i]===target){
            return true;
        }
    }
    return false;
}

function LongestConsecutiveSequence(ar){
    let max=Number.MIN_SAFE_INTEGER,count=0,x;
    for(let i=0;i<ar.length;i++){
        count=1;
        x=ar[i];
        while(LinearSearch(ar,x-1)===true){
            count++;
            x--;
        }
        max=Math.max(count,max);
    }
    return max;
}


//o(nlogn)+o(n)
function LongestConsecutiveSequenceBetter(ar){
    let lastSmaller=Number.MAX_SAFE_INTEGER,count=0,max=Number.MIN_SAFE_INTEGER;
    ar.sort((a,b)=>a-b);
    console.log("sorted",ar)
    for(let i=0;i<ar.length;i++){
        if(ar[i]-1===lastSmaller){
            count++;
            lastSmaller=ar[i];
        }
       else if(ar[i]-1!==lastSmaller && ar[i]!==lastSmaller){
            lastSmaller=ar[i];
            count=1;
        }
        max=Math.max(count,max);
    }
    return max;
}

function LongestConsecutiveSequenceOptimal(ar){
    let set=new Set(ar),count=0,max=Number.MIN_SAFE_INTEGER,i=1;
    for(let value of set){
        if(!set.has(value-1)){
            i=1;
            count=1;
            while(set.has(value+i)){
                count++;
                i++;
            }
        }
        max=Math.max(count,max);
    }
    return max;
}

//divide & conquer

function merge(ar,low,mid,high){
    let left=low,right=mid+1,temp=[];
    while(left<=mid && right<=high){
        if(ar[left]<ar[right]){
            temp.push(ar[left]);
            left++;
        }
        else{
            temp.push(ar[right]);
            right++;
        }
    }
    while(left<=mid){

            temp.push(ar[left]);
            left++;

    }

    while(right<=high){

            temp.push(ar[right]);
            right++;
    }
    for(let i=low;i<=high;i++){
        ar[i]=temp[i-low];
    }
    return ar;
}
function MergeSort(ar,low,high){
    if(low===high) return;
   let mid=parseInt((low+high)/2);

    MergeSort(ar,low,mid);
    MergeSort(ar,mid+1,high);
    return merge(ar,low,mid,high);
}

//tc o(n1+n2)
// sc o(n1+n2) + o(n1+n2)
function union(ar1,ar2){
    let set=new Set([...ar1,...ar2]);
    return Array.from(set);

}
function fizzBuzzOuter() {
    let i=0;
    function fizzBuzz() {
        i++;
        if(i%2===0){
            return "fizz"
        }
        else{
            return "Buzz"
        }
    }
    return fizzBuzz
}
//tc o(n1+n2)
//sc o(n1+n2)
function unionOptimal(ar1,ar2){
    let i=0,j=0,union=[];
    while(i<ar1.length && j<ar2.length){
        if(ar1[i]<=ar2[j]){
            if(union.length===0  || union[union.length-1]!==ar1[i]){
                union.push(ar1[i]);
            }
            else{
                i++;
            }
        }
        else{
            if(union.length===0  || union[union.length-1]!==ar2[j]){
                union.push(ar2[j]);
            }
            else{
                j++;
            }
        }
    }
    while(i<ar1.length){
            if(union.length===0  || union[union.length-1]!==ar1[i]){
                union.push(ar1[i]);
            }
            else{
                i++;
            }
        }

        while( j<ar2.length){
            if(union.length===0  || union[union.length-1]!==ar2[j]){
                union.push(ar2[j]);
            }
            else{
                j++;
            }

        }
        return union
}

function longestSubArrayOfSumK(ar,k){
    let sum=0,len=0,count=0;
    for(let i=0;i<ar.length;i++){
        sum=0;
        count=0;
        for(let j=i;j<ar.length;j++){
            sum+=ar[j];
            count++;
            if(sum===k){
                len=Math.max(len,count);
            }
        }
    }
    return len;
}
//optimal for array containing negatives,zeroes and ones (better for array containing 0 and 1)
function longestSubArrayOfSumKBetter(ar,k){
    let hashObj={},prefixSum=0,rem,len=0,count=0;
    for(let i=0;i<ar.length;i++){
        prefixSum+=ar[i];
    if(prefixSum===k) len=Math.max(len,i+1);
        rem=prefixSum-k;
        if(hashObj[rem] || hashObj[rem]===0){
            len=Math.max(len,i-hashObj[rem])
        }
       if(!hashObj[prefixSum]) hashObj[prefixSum]=i;

    }
    return len;
}
//optimal for array containing 0s and 1s
function longestSubArrayOfSumKOptimal(ar,k){

}
//o(n^2)
function MajorityElement(ar){
    let count=0;
    for(let i=0;i<ar.length;i++){
        count=0;
        for(let j=0;j<ar.length;j++){
            if(j!==i  && ar[i]===ar[j]){
                count++;
            }
        }
        if(count>parseInt(ar.length/2)){
            return ar[i]
        }
    }
    return -1;
}

function MajorityElementBetter(ar){
let hashObj={};
for(let i=0;i<ar.length;i++){
    if(!hashObj[ar[i]]){
        hashObj[ar[i]]=1;
    }
    else{
        hashObj[ar[i]]++;
    }

}
for(let key in hashObj){
    if(hashObj[key]>parseInt(ar.length/2)){
        return key;
    }
}
return -1;
}


function MajorityElementUsingMoore(ar){
    let count=0,el,count1=0;
    for(let i=0;i<ar.length;i++){
        if(count===0){
            count=1;
            el=ar[i];
        }
        else if(ar[i]===el){
            count++;
        }
        else{
            count--;
        }
    }
    for(let i=0;i<ar.length;i++){
        if(ar[i]===el){
            count1++;
        }
    }

        if(count1>parseInt(ar.length/2)){
            return el;
        }

    return -1;
}
function moveZerosToEnd(ar){
    let temp=[];
    for(let i=0;i<ar.length;i++){
        if(ar[i]!==0){
            temp.push(ar[i]);
        }
    }
    for(let i=0;i<temp.length;i++){
        ar[i]=temp[i];
    }
    for(let i=temp.length;i<ar.length;i++){
        ar[i]=0;
    }
    return ar;
}

function moveZerosToEndOptimal(ar){
    let i=0,j=0;
    while(j<ar.length){
        if(ar[j]!==0){
            ar=swap(ar,i,j);
            i++;
        }
        j++;
    }
    return ar;
}
function MaximumSubArraySum(ar){
    let sum=0,max=Number.MIN_SAFE_INTEGER,ansStart,ansEnd;
    for(let i=0;i<ar.length;i++){
        sum=0;

        for(let j=i;j<ar.length;j++){

            sum+=ar[j];
            if(sum>max){
                max=sum;
                ansStart=i;
                ansEnd=j;
            }
        }
    }
    return [max,ansStart,ansEnd]
}
//kadane's algo
function MaximumSubArraySumOptimal(ar){
    let sum=0,max=Number.MIN_SAFE_INTEGER,ansStart=-1,ansEnd=-1;
    for(let i=0;i<ar.length;i++){
        if(sum===0) ansStart=i;
        sum+=ar[i];
           if(sum>max){
            max=sum;
            ansEnd=i;
           }
        if(sum<0) sum=0;
    }
    return [max,ansStart,ansEnd];
}

function findPartitionIndex(ar,low,high){
    let pivot=low,i=low,j=high;
    while(i<j){
        //from left, find first element greater than pivot
        while(ar[i]<=ar[pivot] && i<=high){
            i++;
        }
        while(ar[j]>ar[pivot] && j>=low){
            j--;
        }
        if(i<j){
           ar=swap(ar,i,j);
        }
    }
    ar=swap(ar,pivot,j);
    return j;

}
function QuickSort(ar,low,high){
if(low<high){
    let partitionIndex= findPartitionIndex(ar,low,high);
    QuickSort(ar,low,partitionIndex-1);
    QuickSort(ar,partitionIndex+1,high);
    return ar;
}

}

function sort0s1s2s(ar){
    let count0=0,count1=0,count2=0;
    for(let i=0;i<ar.length;i++){
        if(ar[i]===0){
            count0++;
        }
        else if(ar[i]===1){
            count1++;
        }
        else{
            count2++;
        }
    }
    for(let i=0;i<count0;i++){
        ar[i]=0;
    }
    for(let i=count0;i<count0+count1;i++){
        ar[i]=1
    }
    for(let i=count0+count1;i<ar.length;i++){
        ar[i]=2;
    }
    return ar;
}

//dutch national flag algo
//[0....low-1]-0
//[low....mid-1]-1
//[mid.....high]-unsorted
//[high+1.....ar.length]-2
function sort0s1s2sOptimal(ar){
    let low=0,mid=0,high=ar.length-1;
    while(mid<=high){
        if(ar[mid]===0){
            ar=swap(ar,low,mid);
            low++;
            mid++;
        }
        else if(ar[mid]===1){
            mid++;
        }
        else{
            ar=swap(ar,mid,high);
            high--;
        }
    }
    return ar;
}

function reverseNumber(num){
    let rev=0,rem;
    while(num>0){
        rem=num%10;
        num=parseInt(num/10);
        rev=rev*10+rem;
    }
    return rev;
}

function ArmStrongNumber(num){
    let count=0,originalNum=num,rem,sum=0;
    while(num>0){
        count++;
        num=parseInt(num/10);
    }
    num=originalNum;
    while(originalNum>0){
        rem=originalNum%10;
        originalNum=parseInt(originalNum/10);
        let prod=1;
        for(let i=0;i<count;i++){
            prod=prod*rem;
        }
        sum+=prod;
    }
    return sum===num;
}

function printAllDivisors(num){
for(let i=1;i<=num;i++){
    if(num%i===0){
        console.log(i);
    }
}
}

function optimizedPrintAllDivisors(num){
    console.log("----optimised------")
    for(let i=1;i<=Math.sqrt(num);i++){
        if(num%i===0){
           console.log(i);
           let otherDivisor=num/i;
           if(i!==otherDivisor){
            console.log(otherDivisor);
           }
        }
    }
}

function GCD(num1,num2){
    let min=Math.min(num1,num2);
    console.log("-----GCD-----")
    let gcd=1;
    for(let i=1;i<=min;i++){
       if(num1%i===0 && num2%i===0){
        gcd=i
       }
    }
    return gcd;
}

function EuclideanAlgorithm(num1,num2){
    while(num1!==0 && num2!=0){
        if(num2>num1){
            num2=num2%num1;
        }
        else{
            num1=num1%num2;
        }
    }
    if(num1===0) return num2;
    return num1;
}

function primeNumber(num){
    let flag=1;
    for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i===0){
                flag=0;
            }
    }
    return flag===1;
}

function fibonacciIterative(n){
    let n1=0,n2=1,res=[];
    res.push(n1,n2);
    for(let i=2;i<=n;i++){

        n3=n1+n2;
        res.push(n3);
        n1=n2;
        n2=n3;


    }
    return res;
}

function fibonacci(n){
    if(n===0 || n===1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

function reverseRecursiveTwoPointer(ar,i,j){
    if(i>=j) return ar;
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;
    return reverseRecursiveTwoPointer(ar,i+1,j-1);
}

function reverseRecusiveUsingSinglePointer(ar,i){
    if(i>=parseInt(ar.length/2)) return ar;
    temp=ar[i];
    ar[i]=ar[ar.length-i-1];
    ar[ar.length-i-1]=temp;
    return reverseRecusiveUsingSinglePointer(ar,i+1);
}

function sumOfNNosRecusiveFunctional(n){
    if(n===0) return n;
    return n+sumOfNNosRecusiveFunctional(n-1);
}
function sumOfNNosRecusiveParametrized(i,n){
    if(i>n) return 0;
    return i+sumOfNNosRecusiveParametrized(i+1,n);
}


function MaximumSubArraySum(ar){
    let sum=0,maxSum=0,ansStart,ansEnd;
    for(let i=0;i<ar.length;i++){
        sum=0;
        for(let j=i;j<ar.length;j++){
            sum+=ar[j];
            if(sum>maxSum){
                maxSum=sum;
                ansStart=i;
                ansEnd=j;
            }
        }
    }
    return {maxSum,ansStart,ansEnd}
}
// console.log(checkIfSorted([1,2,3,4,5,5,0,6,7]))

// console.log(optimizedDailyTemp([30,60,90]))
// console.log(Denomination(3577))


// console.log(findElementThatAppearsOnce([1,1,2,3,3,5,5,5]))

// console.log(LeftRotateByDPlaces([2,4,6,8,10,12,14],10))
// console.log(LeftRotateByDPlacesOptimal([2,4,6,8,10,12,14],10))
// console.log(RightRotateByDPlaces([2,4,6,8,10,12,14,16],11))
// console.log(RightRotateByDPlacesOptimal([2,4,6,8,10,12,14,16],11))
// console.log(BestTimetoBuyAndSellStocks([7,1,5,3,6,4]))
// console.log(DailyTemp([77,77,77,77,77,41,77,41,41,77]));
// console.log(flattenArray([1,[2,3],[3,4,5],6,7,8,[9,[10,11],12],20,[21]]))
// console.log(twoSum([2,7,11,15],9))
// console.log(twoSumOptimal([1,5,6,7,8,11,15],9))
// console.log(BubbleSort([20,-5,-3,2,1,0,8,-239]))
// console.log(insertionSort([20,-5,-3,2,1,0,8,-239]))
// console.log(LargestAndSecondLargest([20,-5,-3,2,1,0,8,239,78]))

// console.log(intersection([1,1,2,2,2,3,4,5,5,7],[1,2,2,3,4,4,4,4,6,7,8]))
// console.log(intersectionOptimal([1,1,2,2,2,3,4,5,5,7],[1,2,2,3,4,4,4,4,6,7,8]))

// console.log(leaderInArray([10,22,12,3,0,6]))
// console.log(LeaderInArrayOptimal([10,22,12,3,0,6]))
// console.log(selectionSort([20,-5,-3,2,1,0,8,-239]))
console.log(LongestConsecutiveSequence([102,4,100,1,101,5,3,2,1,1]))
console.log(LongestConsecutiveSequenceBetter([102,4,100,1,101,5,3,2,1,1]))
console.log(LongestConsecutiveSequenceOptimal([102,4,100,1,101,5,3,2,1,1]))
console.log(union([1,1,2,2,2,3,4,5,5],[2,3,4,4,4,4,6,7,8]))
console.log(unionOptimal([1,1,2,2,2,3,4,5,5],[2,3,4,4,4,4,6,7,8]))
console.log(longestSubArrayOfSumK([1, 2, 3, 0, 1, 1, 1, 1, 4, 3, 2], 3));
console.log(longestSubArrayOfSumKBetter([1, 2, 3, 0, 1, 1, 1, 1, 4, 3, 2], 3));
console.log(moveZerosToEnd([1,0,3,0,2,0,7,0,0,0,0,8,0,0,9,0,10]))
console.log(moveZerosToEndOptimal([1,0,3,0,2,0,7,0,0,0,0,8,0,0,9,0,10]))
console.log(MajorityElement([-1,0,2,2,3,1,1,2,3,2,2,2,2,2,2]))
console.log(MajorityElementBetter([-1,0,2,2,3,1,1,2,3,2,2,2,2,2,2]))
console.log(MajorityElementUsingMoore([-1,0,2,2,3,1,1,2,3,2,2,2,2,2,2]))
console.log(MaximumSubArraySum([-2,-3,4,-1,-2,5,-3]));
console.log(MaximumSubArraySumOptimal([-2,-3,4,-1,-2,5,-3]));
console.log(QuickSort([20,5,-9,65,87,24,12,7,90,76,32,-21,6],0,12))
console.log(sort0s1s2s([2,1,1,1,1,0,2,0,0,0,0,0,2,0,1,0,1,1,1]))
console.log(sort0s1s2sOptimal([2,1,1,1,1,0,2,0,0,0,0,0,2,0,1,0,1,1,1]))
console.log(reverseNumber(9188))
console.log(ArmStrongNumber(1634))
printAllDivisors(36);
optimizedPrintAllDivisors(36);
console.log(GCD(20, 15));
console.log(EuclideanAlgorithm(20, 15));
console.log(primeNumber(137))

console.log(fibonacciIterative(14))
console.log(fibonacci(11))
console.log(sumOfNNosRecusiveFunctional(5));
console.log(sumOfNNosRecusiveParametrized(0,5));
console.log(reverseRecursiveTwoPointer([8,10,12,2,4,6],0,5))
console.log(reverseRecusiveUsingSinglePointer([8,10,12,2,4,6],0))

console.log(MaximumSubArraySum([-2,-3,4,-1,-2,5,-3]));
// console.log(MaximumSubArraySumOptimal([-2,-3,4,-1,-2,5,-3]));

// console.log(MaximumSubArraySumOptimal([-2,-3,-1]));

// console.log(MergeSort([20,5,-9,65,87,24,12,7,90,76,32,-21,6],0,12))
// console.log(reverse([8,10,12,2,4,6]))