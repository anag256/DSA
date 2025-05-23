function swap(ar,i,j){
    let temp;
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;
}

function OnetoN(i,n){
    if(i>n) return;
    console.log(i);
    OnetoN(i+1,n)
}

function NtoOne(i,n){
    if(i===0) return;
    console.log(i);
    NtoOne(i-1,n)
}

function OnetoNBacktrack(i,n){
    if(i===0) return;
    OnetoNBacktrack(i-1,n);
    console.log(i);

}

function NtoOneBacktrack(i,n){
    if(i>n) return;
    NtoOneBacktrack(i+1,n);
    console.log(i);
}

function reverseArray(ar){
    let i=0,j=ar.length-1;

    while(i<j){
        swap(ar,i,j);
        i++;
        j--;
    }
    return ar;
}

function reverseArraySinglePointer(ar){
    let i=0;

    while(i<((ar.length-1)/2)){
        swap(ar,i,ar.length-i-1);
        i++;

    }
    return ar;
}

function recursiveReverse(ar,i,j){
    if(i>=j) return ar;
    swap(ar,i,j);
    return recursiveReverse(ar,i+1,j-1);
}

function recursiveReverseUsingSinglePointer(ar,i){
    if(i>= ((ar.length-1)/2)) return ar;
    swap(ar,i,ar.length-1-i);
    return recursiveReverseUsingSinglePointer(ar,i+1);
}

function binarySearchRecursive(ar,target,low,high){
    let mid=parseInt((low+high)/2);
    if(low>high) return -1;
    if(ar[mid]===target) return mid;
    if(target<ar[mid]) return binarySearchRecursive(ar,target,low,mid-1)
    else  return binarySearchRecursive(ar,target,mid+1,high)
}

function fibonacci(n){
    let n1=0,n2=1,res=[],temp;
    res.push(n1,n2);
    for(let i=1;i<n;i++){
        temp=n1;
        n1=n2;
        n2=temp+n2;
        res.push(n2);
    }
return res;
}

function fibRecursive(n){
    if(n==0 || n==1) return n;
    return fibRecursive(n-1) +fibRecursive(n-2);
}

function stringPalindrome(str,i){
    if(i>((str.length-1)/2)) return true;
    if(str[i] !== str[str.length-i-1]) return false;
    return stringPalindrome(str,i+1);
}

function sumOfNnos(n){
    if(n===0) return 0;
    return n+sumOfNnos(n-1);
}

function sumOfNnosParam(sum,i,n){
    if(i>n) return sum;
    return sumOfNnosParam(sum+i,i+1,n)
}
OnetoN(1,5);

console.log("-------------")


NtoOne(5,5)

console.log("-----Backtrack--------")


OnetoNBacktrack(5,5);

console.log("----------")

NtoOneBacktrack(1,5);

console.log(reverseArray([2,6,8,9,2,45,90]))
console.log(reverseArraySinglePointer([2,6,8,9,2,45]))

console.log(recursiveReverse([2,6,8,9,2,45,90],0,6))

console.log(recursiveReverseUsingSinglePointer([2,6,8,9,2,45],0))

console.log(binarySearchRecursive([2,4,6,8,10,12,14],12,0,6))


console.log(fibonacci(10))

console.log(fibRecursive(6))

console.log(stringPalindrome("MADA",0))

console.log(sumOfNnos(5))
console.log(sumOfNnosParam(0,0,5))