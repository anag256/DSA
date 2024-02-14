function countTheNoOfDigitsInANumber(num){
    let rem;
    let originalNum=num;
    let count=0;
    let reversedNumber="";
    while(num>0){
        rem=num%10;
        num=Math.floor(num/10);
        ++count;
        // reversedNumber=reversedNumber+rem;
        reversedNumber=(reversedNumber*10)+rem;
    }
    console.log("count is",count)
    console.log("reversed is",reversedNumber)
    console.log("isPalindrome",reversedNumber==originalNum)
}
function countUsingLog(num){
 return parseInt (Math.log10(num) +1)
}
countTheNoOfDigitsInANumber(10400);

 console.log(countUsingLog(332234));