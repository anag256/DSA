class CircularQueue{
    constructor(k){
        this.front=0;
        this.rear=-1;
        this.size=k;
        this.length=0;
        this.items=[];
    }
    enQueue(value){
        if(this.length===this.size) return false;
        this.rear=(this.rear+1)%this.size;
         this.items[this.rear]=value;
         this.length++;
         console.log("item",this.items)
    }
    deQueue(){
        this.items[this.front]=null
        this.front=(this.front+1)%this.size;
        console.log("item",this.items)
        this.length--;
    }
    getFront(){
        return this.items[this.front];
    }
    getRear(){
        return this.items[this.rear];
    }

}


var obj=new CircularQueue(3);
obj.enQueue(5);
obj.enQueue(6);
obj.enQueue(8);
obj.deQueue();
obj.enQueue(9);
obj.deQueue();
obj.enQueue(10);
obj.deQueue();
obj.enQueue(12);
obj.deQueue();

console.log(obj.getFront(),obj.getRear())
