class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    addFirst(data){

        const newNode=new Node(data);
        if(!this.head){
            this.tail=newNode;
        }
        newNode.next=this.head;
        this.head=newNode;
        this.size++;
    }

    removeLast(){
        let curr=this.head,prev=null;
        if(!this.head) return;
        if(!this.head.next) this.head=null;
        while(curr.next){
            prev=curr;
            curr=curr.next;
        }
        prev.next=null;
        this.tail=prev;
        this.size--;

        return curr.data.key;
    }

    moveToFront(key){
        if(this.head?.data.key===key) return;

        let curr=this.head,prev=null;
        while(curr && curr.data.key!==key){

                prev=curr;
                curr=curr.next;

        }
        console.log("current",curr)
        if(curr===this.tail){
            prev.next=null;
            this.tail=prev;
            curr.next=this.head;
            this.head=curr;
            return;
        }
        if( curr?.next){
            prev.next=curr?.next ;
            curr.next=this.head;
             this.head=curr;
        }

    }
    printLinkedList() {
        let curr = this.head;
        console.log("-----Link List-----");
        while (curr) {
          console.log(curr.data);
          curr = curr.next;
        }
      }

}


class LRUCache{
    constructor(capacity){
        this.capacity=capacity;
        this.cache={};
        this.linklist=new LinkedList();
    }

    get(key){
        //if in cache, get it and move the item to front in ll
        const valueFromCache=this.cache[key];
        if(valueFromCache){
            this.linklist.moveToFront(key);
            console.log("getting from cache");

            return valueFromCache;

        }
        return -1;
    }

    put(key,value){
        if(this.linklist.size===this.capacity){
            // {key,value}
            const removedKey=this.linklist.removeLast();
            console.log("removedkey",removedKey)
            delete this.cache[removedKey];
            this.linklist.addFirst({key,value});
            this.cache[key]=value;
            // console.log("cache from put if",this.cache);
            //remove last
            //put in cache
            //add to the front of linklist
        }
        else{
            //add to the front
            // console.log("cache from put else",this.cache);
            this.linklist.addFirst({key,value});
            this.cache[key]=value;
        }
    }
}


const lruCache=new LRUCache(3);
const getData=(query)=>{


    const val=lruCache.get(query);
    if(val===-1){
        console.log("fetching from network");
        lruCache.put(query,`Dummy suggestions regd ${query}`);
        lruCache.linklist.printLinkedList();
        return `Dummy suggestions regd ${query}`
    }
    else{
        console.log("in else")
        lruCache.linklist.printLinkedList();
        return val;
    }
}

getData("tab1");
getData("tab2");
getData("tab3");
getData("tab4");
getData("tab5");
getData("tab3");
getData("tab4");