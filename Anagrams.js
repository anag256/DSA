
// https://leetcode.com/problems/find-all-anagrams-in-a-string/description/

function putInHash(str){
    let hashObj={};
    for(let key in str){
        if(!hashObj[str[key]]){
            hashObj[str[key]]=1;
        }
        else{
            hashObj[str[key]]++;
        }

    }
    return hashObj;
}
function Anagrams(str1,str2){
    let hashObj={},hashObjCheck={},res=[],flag=true;
    hashObjCheck=putInHash(str2)
    let k=str2.length;
    let i=0,j=0;
    while(j<str1.length){

        if(j>= k) {
            hashObj[str1[i]]--;
            if(hashObj[str1[i]]<=0) delete hashObj[str1[i]];
            i++;

        }

        if(!hashObj[str1[j]]){
            hashObj[str1[j]]=1;
        }
        else{
            hashObj[str1[j]]++;
        }

        //compare hashes
        if(j>=k-1){
            flag=true;
            for(let key in hashObjCheck){

                if(!(hashObj[key] && hashObj[key]===hashObjCheck[key])){
                    flag=false;
                }


            }

            if(flag) res.push(i);
        }
        j++;

    }
    return res;

}
console.log(Anagrams("cbaebabacd","abc"))

