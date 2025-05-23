function PalindromicSubstrings(str){
    let count=0,oddCnt=0,evenCnt=0;

    for(let i=0;i<str.length;i++){
        //odd
        oddCnt=countPalindromes(str,i,i);

        //even
        evenCnt=countPalindromes(str,i,i+1);
        count+=oddCnt+evenCnt;
    }
    return count;
}

function countPalindromes(str,left,right){
    let cnt=0;
    while(left>=0 && right<=str.length-1 && str[left]===str[right]){
        cnt++;
        left--;
        right++;

    }
    return cnt;
}

console.log(PalindromicSubstrings("aaababbd"))