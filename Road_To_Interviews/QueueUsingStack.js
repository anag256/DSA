var QueueUsingStack=function(){
    this.stack1=[];
    this.stack2=[];
}

QueueUsingStack.prototype.enQueue=function(data){
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop())
    }
    this.stack1.push(data);
    while(this.stack2.length){
        this.stack1.push(this.stack2.pop())
    }
}

QueueUsingStack.prototype.DeQueue=function(){
    if(this.stack1.length===0){
        console.log("Queue is empty");
        return;
    }
    return this.stack1.pop();
}

QueueUsingStack.prototype.front=function(){
    if(this.stack1.length===0){
        console.log("Queue is empty");
        return;
    }
    return this.stack1[this.stack1.length-1];
}

QueueUsingStack.prototype.rear=function(){
    if(this.stack1.length===0){
        console.log("Queue is empty");
        return;
    }
    return this.stack1[0];
}

const queue=new QueueUsingStack();
queue.enQueue(3)
queue.enQueue(4)
queue.enQueue(5)
queue.enQueue(6)
console.log("removing",queue.DeQueue());
console.log("front", queue.front())
console.log("rear", queue.rear())