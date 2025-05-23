class CircularQueue{
    constructor(k){
        this.size=k;
        this.front=0;
        this.rear=-1;
        this.queue=[];
        this.queueSize=0;
    }
    enQueue(data){
        if(this.queueSize===this.size){
            console.log("Queue is full");
            return;
        }

        this.rear=(this.rear+1) % this.size;
        this.queue[this.rear]=data;
        this.queueSize++;

    }

    deQueue(){
        if(this.queue.length===0){
            console.log("Queue is empty");
            return;
        }
        delete this.queue[this.front];
        this.front=(this.front+1) % this.size;
        this.queueSize--;
    }

    front(){
        if(this.queue.length===0){
            console.log("Queue is empty");
            return;
        }
        return this.queue[this.front];
    }
    rear(){
        if(this.queue.length===0){
            console.log("Queue is empty");
            return;
        }
        return this.queue[this.rear];
    }
    print(){
        for(let i=0;i<this.queue.length;i++){
            if(this.queue[i]){
                console.log(this.queue[i]);
            }

        }
    }
}

const que=new CircularQueue(3);
que.enQueue(3);
que.enQueue(4);
que.enQueue(5);
que.deQueue();
// que.enQueue(6);
que.print();