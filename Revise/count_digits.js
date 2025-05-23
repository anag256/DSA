//tc - o(log10(n))
/// when there are divisions involved in iterations, time complexity will always be logarithmic
function count_digits(n){
    let rem,count=0;
    while(n>0){
        rem=n%10;
        n=parseInt(n/10);
        count++;
    }
    return count;
}

function count_digits_using_log(n){
   return parseInt(Math.log10(n)+1)
}


function reverseNo(n){
    let rem,count=0,rev=0;
    while(n>0){
        rem=n%10;
        n=parseInt(n/10);
       rev=(rev*10)+rem;
    }
    return rev;
}

function isPalindrome(n){
    let rem,count=0,rev=0,original=n;
    while(n>0){
        rem=n%10;
        n=parseInt(n/10);
       rev=(rev*10)+rem;
    }
    return original===rev;
}

console.log(count_digits(12377484));
console.log(count_digits_using_log(12377));
console.log(reverseNo(12377));
console.log(isPalindrome(1221));