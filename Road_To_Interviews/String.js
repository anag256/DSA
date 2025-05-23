function anagram(str1,str2){
    let hashObj={};
   if(str1.length!==str2.length){
    return false;
   }
   for(let i=0;i<str1.length;i++){
    if(hashObj[str1[i]]){
        hashObj[str1[i]]++
    }
    else{
        hashObj[str1[i]]=1;
    }
   }

   for(let i=0;i<str2.length;i++){
   if(!hashObj[str2[i]]) return false;
   hashObj[str2[i]]--;
   }
   return true;
}

function countUniqueNos(ar){
    let i=0,j=0,count=1,max=0;
    while(j<ar.length){
        if(ar[j]>ar[i]){
            count++;
            j++;
            i++;
        }
        else{
            i++;
            j=i+1;
        }
        max=Math.max(count,max)
    }
    return max;
}

function reverseString(str){
    let str2="";
    for(let i=0;i<str.length;i++){
        str2=str[i]+str2;
    }
    return str2;
}

function checkIfPalindrome(str){
    return reverseString(str)===str;
}

function reverseWords(str){
    let strAr=str.split(" ");
    return strAr.reverse().join(" ");
}

function customSplit(str,delimiter){
    let ar=[],startIndex=0;

    for(let i=0;i<str.length;i++){
        if(i===str.length-1){
            ar.push(str.substring(startIndex,i+1));
        }
        if(str[i]===delimiter){
            ar.push(str.substring(startIndex,i));
            startIndex=i+1;
        }

    }
    return ar;
}

function longestCommonPrefix(strAr){
   let prefix=strAr[0];
   for(let i=1;i<strAr.length;i++){
    while(!strAr[i].startsWith(prefix)){

        prefix=prefix.slice(0,-1);
    }
   }
   return prefix;

}

function groupAngrams(strAr){
    let map=new Map(),res=[];

    for(let i=0;i<strAr.length;i++){
        const sortedstr=strAr[i].split("").sort().join("");
        if(map.has(sortedstr)){
            const res=map.get(sortedstr);
            map.set(sortedstr,[...res,strAr[i]])
        }
        else{
            map.set(sortedstr,[strAr[i]])
        }
    }
   for(let [key,val] of map){
    res.push(val);
   }
    return res;
}

console.log(anagram("jaya","ajay"));

console.log(countUniqueNos([1,1,2,3,3,3,4,4,5,5,6]));

console.log(checkIfPalindrome("madam"))

console.log(reverseWords("quick brown fox jumps over the sky"))

console.log(customSplit("quick-brown-fox-jumps-over-the-sky","-"))
console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(countPalidromes("aabbba"));
console.log(groupAngrams(["eat","tea","tan","ate","nat","bat"]));