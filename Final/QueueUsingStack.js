var QueueUsingStacks=function(){
    this.stack1=[];
    this.stack2=[];
}

QueueUsingStacks.prototype.enQueue=function(element){
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop())
    }
    this.stack1.push(element);
    while(this.stack2.length){
        this.stack1.push(this.stack2.pop())
    }
}

QueueUsingStacks.prototype.deQueue=function(){
    if(this.stack1.length===0) return "queue is empty";
    this.stack1.pop();
}

QueueUsingStacks.prototype.getFront=function(){
    if(this.stack1.length===0) return "queue is empty";
    return this.stack1[this.stack1.length-1];
}
QueueUsingStacks.prototype.getRear=function(){
    if(this.stack1.length===0) return "queue is empty";
    return this.stack1[0];
}

var queueu=new QueueUsingStacks();
queueu.enQueue(2);
queueu.enQueue(3);
queueu.enQueue(5);
queueu.deQueue();
queueu.enQueue(8)
console.log("front/rear",queueu.getFront(), queueu.getRear());