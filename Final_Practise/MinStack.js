var MinStack=function(){
    this.stack=[];
    this.minStack=[];
}

MinStack.prototype.push=function(ele){
    if(this.stack.length===0){
        this.stack.push(ele);
        this.minStack.push(ele);
    }
    else{
        this.stack.push(ele);
        let topOfMinStack=this.minStack[this.minStack.length-1];
        if(ele<=topOfMinStack){
            this.minStack.push(ele);
        }
    }

}

MinStack.prototype.pop=function(){
    let topOfMinStack=this.minStack[this.minStack.length-1];
   const poppedEl= this.stack.pop();
   if(poppedEl===topOfMinStack){
    this.minStack.pop();
   }
}

MinStack.prototype.top=function(){
    if(this.stack.length==0) return -1;
    return this.stack[this.stack.length-1];
}

MinStack.prototype.findMin=function(){
    return this.minStack[this.minStack.length-1];
}


const minstack=new MinStack();
minstack.push(6);
minstack.push(10);

minstack.push(2);
minstack.push(5);

minstack.push(-3);
minstack.push(8);
minstack.pop();
minstack.pop();
console.log("min:",minstack.findMin());