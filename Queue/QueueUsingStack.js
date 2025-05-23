//Implement Queue using 2 Stacks

var MyQueue=function(){
    this.items1=[];
    this.items2=[];
}

MyQueue.prototype.enQueue=function(ele){
    while(this.items1.length){
        this.items2.push(this.items1.pop());
    }
    this.items1.push(ele);
    while(this.items2.length){
        this.items1.push(this.items2.pop());
    }

}

MyQueue.prototype.Dequeue=function(){
    return this.items1.pop();
}

MyQueue.prototype.isEmpty=function(){
    return this.items1.length===0;
}
MyQueue.prototype.front=function(){
    return this.items1[this.items1.length-1];
}
MyQueue.prototype.rear=function(){
    return this.items1[0];
}

var queueu=new MyQueue();
queueu.enQueue(2);
queueu.enQueue(3);
queueu.enQueue(5);
queueu.Dequeue();
queueu.enQueue(8)
console.log("front/rear",queueu.front(), queueu.rear());




//Implement Queue using 2 Stacks

// var MyQueue=function(){
//     this.items1=[];
//     this.items2=[];
// }

// MyQueue.prototype.enQueue=function(ele){

//     this.items1.push(ele);

// }

// MyQueue.prototype.Dequeue=function(){
//     if(this.items2.length===0){
//         while(this.items1.length){
//             this.items2.push(this.items1.pop())
//         }
//     }

//     return this.items2.pop();
// }

// MyQueue.prototype.isEmpty=function(){
//     return this.items2.length===0;
// }
// MyQueue.prototype.front=function(){
//     if(this.items2.length===0){
//         while(this.items1.length){
//             this.items2.push(this.items1.pop())
//         }
//     }
//     return this.items2[this.items2.length-1];
// }
// MyQueue.prototype.rear=function(){
//     if(this.items2.length===0){
//         while(this.items1.length){
//             this.items2.push(this.items1.pop())
//         }
//     }
//     return this.items2[0];
// }

// var queueu=new MyQueue();
// queueu.enQueue(2);
// queueu.enQueue(3);
// queueu.enQueue(5);
// queueu.Dequeue();
// queueu.enQueue(8);
// console.log("front/rear",queueu.front(), queueu.rear());