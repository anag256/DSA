class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;
    }
}


class BrowserDLLHistory{

    constructor(){
        this.current=null;
    }
    goBack(steps){
        let curr=this.current;
        while(steps>0){
            if(curr?.prev){
                curr=curr.prev;
                steps--;
            }
            else return  `History does not exist for ${steps}`;
        }
        this.current=curr;
        return curr.data;
    }
    goForward(steps){
        let curr=this.current;
        while(steps>0){
            if(curr?.next) {
                curr=curr.next;
                steps--;
            }
            else return  `History does not exist for ${steps}`;
        }
        this.current=curr;
        return curr.data;
    }
    visit(url){
        const newNode=new Node(url);
        if(!this.current) {
            this.current=newNode;
            return this.current.data;
        }
        this.current.next=newNode;
        newNode.prev=this.current;
        this.current=newNode;
        return this.current.data;
    }
}


const history=new BrowserDLLHistory();
console.log("visiting:", history.visit("https://www.google.com"));
console.log("visiting:", history.visit("https://www.Youtube.com"));
console.log("visiting", history.visit("https://www.Instagram.com"));

console.log("GoBack(2)", history.goBack(2));
console.log("GoForward(1)", history.goForward(1));