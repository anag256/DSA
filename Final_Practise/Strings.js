
function anagram(str1,str2){
    let hashObj={};
    if(str1.length !== str2.length) return false;
    for(let i=0;i<str1.length;i++){
        if(hashObj[str1[i]]){
            hashObj[str1[i]]++;
        }
        else{
            hashObj[str1[i]]=1;
        }
    }

    for(let i=0;i<str2.length;i++){
        hashObj[str2[i]]--;
        if(hashObj[str2[i]]<0) return false;
    }
    return true;
}

function groupAngrams(strAr){
    let map=new Map();
    for(let i=0;i<strAr.length;i++){
        let key=strAr[i].split("").sort().join("");
        if(map.has(key)){
           map.set(key,[...map.get(key),strAr[i]]);
        }
        else{
            map.set(key,[strAr[i]])
        }
    }
    return Array.from(map.values());
}

function reverseWords(str){
    return str.split(" ").reverse().join(" ");
}

function longestCommonPrefix(strAr){
    let prefix=strAr[0];
   for(let i=1;i<strAr.length;i++){
        while(!strAr[i].startsWith(prefix)){
            prefix=prefix.slice(0,-1)
        }
   }
   return prefix;

}

console.log(anagram('ajay','jaya'));

console.log(groupAngrams(["eat","tea","tan","ate","nat","bat"]));

console.log(reverseWords("quick brown fox jumps over the sky"))

console.log(longestCommonPrefix(["flower","flow","flight"]))