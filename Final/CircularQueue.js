class CircularQueue{
    constructor(size){
        this.front=0;
        this.rear=-1;
        this.queue=[];
        this.size=size;
        this.length=0;
    }

    enQueue(element){
        if(this.length===this.size){
            return "Queue is full"
        }
        this.rear=(this.rear+1)%this.size;
        this.queue[this.rear]=element;
        this.length++;
        console.log("rear",this.rear,this.queue[this.rear])
    }

    deQueue(){
    if(this.length===0){
            return "Queue is empty"
        }
        delete this.queue[this.front]
        this.front=(this.front+1)%this.size;
        this.length--;

    }
    getFront(){
        if(this.length===0){
            return "Queue is empty"
        }
        return this.queue[this.front]
    }
    getRear(){
        if(this.length===0){
            return "Queue is empty"
        }
        return this.queue[this.rear]
    }

}

let obj=new CircularQueue(3);
obj.enQueue(5);
obj.enQueue(6);
obj.enQueue(8);
obj.deQueue();
obj.enQueue(9);
console.log(obj.getFront(),obj.getRear())