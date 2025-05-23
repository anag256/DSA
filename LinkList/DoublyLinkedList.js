class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
    }
    addFirst(data){
        const newNode=new Node(data);
        if(this.head){
            this.head.prev=newNode;
            newNode.next=this.head;
        }

        this.head=newNode;
    }

    addLast(data){
        const newNode=new Node(data);
        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next=newNode;
        newNode.prev=curr;
    }
    size(){
        let curr=this.head,count=0;

        while(curr){
            count++;
            curr=curr.next;
        }
        return count;
    }
    addAt(data,index){
        const newNode=new Node(data);
        if(index<0 || index>= this.size()){
            console.log("Invalid index")
            return;
        }
        let curr=this.head;
        if(index===0){
            this.head.prev=newNode;
            newNode.next=this.head;
            this.head=newNode;
        }
        for(let i=0;i<index-1;i++){
            curr=curr.next;
        }
        newNode.prev=curr.prev;
        curr.prev.next=newNode;


       newNode.next=curr;
       curr.prev=newNode;



    }
    removeFirst(){
        if(!this.head) return ;
        this.head=this.head.next;
        this.head.prev=null;
    }
    removeAt(index){
        if(index<0 || index>=this.size()){
            console.log("Invalid index")
            return;
        }
        let curr=this.head;
        if(index===0){

            this.head=this.head.next;
            this.head.prev=null;
            return;
        }
        for(let i=0;i<index;i++){
            curr=curr.next;
        }
        if(!curr?.next){
            curr.prev.next=null;
            return;
        }
       curr.prev.next=curr?.next;
       curr.next.prev=curr?.prev;
    }
    removeLast(){

        let curr=this.head;

        if(!this.head){
            return ;
        }
        if(!this.head.next){
            this.head=null;
            return ;
        }
        while(curr.next){
            curr=curr.next;

        }

        curr.prev.next=null;
        curr.prev=null;

    }
    printList(){
        let curr=this.head;
        console.log("------Doubly Link List")
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }
    }
}

let doublyLinkList=new DoublyLinkedList();

doublyLinkList.addFirst(10);
doublyLinkList.addFirst(20);
doublyLinkList.addFirst(30);
doublyLinkList.addLast(40);
doublyLinkList.addLast(50);
doublyLinkList.addAt(60,0)
doublyLinkList.removeFirst();
doublyLinkList.removeLast();
console.log("size",doublyLinkList.size());
doublyLinkList.removeAt(3)

doublyLinkList.printList();
