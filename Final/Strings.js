function anagram(str1,str2){
    let hashObj={};
    if(str1.length!==str2.length) return false;
    for(let i=0;i<str1.length;i++){
        if(!hashObj[str1[i]]){
            hashObj[str1[i]]=1;
        }
        else{
            hashObj[str1[i]]++;
        }
    }
    for(let i=0;i<str2.length;i++){
        if(!hashObj[str2[i]]) return false;
        hashObj[str2[i]]--;
    }

    return Object.values(hashObj).every(val=>val===0);
}

function groupAngrams(strAr){
    let map=new Map(),res=[];
    for(let i=0;i<strAr.length;i++){
        let key=strAr[i].split("").sort().join("");
        let valFromMap=map.get(key);
        if(valFromMap){
            map.set(key,[...valFromMap,strAr[i]]);
        }
       else{
        map.set(key,[strAr[i]]);
       }
    }
    for(let [key,value] of map){
        res.push(value);
    }
    return res;
}

function reverseWords(str){
    let str2="";
    for(let i=str.length-1;i>=0;i--){
      str2+=str[i];
    }
    return str2.split(" ").reverse().join(" ");
}
function reverseWords(str){
    let ar=[],startIndex=0,str2="";
    for(let i=0;i<str.length;i++){
       if(str[i]===" "){
            ar.push(str.substring(startIndex,i));
            startIndex=i+1;
       }
       if(i===str.length-1){
        ar.push(str.substring(startIndex,i+1));
       }
    }
    ar.reverse();
    for(let i=0;i<ar.length;i++){
        str2+=ar[i];
        str2+=" ";
    }
    return str2;

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
function isPalidrome(str1){
    let i=0,j=str1.length-1;
   while(i<j){
    if(str1[i]!==str1[j]) return false;
    i++;
    j--;
   }
   return true;
}

function countPalidromes(str){
  let i=0,j=0,set=new Set(),longest="";
  for(let i=0;i<str.length;i++){
    for(let j=i;j<str.length;j++){
        if(isPalidrome(str.substring(i,j+1))){
            set.add(str.substring(i,j+1));

            if(str.substring(i,j+1).length>longest.length){
                longest=str.substring(i,j+1);
            }
        }
    }
  }
  return {palindromes:[...set],longest}
}

console.log(anagram('ajaya','jaya'));

console.log(groupAngrams(["eat","tea","tan","ate","nat","bat"]));

console.log(reverseWords("quick brown fox jumps over the sky"))
console.log(longestCommonPrefix(["flower","flow","flight"]))

console.log(countPalidromes("aabbba"));

console.log("isPalindroe",isPalidrome("madame"))
// console.log(longest);
// console.log(removeDuplicates("quick brown fox jumps over the sky"))