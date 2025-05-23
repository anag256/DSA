var StackUsingQueues=function(){
    this.queue1=[];
    this.queue2=[];

}
StackUsingQueues.prototype.push=function(element){
    while(this.queue1.length){
        this.queue2.push(this.queue1.pop())
    }
    this.queue1.push(element);
    while(this.queue2.length){
        this.queue1.push(this.queue2.pop())
    }
}

StackUsingQueues.prototype.pop=function(){
    if(this.queue1.length===0) return "queue is empty";
    this.queue1.shift();
}

StackUsingQueues.prototype.top=function(){
    if(this.queue1.length===0) return "queue is empty";
    return this.queue1[0]
}



var stack=new StackUsingQueues();
stack.push(2);
stack.push(3);
stack.push(5);

stack.pop();
console.log("top",stack.top());