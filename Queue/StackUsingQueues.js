//implement stack using queues

var myStack=function(){
    this.q1=[];
    this.q2=[];
}

myStack.prototype.push=function(ele){
    while(this.q1.length){
        this.q2.push(this.q1.shift());
    }
    this.q1.push(ele);
    while(this.q2.length){
        this.q1.push(this.q2.shift());
    }
}

myStack.prototype.pop=function(){
    return this.q1.shift();
}

myStack.prototype.isEmpty=function(){
    return this.q1.length===0;
}
myStack.prototype.top=function(){
    return this.q1[0];
}

var stack=new myStack();
stack.push(2);
stack.push(3);
stack.push(5);
stack.pop();
console.log("top",stack.top());
