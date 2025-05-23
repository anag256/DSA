class Queue{
    constructor(){
        this.queue=[]
    }

    enQueue(data){
        this.queue.push(data);
    }
    deQueue(){
        if(this.isEmpty()) return;
        this.queue.pop();
    }
    isEmpty(){
        return this.queue.length===0;
    }
    front(){
        return  this.queue[0]
    }
    print(){
        for(let i=0;i<this.queue.length;i++){
            console.log(this.queue[i]);
        }
    }
}

const myquqeue=new Queue();
myquqeue.enQueue(5);
myquqeue.enQueue(6);
myquqeue.enQueue(8);
// myquqeue.deQueue();
console.log("front",myquqeue.front())
myquqeue.print();