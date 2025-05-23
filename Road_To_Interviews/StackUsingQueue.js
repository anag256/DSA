var StackUsingQueues=function (){
    this.queue1=[];
    this.queue2=[];

}
//push,pop
StackUsingQueues.prototype.push=function(data){
   while(this.queue1.length){
    this.queue2.push(this.queue1.shift());
   }
   this.queue1.push(data);
   while(this.queue2.length){
    this.queue1.push(this.queue2.shift())
   }
}

StackUsingQueues.prototype.pop=function(){
    if(this.queue1.length==0){
        console.log("Stack is empty");
        return;
    }
    return this.queue1.shift();
}

StackUsingQueues.prototype.top=function(){
    if(this.queue1.length==0){
        console.log("Stack is empty");
        return;
    }
    return this.queue1[this.queue1.length-1];
}

StackUsingQueues.prototype.print=function(){
    for(let i=0;i<=this.queue1.length-1;i++){
        console.log(this.queue1[i]);
    }
}

const stack=new StackUsingQueues();
stack.push(3)
stack.push(4)
stack.push(5);
stack.pop();
stack.print();