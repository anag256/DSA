var MyCircularQueue=function(k){
    this.queue=[];
    this.size=k;
}
MyCircularQueue.prototype.enQueue=function(value){

    if(this.queue.length===this.size) return false;
     this.queue.push(value);
     return true;
}

MyCircularQueue.prototype.deQueue=function(){
    if(this.queue.length===0) return false;
     this.queue.shift();
     return true
}

MyCircularQueue.prototype.front=function(){
    if(this.queue.length===0) return -1;
    return this.queue[0]
}

MyCircularQueue.prototype.rear=function(){
    if(this.queue.length===0) return -1;
    return this.queue[this.queue.length-1]
}
MyCircularQueue.prototype.isEmpty=function(){
   return this.queue.length===0;
}
MyCircularQueue.prototype.isFull=function(){
    return this.queue.length===this.size;
 }

var obj=new MyCircularQueue(3);
obj.enQueue(5);
obj.enQueue(6);
obj.enQueue(8);
obj.deQueue();
obj.enQueue(9);

console.log(obj.front(),obj.rear())