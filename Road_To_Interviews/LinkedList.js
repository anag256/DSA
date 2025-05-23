
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }

    addFirst(data){
        const node=new Node(data);
        node.next=this.head;
        this.head=node;
    }
    addAtLast(data){
        const node=new Node(data);
        if(!this.head){
            this.head=node;
            return;
        }
        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next=node;
    }
    removeLast(){
        if(!this.head.next){
            this.head=null;
            return;
        }
        let curr=this.head,prev=null;
        while(curr.next){
            prev=curr;
            curr=curr.next;

        }
        prev.next=null;


    }
    size(){
        let curr=this.head,count=0;
        while(curr){
            count++;
            curr=curr.next;
        }
        return count;
    }
    addAt(index,data){
        const newNode=new Node(data);
        if(!this.head.next){
            this.head=newNode;
            return;
        }
        let curr=this.head;
        for(let i=0;i<index-1;i++){
            curr=curr.next;
        }

        newNode.next=curr.next;
        curr.next=newNode;
    }
    removeAt(index){
        if(!this.head.next){
            this.head=null;
            return;
        }
        let curr=this.head;
        for(let i=0;i<index-1;i++){
            curr=curr.next;
        }
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
    reverse(){
        let curr=this.head,prev=null,next=null;
        while(curr.next){
           next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        curr.next=prev;
        this.head=curr;
    }
    removeNthElementFromEnd(n){
        let slow=this.head,fast=this.head,prev=null;
        for(let i=0;i<n;i++){
            fast=fast.next;
        }
        while(fast.next){
            fast=fast.next;

            slow=slow.next;
        }

        slow.next=slow.next.next;


    }
    isPalindrome(){
        let str1="",str2="";
        let curr=this.head;
        while(curr){
            console.log("curr",curr)
            str1=str1+curr.data;
            str2=curr.data+str2;
            curr=curr.next;

        }
        console.log("str1",str1);
        console.log("str2",str2);
       return str1===str2;
    }
}

const linklist=new LinkedList();
linklist.addFirst(2);

linklist.addFirst(4);

linklist.addFirst(6);
linklist.addAtLast(10);
linklist.addAtLast(12);
// linklist.addAt(2,8);
// linklist.removeAt(4);
// linklist.removeLast();
linklist.reverse();
linklist.removeNthElementFromEnd(3);
console.log(linklist.isPalindrome())
linklist.printList();


const linklist2=new LinkedList();

linklist2.addAtLast(2);
linklist2.addAtLast(5);
linklist2.addAtLast(5);
linklist2.addAtLast(2);
linklist2.printList();
console.log("is palindrom",linklist2.isPalindrome());



const ll3=new LinkedList();
ll3.addAtLast(-9);
ll3.addAtLast(3);



const ll4=new LinkedList();
ll4.addAtLast(5);
ll4.addAtLast(7);


var mergeTwoLists = function(list1, list2) {
    let curr1=list1.head,curr2=list2.head,list3=new LinkedList();
    list3.addAtLast(0);
    let curr3=list3.head;
    while(curr1 && curr2){
        if(curr1.data<=curr2.data){
            curr3.next=curr1;
            curr3=curr1;
            curr1=curr1.next;
        }
        else{
            curr3.next=curr2;
            curr3=curr2;
            curr2=curr2.next;
        }
    }
    while(curr1){
        curr3.next=curr1;
        curr3=curr1
        curr1=curr1.next;
    }
    while(curr2){
        curr3.next=curr2;
        curr3=curr2;
        curr2=curr2.next;
    }
return list3.head.next;
};

console.log("Hola",mergeTwoLists(ll3,ll4))