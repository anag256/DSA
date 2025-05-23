var MyCircularQueue=function(k){
    this.size=k;
    this.queue=[];
}

MyCircularQueue.prototype.enQueue=function(data){
    if(this.getLength() === this.size) {
        console.log("Queue is full");
        return;
    }
    return this.queue.push(data);
}

MyCircularQueue.prototype.getLength=function(){
    return this.queue.length;
}

MyCircularQueue.prototype.deQueue=function(){
    if(this.getLength()===0) {
        console.log("Queue is empty");
        return;
    }
    return this.queue.shift();
}
MyCircularQueue.prototype.print=function(){
    for(let i=0;i<this.queue.length;i++){
        console.log(this.queue[i]);
    }
}

const circQueue=new MyCircularQueue(3);
circQueue.enQueue(3);
circQueue.enQueue(4);
circQueue.enQueue(5);
circQueue.enQueue(7);
circQueue.deQueue();
circQueue.enQueue(7);
// circQueue.deQueue();
// circQueue.deQueue();
// circQueue.deQueue();
circQueue.print();
