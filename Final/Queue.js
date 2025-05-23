class Queue{
    constructor(){
        this.queue=[];
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        if(this.isEmpty()) return "queue is empty";
        this.queue.shift();
    }
    front(){
        if(this.isEmpty()) return "queue is empty";
        return this.queue[0];
    }
    isEmpty(){
        return this.queue.length===0;
    }
    print(){
        for(let i=0;i<this.queue.length;i++){
            console.log(this.queue[i]);
        }
    }
}


const myquqeue=new Queue();
myquqeue.enqueue(5);
myquqeue.enqueue(6);
myquqeue.enqueue(8);
myquqeue.dequeue();

myquqeue.print();