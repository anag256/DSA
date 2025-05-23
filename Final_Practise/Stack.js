class Stack{
    constructor(){
        this.stk=[];

    }

    push(data){
        this.stk.push(data);

    }
    isEmpty(){
        return this.stk.length===0;
    }
    pop(){
        if(this.isEmpty()) return -1;
        return this.stk.pop();
    }
    peek(){
      return  this.stk[this.stk.length-1];
    }

    print(){
        for(let i=this.stk.length-1;i>=0;i--){
            console.log(this.stk[i]);
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
console.log("peek",stack.peek())