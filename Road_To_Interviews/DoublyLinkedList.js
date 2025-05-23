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
        if(!this.head){
            this.head=newNode;
            return;
        }
       this.head.prev=newNode;
       newNode.next=this.head;
       this.head=newNode;

    }
    addAtLast(data){
        const newNode=new Node(data);
        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next=newNode;
        newNode.prev=curr;
    }
    removeFirst(){
        if(!this.head.next){
            this.head=null;
            return;
        }
        this.head=this.head.next;
        this.head.prev=null;
    }
    removeLast(){
        if(!this.head.next){
            this.head=null;
            return;
        }
        let curr=this.head;
        while(curr.next){
            curr=curr.next;

        }
        curr.prev.next=null;
        curr.prev=null;

    }
    addAt(index,data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        if(index==0){
            this.head.prev=newNode;
            newNode.next=this.head;
            this.head=newNode;
            return;
        }
        let curr=this.head;
        for(let i=0;i<index;i++){
            curr=curr.next;
        }

       curr.prev.next=newNode;
       newNode.next=curr;
       newNode.prev=curr.prev;
       curr.prev=newNode;
    }
    removeAt(index){
        let curr = this.head;

        if (index == 0) {
          this.head = this.head.next;
        }
        for (let i = 0; i < index ; i++) {
          curr = curr.next;
        }
        if(!curr?.next){
            curr.prev.next=null;
            return;
        }
        curr.prev.next=curr?.next;
          curr.next.prev=curr?.prev;

    }
    printList(){
        let curr=this.head;
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
doublyLinkList.addAtLast(40);
doublyLinkList.addAtLast(50);
doublyLinkList.addAt(0,60)
doublyLinkList.addAt(3,70)
doublyLinkList.removeFirst();
doublyLinkList.removeLast();

doublyLinkList.removeAt(3)

doublyLinkList.printList();