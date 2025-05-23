class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}


class BrowserHistoryDLL{
    constructor(){
        this.curr=null;
        this.head=null;
    }
    visit(url){
        const newNode=new Node(url);
       if(!this.curr){
        this.curr=newNode;
        return this.curr.data;
       }
      this.curr.next=newNode;
      newNode.prev=this.curr;
      this.curr=newNode;
       return this.curr.data;
    }

    goBack(steps){
        while(steps){
            if(this.curr.prev){
                this.curr=this.curr.prev;
                steps--;
            }
            else{
                return "Cannot go back anymore"
            }

        }
        return this.curr.data;
    }

    goForward(steps){
        while(steps){
            if(this.curr.next){
                this.curr=this.curr.next;
                steps--;
            }
            else{
                return "Cannot go forward anymore"
            }

        }
        return this.curr.data;
    }
}


const browserHistoryDLL=new BrowserHistoryDLL();

console.log("visiting:",browserHistoryDLL.visit("www.google.com"));
console.log("visiting:",browserHistoryDLL.visit("www.instagram.com"))
console.log("visiting:",browserHistoryDLL.visit("www.firefox.com"))
console.log("visiting:",browserHistoryDLL.visit("www.twitter.com"))
console.log("visiting:",browserHistoryDLL.visit("www.videotube.com"))

console.log("goBack",browserHistoryDLL.goBack(2));

console.log("goForward",browserHistoryDLL.goForward(3));