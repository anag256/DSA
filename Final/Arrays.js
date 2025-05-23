function denomination(amount){
    let currencyAr=[2000,1000,500,200,50,20,5,1];
    let obj={};

    for(let i=0;i<currencyAr.length;i++){
       let noOfCurrencies=amount/currencyAr[i]
       obj[currencyAr[i]]=parseInt(noOfCurrencies);
       amount=amount%currencyAr[i];
    }
    return obj;
}

function reverseArray(ar,i,j){
    while(i<j){
        temp=ar[i];
        ar[i]=ar[j];
        ar[j]=temp;
        i++;
        j--;
    }
    return ar;
}

function findTheNumberThatAppearsOnceAndOtherTwice(ar){
    let obj={};
    for(let i=0;i<ar.length;i++){
        if(!obj[ar[i]]){
            obj[ar[i]]=1
        }
        else{
            obj[ar[i]]++;
        }
    }
    for(let key in obj){
        if(obj[key]===1) return key;
    }
    return -1;
}

//1^0 = 1 n^ 0=n
// 2^2=0
function findTheNumberThatAppearsOnceAndOtherTwiceUsingXOR(ar){
   let xor=0;
   for(let i=0;i<ar.length;i++){
    xor=xor^ar[i];
   }
   return xor;
}

function DailyTemperatures(ar){
    let stack=[],res=Array.from({length:ar.length}).fill(0);
    for(let i=0;i<ar.length;i++){
        let topOfStack=stack[stack.length-1];
        while(ar[i]>ar[topOfStack]){

            res[topOfStack]=i-topOfStack;
            stack.pop();
            topOfStack=stack[stack.length-1]
        }


        stack.push(i);
    }
    return res;
}


function LeftRotateByDPlaces(ar,d){
    let temp=[],k=ar.length;
    d=d%k;
    for(let i=0;i<d;i++){
        temp.push(ar[i]);
    }
    for(let i=d;i<=ar.length;i++){
        ar[i-d]=ar[i];
    }
    for(let i=k-d;i<=k-1;i++){
        ar[i]=temp[i-(k-d)];
    }
    return ar;
}

function LeftRotateByDPlacesOptimal(ar,d){
    let k=ar.length;
    d=d%k;
    ar=reverseArray(ar,0,d-1);
    ar=reverseArray(ar,d,ar.length-1);
    ar=reverseArray(ar,0,ar.length-1);
    return ar;
}

function RightRotateByDPlaces(ar,d){
    let k=ar.length,temp=[];
    d=d%k;

    for(let i=k-d;i<=ar.length-1;i++){
        temp.push(ar[i]);
    }
    for(let i=k-d-1;i>=0;i--){
        ar[i+d]=ar[i];
    }
    for(let i=0;i<d;i++){
        ar[i]=temp[i];
    }
    return ar;
}

function RightRotateByDPlacesOptimal(ar,d){
    let k=ar.length;
    d=d%k;
    ar=reverseArray(ar,0,k-1);
    ar=reverseArray(ar,0,d-1);
    ar=reverseArray(ar,d,k-1);
    return ar;
}

function MaxConsecutiveOnes(ar){
    let maxConsec=0,startIndex,finalStartIndex,endIndex,count=0;
    for(let i=0;i<ar.length;i++){
        if(count==0){
            startIndex=i;
        }
        if(ar[i]===1){

            count++;
            if(maxConsec<count){
                maxConsec=count;
                endIndex=i;
                finalStartIndex=startIndex;
            }
        }
        else{
            count=0;
        }
    }
    return {ar,finalStartIndex,endIndex}
}

function moveZeroesToEnd(ar){
    let i=0,j=0;
    while(j<ar.length){
        if(ar[j]===0){
            j++;
        }
        else{
            temp=ar[i];
            ar[i]=ar[j];
            ar[j]=temp;
            i++;
            j++;
        }

    }
    return ar;
}

function removeDuplicates(ar){
    return Array.from(new Set(ar));
}

function removeDuplicatesOptimal(ar){
    let i=0,j=0;
    while(j<ar.length){
        if(ar[j]>ar[i]){
            temp=ar[i+1]
            ar[i+1]=ar[j]
            ar[j]=temp
            i++;
            j++;
        }
        else{
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
        else if(ar[i]<largest && ar[i]>secondLargest){
            secondLargest=ar[i];
        }


    }
    return {largest,secondLargest}
}

function Union(ar1,ar2){
    let ar=[],i=0,set=new Set();
    for(let i=0;i<ar1.length;i++){
        set.add(ar1[i]);
    }
    for(let i=0;i<ar2.length;i++){
        set.add(ar2[i]);
    }
    for(let key of set){
        ar[i]=key
        i++;
    }
    return ar;
}

function UnionOptimal(ar1,ar2){
    let i=0,j=0,stack=[];
    while(i< ar1.length && j<ar2.length){
        if(ar1[i]<=ar2[j]){
            if(ar1[i]>stack[stack.length-1] || stack.length===0){
                stack.push(ar1[i]);

            }
            i++;
        }
        else
        {
            if(ar2[j]>stack[stack.length-1] || stack.length===0){
                stack.push(ar2[j]);
            }
            j++;
        }
    }
    //leftovers
    while(i<ar1.length){
        if(ar1[i]>stack[stack.length-1] || stack.length===0){
            stack.push(ar1[i]);

        }
        i++;
    }
    while(j<ar2.length){
        if(ar2[j]>stack[stack.length-1] || stack.length===0){
            stack.push(ar2[j]);
        }
        j++;
    }

    return stack;
}

function intersection(ar1,ar2){
    let visited=Array.from({length:ar2.length}).fill(0),inter=[];
    for(let i=0;i<ar1.length;i++){
        for(let j=0;j<ar2.length;j++){
            if(ar1[i]===ar2[j] && visited[j]===0){
                inter.push(ar1[i]);
                visited[j]=1;
                break;
            }
        }
    }
    return inter;
}

function intersectionOptimal(ar1,ar2){
        let i=0,j=0,inter=[];
        while(i<ar1.length && j<ar2.length){
            if(ar1[i]<ar2[j]){
                i++;
            }
            else if(ar1[i]>ar2[j]){
                j++;
            }
            else{
                //equal case
                inter.push(ar1[i]);
                i++;
                j++;
            }
        }
        return inter;
}

function TwoSum(ar,target){
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
            if(ar[i]+ar[j]===target){
                return {i,j};
            }
        }
    }
}
function TwoSumOptimal(ar,target){
    let hashObj={};
    for(let i=0;i<ar.length;i++){
        if(hashObj[target-ar[i]]){
            return {i:hashObj[target-ar[i]]-1,j:i}
        }
        hashObj[ar[i]]=i+1;
    }

}

function BestTimeToBuyAndSellStocks(ar){
    let min=0,max=0,cost=0,profit=0;
    for(let i=1;i<ar.length;i++){
        cost=ar[i]-ar[min];
        if(cost>profit){
            profit=cost;
            max=i;
        }
        else{
            if(ar[i]<ar[min]){
                min=i;

            }
        }

    }
    return {profit,min,max};
}

function LeaderInArray(ar){
    let leaders=[],flag=0;
    for(let i=0;i<ar.length;i++){
        flag=0;
        for(let j=i+1;j<ar.length;j++){
            if(ar[j]>ar[i]){
                flag=1;
                break;
            }
        }
        if(flag===0){
            leaders.push(ar[i]);
        }
    }
    return leaders;
}
function LeaderInArrayOptimal(ar){
    let max=0,leaders=[];
    for(let i=ar.length-1;i>=0;i--){
        if(ar[i]>max){
            leaders.push(ar[i]);
            max=ar[i];
        }


    }
    return leaders;
}

function LinearSearch(ar,target){
    for(let i=0;i<ar.length;i++){
        if(ar[i]===target){
            return i;
        }
    }
    return -1;
}
function LongestConsecutiveSequence(ar){
let x,count=0,maxLength=0,startIndex,endIndex,finalStartIndex;
for(let i=0;i<ar.length;i++){
    count=1;
    x=ar[i];
    startIndex=i;
    while(LinearSearch(ar,x+1)!==-1){
        console.log("x",x)
        count++;

        if(count>maxLength){
            maxLength=count;

            finalStartIndex=startIndex;
            endIndex=LinearSearch(ar,x);
            console.log("maxl",maxLength,endIndex)
        }
        x++;
    }
}
return {maxLength,startIndex,endIndex}
}

function longestSubArrayOfSumK(ar,k){
    let max=0,sum=0,res=[];
    for(let i=0;i<ar.length;i++){
        sum=0;
        for(let j=i;j<ar.length;j++){

            sum+=ar[j];
            if(sum===k){
                if(j-i>max){
                    max=j-i;
                    res=[i,j];
                }
            }


        }
    }
    return {res,max:max+1};
}
//optimal for positives+negatives
function longestSubArrayOfSumKBetter(ar,k){
    let prefixSum=0,maxLength=0,length=0,hashObj={},startIndex,endIndex,finalStartIndex;
    for(let i=0;i<ar.length;i++){
        prefixSum+=ar[i];
        if(prefixSum!==k){
            finalStartIndex=i;
        }
        if(prefixSum===k){
            length=i+1;
            // maxLength=Math.max(length,maxLength);
            if(length>maxLength){
                maxLength=length;
                endIndex=i;
                startIndex=finalStartIndex;
            }
        }
        if(hashObj[prefixSum-k] || hashObj[prefixSum]==0){
            length=i-hashObj[prefixSum-k];
            // maxLength=Math.max(length,maxLength);
            if(length>maxLength){
                maxLength=length;
                endIndex=i;
                startIndex=hashObj[prefixSum-k]+1;
            }
        }
        if(!hashObj[prefixSum]){
            hashObj[prefixSum]=i;
        }

    }
    return {maxLength,startIndex,endIndex};
}


function LongestConsecutiveSequenceBetter(ar){

    let lastSmaller=0,count=0,maxLength=0;
    ar=ar.sort((a,b)=>a-b);
    for(let i=0;i<ar.length;i++){
        if(lastSmaller===ar[i]-1){
            count++;
            maxLength=Math.max(count,maxLength);
            lastSmaller=ar[i];
        }
        else if( lastSmaller===ar[i]){
            lastSmaller=ar[i];
        }
        else{
            count=1;
            lastSmaller=ar[i];
        }
    }
    return maxLength;

}

function LongestConsecutiveSequenceOptimal(ar){
    let set=new Set(ar),i=0,count=0,maxLength=0;
    for(let val of set){
        if(!set.has(val-1)){
            count=1;
            i=1;
            while(set.has(val+i)){
                count++;
                maxLength=Math.max(maxLength,count);
                i++;
            }
        }
    }
    return maxLength;

}
// [102,4,100,1,101,3,2,1,1]
//{102,4,100,1,101,3,2,1}



function MajorityElement(ar){
    let hashObj={};
    for(let i=0;i<ar.length;i++){
        if(!hashObj[ar[i]]){
            hashObj[ar[i]]=1
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
    let count=0,x,count2=0;
    for(let i=0;i<ar.length;i++){
        if(count==0){
            x=ar[i];
            count++;
        }
        else if(ar[i]===x){
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
    if(count2>parseInt(ar.length/2)){
        return x;
    }
    return -1;

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
//kadane's algo - if sum is negative,ignore

function MaximumSubArraySumOptimal(ar){
    let sum=0,maxSum=0,ansStart=0,ansEnd=0;

    for(let i=0;i<ar.length;i++){
        if(sum===0){
            ansStart=i;
        }
        sum+=ar[i];

        if(sum>0){
            if(sum>maxSum){
                maxSum=sum;
                ansEnd=i;
            }
        }
        if(sum<0){
            sum=0;

        }
    }
    return {maxSum,ansStart,ansEnd}
}

function sortedSquares(ar){

    let i=0;j=ar.length-1,res=[];
    while(i<=j){
        if(Math.abs(ar[i])>=Math.abs(ar[j])){
            res.unshift(ar[i]*ar[i]);
            i++;
        }
        else{
            res.unshift(ar[j]*ar[j]);
            j--;
        }
    }
    return res;
}

function swap(ar,start,end){
    temp=ar[start];
    ar[start]=ar[end];
    ar[end]=temp;
    return ar;
}
//ar[0.....low-1]-0
//[low....mid-1]-1
//[mid.....high]-unsorted
//[high+1.....length]-2
function sort0s1s2sOptimal(ar){
    let low=0,mid=0,high=ar.length-1;
    while(mid<=high){
        if(ar[mid]===0){
            ar=swap(ar,mid,low);
            low++;
            mid++;
        }
        else if(ar[mid]==1){
            mid++;
        }
        else{
            ar=swap(ar,mid,high);
            high--;
        }
    }
    return ar;
}

function longestSubArrayOfSumKOptimal(ar,k){
        let left=0,right=0,sum=ar[0],maxLength=0;
        while(right<ar.length){
            right++;
            if(right<ar.length) sum+=ar[right];
            while( left<=right && sum>k){
                sum-=ar[left];
                left++;
            }
            if(sum==k){
                maxLength=Math.max(maxLength,right-left+1);
            }
        }
        return maxLength;
}

function RearrangeElementsBySign(ar){
    let pos=[],neg=[]
    for(let i=0;i<ar.length;i++){
        if(ar[i]>0){
            pos.push(ar[i]);
        }
        else{
            neg.push(ar[i]);
        }
    }

    for(let i=0;i<parseInt(ar.length/2);i++){
        ar[2*i]=pos[i];
        ar[2*i+1]=neg[i];
    }
    return ar;
}

function RearrangeElementsBySignOptimal(ar){
    let ans=[],posIndex=0,negIndex=1;
    for(let i=0;i<ar.length;i++){
        if(ar[i]>0){
            ans[posIndex]=ar[i];
            posIndex+=2;
        }
        else{
            ans[negIndex]=ar[i];
            negIndex+=2;
        }

    }
    return ans;
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
    if(pos.length>neg.length){
        let index=2*neg.length;
        for(let i=0;i<neg.length;i++){
            ar[2*i]=pos[i];
            ar[2*i+1]=neg[i];
        }
        for(let i=neg.length;i<pos.length;i++){
            ar[index]=pos[i];
            index++;
        }
    }
    else{
        let index=2*pos.length;
        for(let i=0;i<pos.length;i++){
            ar[2*i]=pos[i];
            ar[2*i+1]=neg[i];
        }
        for(let i=pos.length;i<neg.length;i++){
            ar[index]=neg[i];
            index++;
        }
    }

    return ar;
}


console.log(denomination(4527));



console.log(findTheNumberThatAppearsOnceAndOtherTwice([1,1,2,2,3,5,5]))
console.log(findTheNumberThatAppearsOnceAndOtherTwiceUsingXOR([1,1,2,2,3,5,5]))

console.log("daily temp:",DailyTemperatures([55,38,53,81,61,93,97,32,43,78]));

console.log(LeftRotateByDPlaces([2,5,1,89,56,45,23,12],11))
console.log(LeftRotateByDPlacesOptimal([2,5,1,89,56,45,23,12],11))
console.log(RightRotateByDPlaces([2,5,1,89,56,45,23,12],11))
console.log(RightRotateByDPlacesOptimal([2,5,1,89,56,45,23,12],11))

console.log(MaxConsecutiveOnes([1,1,0,1,1,1,0,1,1]))

console.log(moveZeroesToEnd([2,0,2,3,0,44,0,0,5,4,5,0]))

console.log(removeDuplicates([1,1,2,2,2,3,3,4]))
console.log(removeDuplicatesOptimal([1,1,2,2,2,3,3,4]))

console.log("Second Largest",secondLargest([-2,-5,-1,-89,-56,-45,-23,-12]));


console.log(Union([1,1,2,3,3,3,4,5,5,6],[2,3,5,7,9,12]))
console.log(UnionOptimal([1,1,2,3,3,3,4,5,5,6],[2,3,5,7,9,12]))

console.log("intersection",intersection([1,1,2,3,3,3,4,5,5,6],[2,3,3,5,7,9,12]))
console.log("intersectionOptimal",intersectionOptimal([1,1,2,3,3,3,4,5,5,6],[2,3,3,5,7,9,12]))

console.log(TwoSum([2,4,8,16,24,5],24))
console.log(TwoSumOptimal([2,4,8,16,24,5],24))

console.log(BestTimeToBuyAndSellStocks([7,1,5,3,6,4]))

console.log(LeaderInArray([10,22,12,3,0,6]))

console.log(LeaderInArrayOptimal([10,22,12,3,0,6]))

console.log("LongestConsecutiveSequence",LongestConsecutiveSequence([102,4,100,1,101,3,2,1,1]))
console.log("LongestConsecutiveSequenceBetter",LongestConsecutiveSequenceBetter([102,4,100,1,101,3,2,1,1]))
console.log("LongestConsecutiveOptimal",LongestConsecutiveSequenceOptimal([102,4,100,1,101,3,2,1,1]))


console.log(longestSubArrayOfSumK([1, 2, 3, 1, 1, 1, 1, 4, 3, 2], 3))
console.log(longestSubArrayOfSumKBetter([1, 2, 0,0, 0, 0, 0, 0, 3, 2], 3))

console.log(longestSubArrayOfSumKOptimal([1, 2, 0,0, 0, 0, 0, 0, 3, 2], 3))

console.log(MajorityElement([-1,0,8,2,3,1,1,2,3,2,2,2,2,2,2,2,2,2,2,1,1,1,1]))
// console.log(MajorityElementBetter([-1,0,8,2,3,1,1,2,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1]))
console.log(MajorityElementUsingMoore([-1,0,8,2,3,1,1,2,3,2,2,2,2,2,2,2,2,2,2,1,1,1,1]))

console.log(MaximumSubArraySum([-2,-3,4,-1,-2,5,-3]));
console.log(MaximumSubArraySumOptimal([-2,-3,4,-1,-2,5,-3]));

console.log(sortedSquares([-4,-1,0,3,10]))

console.log(sort0s1s2sOptimal([2,1,1,1,1,0,2,0,0,0,0,0,2,0,1,0,1,1,1]))
console.log(longestSubArrayOfSumKOptimal([1, 2, 0,0, 0, 0, 0, 0, 3, 2], 3))


console.log(RearrangeElementsBySign([3, 1, -2, -5, 2, -4]));
console.log(RearrangeElementsBySignOptimal([3, 1, -2, -5, 2, -4]));

console.log(RearrangeElementsBySignOdd([3, 1, -2,9, -5, 2, -4,8]));