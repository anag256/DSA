function OnetoN(i,n){
    if(i>n) return;
    console.log(i);
    OnetoN(i+1,5);
}

function NtoOne(i,n){
    if(i==0) return;
    console.log(i);
    NtoOne(i-1,5);
}


function oneToNBacktrack(i,n){
    if(i==0) return;
    oneToNBacktrack(i-1,n);
    console.log(i);
}

function NtoOneBacktrack(i,n){
    if(i>n) return;
    NtoOneBacktrack(i+1,n);
    console.log(i);
}

//parameterized
function sumOfNnos(sum,n){
    if(n<=0) return console.log(sum);
    return sumOfNnos(sum+n,n-1);
}

//functional

function sumOfNnosFunctional(n){
    if(n<=0) return n;
    return n+sumOfNnosFunctional(n-1);
}

//factorial
function productOfNnosFunctional(n){
    if(n===1) return n;
    return n*productOfNnosFunctional(n-1);
}

function reverseArray(ar){
    let i=0,j=ar.length-1,temp;
    while(i<j){
        temp=ar[i];
        ar[i]=ar[j];
        ar[j]=temp;
        i++;
        j--;
    }
    return ar;
}

function reverseArrayBetter(ar){
    let i=0,temp;
    while(i<Math.round(ar.length/2)){
        temp=ar[i];
        ar[i]=ar[ar.length-1-i];
        ar[ar.length-1-i]=temp;
        i++;
    }
    return ar;
}


function reverseArrayRecursive(ar,i){
    if(i>=Math.round(ar.length/2)) return ar;
    temp=ar[i];
    ar[i]=ar[ar.length-1-i];
    ar[ar.length-1-i]=temp;
    return reverseArrayRecursive(ar,i+1)
}

function recursiveReverseUsingSinglePointer(ar,i){
    if(i>=Math.round(ar.length/2)) return ar;
    temp=ar[i];
    ar[i]=ar[ar.length-1-i];
    ar[ar.length-1-i]=temp;
    return recursiveReverseUsingSinglePointer(ar,i+1)
}

function isPalindrome(str,i){
    if(i>=Math.round(str.length/2)) return true;
    else if(str[i]!==str[str.length-1-i]) return false;
    return isPalindrome(str,i+1)
}

function binarySearchRecursive(ar,target,start,end){
    let mid=parseInt((start+end)/2);
    if(ar[mid]===target){
        return mid;
    }
    else if(target<ar[mid]){
       return binarySearchRecursive(ar,target,start,mid-1);
    }
    else{
      return  binarySearchRecursive(ar,target,mid+1,end);
    }
}

function fibonacci(n){
    let num1=0,num2=1,res=[],temp;
    res.push(num1,num2);
    for(let i=2;i<=n;i++){
        temp=num2;
        num2=num1+num2;
        num1=temp;
        res.push(num2);
    }
return res;
}

function fibRecursive(n){
    if(n===0 || n===1) return n;
    return fibRecursive(n-1) + fibRecursive(n-2);
}
//
OnetoN(1,5);
console.log("--------jjdjjd----")
NtoOne(5,5);


console.log("----Bactrack1");
oneToNBacktrack(5,5);


console.log("----Bactrack2");
NtoOneBacktrack(1,5);


sumOfNnos(0,5)


console.log("functional",sumOfNnosFunctional(5))
console.log("functionalProd",productOfNnosFunctional(5))

console.log("reverse",reverseArray([5,8,9,20,89,-9,12]));

console.log("reverseRecursive",reverseArrayRecursive([5,8,9,20,89,-9,12,-2],0,7));

console.log("reverseBetter",reverseArrayBetter([5,8,9,20,89,-9,12]));
console.log("reverseBetter",reverseArrayBetter([5,8,9]));
console.log("reverseBetterrecursive",recursiveReverseUsingSinglePointer([5,8,9,20,89,-9,12,-90],0));

console.log("isPalindrome",isPalindrome("awva",0))

console.log(binarySearchRecursive([-5, 20, 56, 89, 90, 99, 101], 90,0,6));

console.log(fibonacci(20));
console.log(fibRecursive(8));