function OneToN(i,n){
    if(i>n) return;
    console.log(i);
    OneToN(i+1,n);
}

function OneToNBacktrack(i,n){
    if(i<=0) return;
    OneToNBacktrack(i-1,n);
    console.log(i);
}


function NtoOne(i,n){
    if(i<=0) return;
    console.log(i);
    NtoOne(i-1,n);
}

function NtoOneBacktrack(i,n){
    if(i>n) return ;
    NtoOneBacktrack(i+1,n);
    console.log(i);
}

function factorial(n){
    if(n===1) return 1;
    return n*factorial(n-1);
}
function factorialParam(n,prod){
  if(n===1) return 1;
  return factorialParam(n-1,prod*n);
}

function fibonacci(n){
    let n1=0,n2=1,temp,res=[];
    res.push(n1,n2);
    for(let i=1;i<=n-2;i++){
        temp=n2;
        n2=n1+n2;
        n1=temp;
        res.push(n2);
    }
    return res;

}
function fibonacciRecursive(n){
    if(n===0 || n===1) return n;
    return fibonacciRecursive(n-1)+fibonacciRecursive(n-2);
}

function reverseAr(ar){
    let i=0,j=ar.length-1;
    while(i<j){
       temp=ar[i];
       ar[i]=ar[j];
       ar[j]=temp;
       i++;
       j--;
    }
    return ar;
}



function recursiveReverse(ar,i,j){
    if(i>=j) return ar;
    temp=ar[i];
    ar[i]=ar[j];
    ar[j]=temp;
    return recursiveReverse(ar,i+1,j-1);
}

function reverseArUsingSinglePointer(ar){
    let i=0,n=ar.length-1;

    while(i<=parseInt(n/2)){
       temp=ar[i];
       ar[i]=ar[n-i];
       ar[n-i]=temp;
       i++;

    }
    return ar;
}
function recursiveReverseUsingSinglePointer(ar,i){
    let n=ar.length-1;
    if(i>parseInt(n/2)) return ar;
    temp=ar[i];
    ar[i]=ar[n-i];
    ar[n-i]=temp;
    return recursiveReverseUsingSinglePointer(ar,i+1);
}

function BinarySearchUsingRecursion(ar,target,start,end){
    let mid=parseInt((start+end)/2);
   if(target===ar[mid]) return mid;
   if(target>ar[mid]){
    return BinarySearchUsingRecursion(ar,target,mid+1,end);
   }
   else{
   return  BinarySearchUsingRecursion(ar,target,start,mid-1);
   }
}
function stringPalindrome(str,i){
    let n=str.length-1;
    if(i>parseInt(n/2)) return true;
    if(str[i]!==str[n-i]) return false;
    return stringPalindrome(str,i+1);
}
OneToN(1,5);

console.log("--------")
OneToNBacktrack(5,5);


console.log("--------")

NtoOne(5,5);

console.log("--------")

NtoOneBacktrack(1,5);

console.log(factorial(5));

console.log("param",factorial(5,1));


console.log(fibonacci(10));

console.log(fibonacciRecursive(6));


console.log(reverseAr([1,2,3,5,6]))

console.log(recursiveReverse([1,2,3,5,6],0,4))

console.log(reverseArUsingSinglePointer([1,2,3,5,6]))
console.log(recursiveReverseUsingSinglePointer([1,2,3,5,6,7],0))


console.log(BinarySearchUsingRecursion([1,2,3,3,3,4,5,6,9],4,0,8))

console.log(stringPalindrome("MADAM",0))