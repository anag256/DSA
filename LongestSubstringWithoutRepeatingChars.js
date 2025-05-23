function LongestSubstringWithoutRepeatingChars(str){
    let left=0,right=0,len=0,maxLength=0,hashObj={},start=0,end=0;
    while(right<str.length){
        if((hashObj[str[right]] || hashObj[str[right]]===0) && hashObj[str[right]]>=left){
            left=hashObj[str[right]]+1;
            hashObj[str[right]]=right;
        }
        else{
            len=right-left+1;
            if(len>maxLength){
                maxLength=len;
                start=left;
                end=right;
            }
            hashObj[str[right]]=right;
            right=right+1;
        }

    }
    return [maxLength,start,end]
}



console.log(LongestSubstringWithoutRepeatingChars("cdabzabcd"));