import { useRef } from "react";

class Node{
    constructor(data){
        this.data=data
        this.next=null;
    }
}
class LRUCache{
    constructor(capacity){
        this.capacity=capacity;
        this.cache={};
        this.head=null;
        this.tail=null;
    }

    put(key,value){
        if(this.cache[key]){
            this.moveToFront(key);

        }
        else{
            if(Object.keys(this.cache).length<this.capacity){
                console.log("length before add to front",Object.keys(this.cache).length)
                this.addToFront(key,value);
                console.log("length after add To Front",Object.keys(this.cache).length,this.cache)

            }
            else{
                this.removeLast();
                console.log("element removed",this.cache)
                this.printList();
                this.addToFront(key,value);
            }
        }

    }
    get(key){
        if(!this.cache[key]) return -1;
        this.moveToFront(key);
        return this.cache[key];
    }
    printList(){
        let curr=this.head;
        while(curr){
            console.log("curr",curr)
            curr=curr.next;
        }
    }
    removeLast(){
        if(!this.head) return;
        let curr=this.head;
        let prev=null;
        let lastKey=this.tail.data['key'];
        console.log("lastKey",lastKey)
        delete this.cache[lastKey];
        while(curr.next){
            prev=curr;
            curr=curr.next;

        }
        this.tail=prev;
        prev.next=null;


    }
    addToFront(key,value){
        const newNode= new Node({
            key,
            value,
        })
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
        }

        this.cache[key]=value;
    }

    moveToFront(key){
        let curr=this.head;
        let prev=null;
        while(curr && !curr.data[key]){
            prev=curr;
            curr=curr.next;
        }
        if(!curr) return;
        if(curr===this.tail){
            this.tail=prev;
            prev.next=null;
            return;
        }
        prev.next=curr.next;

        curr.next=this.head;
        this.head=curr;
    }
}

export const useLRUCache=(capacity=3)=>{
    const cacheRef=useRef(new LRUCache(capacity))

    return {
        get:(key)=>cacheRef.current.get(key),
        put:(key,value)=>cacheRef.current.put(key,value)
    };
}