var QueueUsingStack=function(){
    this.stack1=[];
    this.stack2=[];
}

QueueUsingStack.prototype.enQueue=function(element){
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(element);
    while(this.stack2.length){
        this.stack1.push(this.stack2.pop())
    }
}


QueueUsingStack.prototype.deQueue=function(){
    if(this.isEmpty()) return;
    return this.stack1.pop();
}

QueueUsingStack.prototype.isEmpty=function(){
    return this.stack1.length===0;
}

QueueUsingStack.prototype.getRear=function(){
    return this.stack1[0]
}

QueueUsingStack.prototype.getFront=function(){
    return this.stack1[this.stack1.length-1];
}



const myueue=new QueueUsingStack();
myueue.enQueue(2);
myueue.enQueue(3);
myueue.enQueue(5);
myueue.enQueue(8);
myueue.deQueue();
console.log("front/rear",myueue.getFront(), myueue.getRear());