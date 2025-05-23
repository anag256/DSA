

// https://leetcode.com/problems/delete-node-in-a-linked-list/description/
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/1486916279/
//*******IMPORTANT******  https://leetcode.com/problems/add-two-numbers/ *******IMPORTANT******
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
        const newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }
    addAtLast(data){
        const newNode=new Node(data);
        let curr=this.head;
        if(!this.head){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }
        while(curr.next){
            curr=curr.next;

        }
        curr.next=newNode;
        newNode.next=null;
    }
    isPalindrome(){
        let string1="",string2="",curr=this.head;
        while(curr){
            string1=string1+curr.data;
            string2=curr.data+string2;
            curr=curr.next;
        }
        console.log("sr",string1,string2)
        return string1===string2;
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
        let curr=this.head;
        if(index<0 || index>=this.size()){
            console.log("Invalid index")
        }
        for(let i=0;i<index-1;i++){
            curr=curr.next;
        }
        newNode.next=curr.next;
        curr.next=newNode;

    }

    removeLast(){
        let curr=this.head;
        let prev=curr;
        while(curr.next){
            prev=curr;
            curr=curr.next;
        }
        prev.next=null;

    }
    reverse(){
        let curr=this.head,prev=null,nextNode;
        while(curr.next){
           nextNode=curr.next;
            curr.next=prev;
            prev=curr;
            curr=nextNode;
        }
        curr.next=prev;
        this.head=curr;

    }
    removeNthElementFromEnd(n){
        let slow=this.head,fast=this.head;

        for(let i=0;i<n;i++){
            fast=fast.next;
        }
        if(!fast){return head.next}
        while(fast.next){
            slow=slow.next;
            fast=fast.next;
        }
        slow.next=slow.next.next;

    }
    removeAt(index){
        let curr=this.head;
        if(index<0 || index>=this.size()){
            console.log("Invalid index")
        }
        if(index===0){
            this.head=this.head.next;
            return;
        }
        for(let i=0;i<index-1;i++){
            curr=curr.next;
        }
        if(curr.next){ curr.next=curr.next.next;}

    }
    printList(){
        let curr=this.head;
        console.log("-----LIST--------")
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }
    }

}

const LinkList=new LinkedList();
LinkList.addFirst(20);
LinkList.addFirst(35);
LinkList.addFirst(68);
LinkList.addFirst(-5);
LinkList.addAtLast(24);
LinkList.addAtLast(90);
LinkList.addAtLast(92);
LinkList.removeLast();
console.log("size",LinkList.size());
LinkList.addAt(12,2);

LinkList.removeAt(3)
LinkList.printList();
LinkList.reverse();
console.log("-----reverse----")
LinkList.printList();


const linklist3=new LinkedList();
linklist3.addAtLast(1);
linklist3.addAtLast(2);
linklist3.addAtLast(3);
linklist3.addAtLast(4);
linklist3.addAtLast(5);
linklist3.printList();
console.log("------remove nt element");
linklist3.removeNthElementFromEnd(2);
linklist3.printList();


console.log("------------------")
const linklist2=new LinkedList();
linklist2.addAtLast(1)
linklist2.addAtLast(2)
linklist2.addAtLast(10);
linklist2.printList();
console.log("ispalindrome",linklist2.isPalindrome());