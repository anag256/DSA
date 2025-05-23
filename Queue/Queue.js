class Queue{
    constructor(){
        this.queue=[]
    }
    isEmpty(){
        return this.queue.length===0;
    }
    enqueue(element){
        this.queue.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.queue.shift();
    }

    front(){
        if(this.isEmpty()){
            return "No Elements"
        }
        return this.queue[0];
    }
    size(){
        return this.queue.length;
    }
    print(){
        let queueString="";
        for(let i=0;i<this.size();i++){
            queueString+=this.queue[i]+",";
        }
        console.log("Queue:",queueString);
    }
}

const myquqeue=new Queue();
myquqeue.enqueue(5);
myquqeue.enqueue(6);
myquqeue.enqueue(8);
myquqeue.dequeue();
myquqeue.dequeue();
myquqeue.dequeue();
myquqeue.print();