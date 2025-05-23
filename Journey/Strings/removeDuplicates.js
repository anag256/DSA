//brute
//tc - o(2n)
//sc - o(2n)
function removeDuplicates(str){
   let strSet=new Set(),strArray=[];
   for(let i=0;i<str.length;i++){
    strSet.add(str[i]);

   }

   for(str of strSet){
    strArray.push(str);
   }
   return strArray.join("");
}


function removeDuplicatesPreserveWhitspace(str){
    let ar=[],startIndex=0,arIndex=0,strSet=new Set();
    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
            ar[arIndex]=str.substring(startIndex,i);

            startIndex=i+1;
            arIndex++;
        }
        if(i==str.length-1){
            ar[arIndex]=str.substring(startIndex,i+1);
        }
    }
    console.log(ar);
    return ar.join("");
}

console.log(removeDuplicates("quick brown fox jumps over the sky"))
console.log(removeDuplicatesPreserveWhitspace("quick brown fox jumps over the sky"))