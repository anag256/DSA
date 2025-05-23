const ValidParenthesis=(str)=>{
    let stack=[];
    for(let i=0;i<str.length;i++){
        if(str[i]=== "(" || str[i]==="[" || str[i]==="{" ){
            stack.push(str[i]);
        }
       else{
           let topOfStack=stack[stack.length-1];
           if((str[i]==="}" && topOfStack ==="{") || (str[i]==="]" && topOfStack ==="[") ||(str[i]===")" && topOfStack==="(")){
            stack.pop();
           }
           else{
            return false;
           }
        }
    }

    return stack.length===0
}


console.log(ValidParenthesis("()"));