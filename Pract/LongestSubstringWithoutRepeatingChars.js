function LongestSubstringWithoutRepeatingChars(str){
    let left=0,right=0,hashObj={},longestStr="",longest=Number.MIN_SAFE_INTEGER;
    while(right<str.length){
        console.log(hashObj)
        if((hashObj[str[right]] || hashObj[str[right]]===0) && hashObj[str[right]]>=left){
            left=hashObj[str[right]]+1;


        }
        else{
            hashObj[str[right]]=right;
            if((right-left +1) > longest){
                longest=right-left+1;
                longestStr=str.substring(left,right+1);
            }
            right++;
        }

    }
    return [longest,longestStr]

}





console.log(LongestSubstringWithoutRepeatingChars("cdabzabcd"));