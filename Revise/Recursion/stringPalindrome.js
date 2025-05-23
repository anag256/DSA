//tc o(n/2)
function palindrome(str,i){
    if(i>=parseInt(str.length/2)){
        return true;
    }
    if(str[i] !==str[str.length-i-1]){
        return false;
    }
   return palindrome(str,i+1);
}
console.log(palindrome("MRTM",0))