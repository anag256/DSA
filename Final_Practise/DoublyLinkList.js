class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
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
        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode;
    }
    addAtLast(data){
        let curr=this.head;
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        while(curr.next){
            curr=curr.next;
        }
        curr.next=newNode;
        newNode.prev=curr;

    }

    addAt(index,data){
        let curr=this.head;
        const newNode=new Node(data);
        if(index===0){
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
            return;
        }

        for(let i=0;i<index-1;i++){
            curr=curr.next;
        }
      newNode.next=curr.next;
      newNode.next.prev=newNode;
      curr.next=newNode;
      newNode.prev=curr;
    }

    removeLast(){
        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.prev.next=null;
        curr.prev=null;
    }
    removeAt(index){
        let curr=this.head;

        for(let i=0;i<index-1;i++){
            curr=curr.next;
        }
        curr.next.prev=curr;
     curr.next=curr.next.next;

    }

    printList(){
        console.log("----------LIST---------")
        let curr=this.head;
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }

        console.log("----------LIST END---------")
    }
}

const dll1=new DoublyLinkedList();
dll1.addFirst(10);
dll1.addFirst(20);
dll1.addAtLast(30);
dll1.addAtLast(50);
dll1.addAt(2,90)
dll1.removeLast();
dll1.removeAt(2);
dll1.printList();