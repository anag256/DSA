


function MinimunWindowSubstring(s,t){
    let minLen=Number.MAX_SAFE_INTEGER,m=s.length,n=t.length,count=0,left=0,right=0,hashObj={},startIndex=-1;

    for(let i=0;i<n;i++){
        if(!hashObj[t[i]]) hashObj[t[i]]=1;
        else hashObj[t[i]]++;
    }
    while(right<m){
        if(!hashObj[s[right]]){
            hashObj[s[right]]=-1;
        }
        else if(hashObj[s[right]] > 0){
            count=count+1;
            hashObj[s[right]]--;
        }

        else {
            hashObj[s[right]]--;
        }
        while(count===n){
            if(right-left+1 < minLen){
                minLen=right-left+1;
                startIndex=left;
            }

            hashObj[s[left]]++;
            if(hashObj[s[left]]>0){
                count=count-1;
            }

            left++;



        }
        right++;
    }
    return startIndex===-1 ? "" : s.substr(startIndex,minLen);

}
console.log(MinimunWindowSubstring("ddaaabbca","abc"))