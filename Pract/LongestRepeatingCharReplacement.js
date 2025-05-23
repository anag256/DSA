function LongestRepeatingCharacterReplacement(str,k){
    let maxFreq=0,length=0,longestLen=0,hashObj={},left=0,right=0,newStr="",isRightIncremented=true;

    while(right<str.length){

        if(isRightIncremented){
            if(hashObj[str[right]]){
                hashObj[str[right]]++;
            }
            else{
                hashObj[str[right]]=1;
            }
        }

        maxFreq=Math.max(...Object.values(hashObj));
        length=right-left+1;
        if(length-maxFreq <= k){
            if(length>longestLen){
                longestLen=length;
                newStr=str.substring(left,right+1);
            }
            right++;
            isRightIncremented=true;
        }
        else{
            hashObj[str[left]]--;
            left++;
            isRightIncremented=false;
        }
    }
    return [longestLen,newStr];
}


console.log(LongestRepeatingCharacterReplacement("AAABBCCD",2))