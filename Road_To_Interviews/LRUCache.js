

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
        this.tail=null;
    }

    moveToFront(tabId){
        if(!this.head.next){
            return;
        }
        if(this.head.data.tabId===tabId){
            return;
        }
        let curr=this.head,prev=null;
       while(curr?.data?.tabId!==tabId){
        prev=curr;
        curr=curr.next;
       }
       if(curr===this.tail){
        this.tail=prev;

       }
       prev.next=curr.next;
       curr.next=this.head;
       this.head=curr;


    }

    addToFront(tabId,data){
        const newNode=new Node({tabId,data});
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
            this.size=1;
            return;
        }
        newNode.next=this.head;
        this.head=newNode;
        this.size++;
    }
    removeLast(){
        let curr=this.head,prev;
        while(curr.next){
            prev=curr;
           curr= curr.next;
        }
        prev.next=null;
        this.size--;
        return curr.data.tabId;

    }

    printList(){
        let curr=this.head;
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }
    }
}
class LRUCache{
    constructor(capacity){
        this.capacity=capacity;
        this.cache={};
        this.linklist=new LinkedList();
    }
    get(tabId){
        if(!this.cache[tabId]){
            return -1;
        }

        //moveToFront
        this.linklist.moveToFront(tabId);
        return this.cache[tabId];
    }

    put(tabId,data){

        if(this.linklist.size===this.capacity){
            //removeLast
            const tabIdToBeDeleted=this.linklist.removeLast();
            delete this.cache[tabIdToBeDeleted];
            //addToFront
            this.linklist.addToFront(tabId,data);
            //addToCache
            this.cache[tabId]=data;
        }
        else{

            this.linklist.addToFront(tabId,data);
            this.cache[tabId]=data;

        }
    }
}

const lruCache=new LRUCache(3);
const getData=(tabId)=>{

    const dataFromCache=lruCache.get(tabId);

    if(dataFromCache===-1){
        console.log("network call made");
        lruCache.put(tabId,`Data related to ${tabId}`);
    }
    else{
        console.log("getting from cache");
        return dataFromCache;
    }
}

getData("tab1");
getData("tab2");
getData("tab3");
getData("tab4");
getData("tab2");
getData("tab3");
getData("tab3");

getData("tab3");
getData("tab1");
lruCache.linklist.printList();
// getData("tab2");
// getData("tab3");
