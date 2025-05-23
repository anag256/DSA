
function LongestPalindromicSubstring(str){
    let longest="";

    for(let i=0;i<str.length;i++){
        //odd
       longest=countPalindromes(str,i,i,longest);

        //even
        longest=countPalindromes(str,i,i+1,longest);

    }
    return longest;
}

function countPalindromes(str,left,right,longest){
    let len=0;
    while(left>=0 && right<=str.length-1 && str[left]===str[right]){
       len=right-left+1;
       if(len>longest.length){
        longest=str.substring(left,right+1);
       }
        left--;
        right++;

    }
    return longest;
}

console.log("Longest:",LongestPalindromicSubstring("babad"))