function  reverseWords(str){
    let ar= str.split("");
    ar.reverse();
   return ar.join("");
}
function  reverseWordsPreserveWhitspace(str){
    let ar=[],startIndex=0,arIndex=0,strSet=new Set(),i=0,j=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
            ar[arIndex]=str.substring(startIndex,i+1);

            startIndex=i+1;
            arIndex++;
        }
        if(i==str.length-1){
            ar[arIndex]=str.substring(startIndex,i+1)+" ";
        }
    }
    j=ar.length-1;
    while(i<j){
        temp=ar[i];
        ar[i]=ar[j];
        ar[j]=temp;
        i++;
        j--;
    }
    return ar.join("");
}

console.log(reverseWords("quick brown fox jumps over the sky"))
console.log(reverseWordsPreserveWhitspace("quick brown fox jumps over the sky"))