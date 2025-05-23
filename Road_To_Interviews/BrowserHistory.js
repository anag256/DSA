class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class BrowserHistory{
    constructor(){
        this.head=null;
        this.curr=null;
    }

    visit(url){
        const newNode=new Node(url);
        if(!this.head){
            this.head=newNode;
            this.curr=newNode;
            return this.head.data;
        }
        this.curr.next=newNode;
        newNode.prev=this.curr;
        this.curr=newNode;
        return this.curr.data;
    }

    goBack(steps){
        while(steps){
            if(this.curr?.prev){
            this.curr=this.curr?.prev;
            steps--;
            }
            else{
                console.log("No More back possible")
                return;
            }
        }
        return this.curr.data;
    }

    goForward(steps){
        while(steps){
            if(this.curr?.next){
                this.curr=this.curr.next;
                steps--;
            }
            else{
                console.log("No more forward possible");
                return;
            }

        }
        return this.curr.data;
    }
}

const browserHistory=new BrowserHistory();
console.log("Visited:" ,browserHistory.visit("https://www.anag.com"));
console.log("Visited:" ,browserHistory.visit("https://www.google.com"));
console.log("Visited:" ,browserHistory.visit("https://www.youtube.com"));
console.log("Visited:" ,browserHistory.visit("https://www.instagram.com"));

console.log(browserHistory.goBack(3));

console.log(browserHistory.goForward(3));