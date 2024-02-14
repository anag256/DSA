//ajay=>jaya
function anagram(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }
    let str1Map={};
    for(let element of str1){
        str1Map[element]=(str1Map[element]||0) + 1;
    }
    for(let element of str2){
       if(!str1Map[element]){
        return false;
       }

        str1Map[element]--;
        // if(str1Map[element]<0){
        //     return false
        // }


    }
    return true;
}

console.log(anagram('ajay','jaya'));