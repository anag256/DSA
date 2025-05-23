function LCS(str1,str2){
    let ar=[]
    for(let i=0;i<str1.length;i++){
        for(let j=0;j<str1.length;j++){
            ar.push(str1.substring(i,j+1))
        }
    }
    return ar;
}

console.log(LCS("abcd","aecd"));