class Stack{
    constructor(){
        this.stack=[];
    }
    push(element){
        this.stack.push(element);
    }
    pop(){
        if(this.isEmpty()) return "Stack is empty";
        return this.stack.pop();
    }
    peek(){
        if(this.isEmpty()) return "Stack is empty";
        return this.stack[this.stack.length-1]
    }
    isEmpty(){
       return this.stack.length===0
    }
    print(){
        for(let i=this.stack.length-1;i>=0;i--){
            console.log(this.stack[i]);
        }
    }
}


const stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.print();
// console.log(stack.peek())