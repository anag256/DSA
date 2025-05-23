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

    visit(url){
        const newNode=new Node(url);
        if(!this.current){
            this.current=newNode;
            return newNode.data;
        }
        this.current.next=newNode;
        newNode.prev=this.current;
        this.current=newNode;
        return newNode.data;
    }
    goBack(steps){
        if(!this.current.prev){
            return -1;
        }
        while(steps){
            if(this.current?.prev){this.current=this.current.prev;
            steps--;
            }
            else{
                return -1;
            }
        }
        return this.current.data;
    }
    goForward(steps){
        if(!this.current.next){
            return null;
        }
        while(steps){
            if(this.current?.next){this.current=this.current.next;
            steps--;
            }
            else{
                return -1;
            }
        }
        return this.current.data;
    }

}

const history=new BrowserDLLHistory();
console.log("visiting:", history.visit("https://www.google.com"));
console.log("visiting:", history.visit("https://www.Youtube.com"));
console.log("visiting", history.visit("https://www.Instagram.com"));
console.log("GoBack(2)", history.goBack(2));
console.log("GoForward(2)", history.goForward(2));