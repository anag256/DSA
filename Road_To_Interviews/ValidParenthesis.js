function ValidParenthesis(str){
    let stack=[];
    for(let i=0;i<str.length;i++){
        if(str[i]==="(" || str[i]==="[" || str[i]==="{"){
            stack.push(str[i]);
        }
        else if(str[i]===")" || str[i]==="]" || str[i]==="}"){
            let poppedEl=stack.pop();
            if((str[i]==="}" && poppedEl!=="{") || (str[i]===")" && poppedEl!=="(") ||(str[i]==="]" && poppedEl!=="[")){
                return false
            }
        }
        else{
            return false;
        }
    }
    return stack.length===0;
}


console.log(ValidParenthesis("([{()}])"));