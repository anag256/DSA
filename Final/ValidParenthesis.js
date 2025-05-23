function ValidParenthesis(str){
    let stack=[],topOfStack;
    for(let i=0;i<str.length;i++){

        if(str[i]==="(" ||  str[i]==="{" || str[i]==="["){
            stack.push(str[i]);

        }

        else if((str[i]==")" && stack[stack.length-1] =="(" )|| (str[i]=="]" && stack[stack.length-1] =="[") || (str[i]=="}" && stack[stack.length-1] =="{")){

           stack.pop();
           console.log("inside",stack)
        }
        else{
            return false;
        }
    }

        console.log(stack)
    return stack.length===0;
}

console.log(ValidParenthesis("([{}])"));