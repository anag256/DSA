function isPalindrome(str,i){
    if(i>str.length/2) return true;
    if(str[i]!=str[str.length-i-1]) return false;
    return isPalindrome(str,i+1);
}
console.log(isPalindrome('madam',0))