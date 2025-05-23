class Stack{
    constructor(){
        this.stack=[];
    }
    push(element){
        this.stack.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.stack.pop();
    }
    isEmpty(){
        return this.stack.length===0
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.stack[this.size()-1]
    }
    size(){
        return this.stack.length;
    }
    print(){
        for(let i=this.size()-1;i>=0;i--){
            console.log(this.stack[i])
        }
    }
}

const stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
// stack.pop();
stack.print();
// console.log(stack.peek())