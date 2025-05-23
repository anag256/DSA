function PalindromicSubstrings(str){
    let countEven=0,countOdd=0,count=0,longest="";
    for(let i=0;i<str.length;i++){

        longest=countPalindromes(str,i,i,longest);
       longest= countPalindromes(str,i,i+1,longest);
    //    count+=countEven+countOdd;
    }

    return longest;
}

function countPalindromes(str,left,right,longest){
    let count=0;
    while((left>=0 && right<=str.length-1) && (str[left]===str[right])){
        if(right-left+1 > longest.length){
            longest=str.substring(left,right+1)
        }
            count++;
            left--;
            right++;

    }
    return longest;
}



console.log(PalindromicSubstrings("aaabbbaaababbd"))