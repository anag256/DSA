class CircularQueue{
    constructor(k){
        this.size=k;
        this.length=0;
        this.front=0;
        this.rear=-1;
        this.queue=[];
    }

    enQueue(element){
        if(this.size === this.length) return;
        this.length++;
        this.rear=(this.rear+1)%this.size;
        this.queue[this.rear]=element;
    }

    deQueue(){
        if(this.length ===0) return;
        this.length--;

       delete this.queue[this.front];
       this.front=(this.front+1)%this.size;
    }
    getFront(){
        return this.queue[this.front];
    }
    getRear(){
        return  this.queue[this.rear];
    }
}

const circQueue=new CircularQueue(3);
circQueue.enQueue(1);
circQueue.enQueue(2);
circQueue.enQueue(4);
circQueue.deQueue();
circQueue.enQueue(5);
circQueue.deQueue();
circQueue.enQueue(6);
console.log("front",circQueue.getFront())
console.log("rear",circQueue.getRear())