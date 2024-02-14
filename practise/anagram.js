function anagram(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }
    let str1Map={};
    for(letter of str1){
        str1Map[letter]=(str1Map[letter]||0)+1;
    }

    for(letter of str2){
        if(!str1Map[letter]){
            return false;
        }
        str1Map[letter]--;
    }
    return true;

}

console.log(anagram('ajay','jaya'));