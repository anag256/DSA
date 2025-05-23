function ValidParenthesis(str) {
  let stack = [] ;

  for (let bracket of str) {
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
      console.log("stack",stack[stack.length-1])
    } else if (
      (bracket === ")" && stack[stack.length-1] === "(") ||
      (bracket === "}" && stack[stack.length-1] === "{") ||
      (bracket === "]" && stack[stack.length-1] === "[")
    ) {
        console.log("stack after",stack)
        stack.pop();
    }
    else{
        return false;
    }
  }
  return stack.length===0;
}

console.log(ValidParenthesis("([{}])"));
