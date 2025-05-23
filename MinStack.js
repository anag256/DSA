
var MinStack = function() {
    this.stack=[];
    this.minStack=[];

};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
   if(this.stack.length<=0){
    this.minStack.push(val);
    this.stack.push(val);
   }
   else{

    this.stack.push(val);
    let topOfStack=this.minStack[this.minStack.length-1];
    if(val<=topOfStack){
        this.minStack.push(val);
    }
   }


};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const poppedEl=this.stack.pop();
    let topOfMinStack=this.minStack[this.minStack.length-1];
    if(poppedEl===topOfMinStack){
        this.minStack.pop();
    }
    return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let topOfStack=this.stack[this.stack.length-1];
    return topOfStack;

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let topOfStack=this.minStack[this.minStack.length-1];
    return topOfStack;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */