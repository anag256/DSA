class Stack{
    constructor(){
        this.stack=[];

    }

    push(data){
        this.stack.push(data);

    }

   pop(){
    if(this.isEmpty()){
        console.log("Stack is empty");
        return;
    }
    return this.stack.pop();
   }

   isEmpty(){
    return this.stack.length===0;
   }

   Peek(){
    if(this.isEmpty()){
        console.log("Stack is empty");
        return;
    }
    return this.stack[this.stack.length-1];
   }
   print(){
    if(this.isEmpty()){
        console.log("Stack is empty");
        return;
    }
    for(let i=this.stack.length-1;i>=0;i--){
        console.log(this.stack[i]);
    }
   }

}

const stck=new Stack();
stck.push(3);
stck.push(4);
stck.push(5);
console.log("peek",stck.Peek());
stck.print();