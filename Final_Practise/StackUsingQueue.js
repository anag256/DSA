var StackUsingQueue = function(){
     this.queue1=[];
     this.queue2=[];
}

StackUsingQueue.prototype.push=function(element){
    while(this.queue1.length){
        this.queue2.push(this.queue1.pop())
    }
    this.queue1.push(element);
    while(this.queue2.length){
        this.queue1.push(this.queue2.pop())
    }
}

StackUsingQueue.prototype.pop=function(){
    this.queue1.shift();
}

StackUsingQueue.prototype.top=function(){
    return this.queue1[0];
}



var stack=new StackUsingQueue();
stack.push(2);
stack.push(3);
stack.push(5);
stack.push(6);
stack.pop();
console.log("top",stack.top());
