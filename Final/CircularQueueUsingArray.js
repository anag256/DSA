var MyCircularQueue=function(k){
    this.size=k;
    this.queue=[];
}

MyCircularQueue.prototype.enQueue=function(element){
    if(this.size===this.queue.length){
        return "Queue is full"
    }
    this.queue.push(element);
}
MyCircularQueue.prototype.deQueue=function(){
    if(this.queue.length===0){
        return "Queue is empty"
    }
    this.queue.shift();
}

MyCircularQueue.prototype.front=function(){
    if(this.queue.length===0){
        return "Queue is empty"
    }
    return this.queue[0];
}

MyCircularQueue.prototype.rear=function(){
    if(this.queue.length===0){
        return "Queue is empty"
    }
    return this.queue[this.queue.length-1];
}

var obj=new MyCircularQueue(3);
obj.enQueue(5);
obj.enQueue(6);
obj.enQueue(8);
obj.deQueue();
obj.enQueue(9);

console.log(obj.front(),obj.rear())
