// this is just for understanding not optimal

function reverseWords(str){
    let stack=[],res="";
    let strAr=str.split(" ");
    for(let word of strAr){
        stack.push(word);
    }

    while(stack.length){
        let current=stack.pop();
        if(current){
            res=res+ " " +current;
        }
    }
    return res.trim();
}

console.log(reverseWords("    quick brown    fox jumps over the    sky   "));