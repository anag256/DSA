function anagram(str1,str2){
    let hashObj={};
    if(str1.length!==str2.length){
        return false;
    }

    for(let i=0;i<str1.length;i++){
        if(hashObj[str1[i]]){
            hashObj[str1[i]]++;
        }
        else{
            hashObj[str1[i]]=1;
        }
    }
    console.log(hashObj);
    for(let i=0;i<str2.length;i++){
        if(!hashObj[str2[i]]){
            return false
        }
        hashObj[str2[i]]--;
    }



    return true;
}
function checkIfPalindrome(str1){
    let i=0,j=str1.length-1;
    while(i<j){
        if(str1[i]!==str1[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}
function checkIfPalindromefn(str1,i,j){
    // let i=0,j=str1.length-1;
    while(i<j){
        if(str1[i]!==str1[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}


function countUniqueNos(ar){
   return  new Set([...ar]).size
}

function countPalidromes(str){

}

function reverseWords(str){
    ar=str.split(" ");
    return ar.reverse().join(" ");
}

function reverseWordsWithoutInbuiltFunctions(str){
    let arIndex=0,startIndex=0,ar=[];
    for(let i=0;i<str.length;i++){
        if(i===str.length-1){
            ar[arIndex]=str.substring(startIndex,i+1)
        }
        if(str[i]===" "){
            ar[arIndex]=str.substring(startIndex,i)
            arIndex++;
            startIndex=i+1;
        }
    }

    return ar.reverse().join(" ");
}

// function groupAngrams(ar){
//     let myMap=new Map();
//     for(let i=0;i<ar.length;i++){
//         let sortedKey=ar[i].split("").sort().join("");
//        if(myMap.has(sortedKey)){
//         myMap.set(sortedKey,[ar[i],...myMap.get(sortedKey)])
//        }
//        else{
//         myMap.set(sortedKey,[ar[i]]);
//        }
//     }
//     return [...myMap.values()]
// }
function groupAngrams(ar){
    let hashObj={};
    for(let i=0;i<ar.length;i++){
        let sortedKey=ar[i].split("").sort().join("");
       if(hashObj[sortedKey]){
        // myMap.set(sortedKey,[ar[i],...myMap.get(sortedKey)])
        hashObj[sortedKey]=[...hashObj[sortedKey],ar[i]]
       }
       else{
        hashObj[sortedKey]=[ar[i]]
       }
    }
    return [...Object.values(hashObj)]
}

function countPalidromes(str){
    let i=0,j=0,set=new Set(),count=0;
    while(i<str.length){

        if(checkIfPalindrome(str.substring(i,j+1)) ){
            set.add(str.substring(i,j+1));
            count++;
        }
        j++;
        if(j>str.length-1){
            i++;
            j=i;
        }
    }
    return [set.size,Array.from(set)]

}
console.log(anagram("jaya","ajay"));

console.log(countUniqueNos([1,1,2,3,3,3,4,4,5,5,6]));

console.log(checkIfPalindrome("racecar"))

console.log(reverseWords("quick brown fox jumps over the sky"))
console.log("Check")
console.log(reverseWordsWithoutInbuiltFunctions("quick brown fox jumps over the sky"))
console.log(countPalidromes("aabbba"));
console.log(groupAngrams(["eat","tea","tan","ate","nat","bat"]));