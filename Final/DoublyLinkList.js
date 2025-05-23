const util = require("util");
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev=null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    if(this?.head){
        this.head.prev=newNode;

    }
    this.head = newNode;
  }
  addAtLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    newNode.prev=current;
  }
  size() {
    let curr = this.head,
      count = 0;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }
  addAt(data, index) {
    if (index < 0 || index >= this.size()) {
      console.log("Invalid index");
    }

    const newNode = new Node(data);
    if(index===0){
        this.head.prev=newNode;
        newNode.next=this.head;
        this.head=newNode;
        return;
    }
    let curr = this.head,
      temp;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    newNode.prev=curr.prev;
    if(newNode?.prev){
        newNode.prev.next=newNode;
    }

    newNode.next=curr;
    curr.prev=newNode;
  }

  removeLast() {
    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }
    curr.prev.next=null;

  }

  removeAt(index) {
    let curr = this.head;
    if (index < 0 || index >= this.size()) {
      console.log("Invalid index");
    }
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
  removeFirst(){
    if(!this.head) return ;
    this.head=this.head.next;
    this.head.prev=null;
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

let doublyLinkList=new DoublyLinkedList();

doublyLinkList.addFirst(10);
doublyLinkList.addFirst(20);
doublyLinkList.addFirst(30);
doublyLinkList.addAtLast(40);
doublyLinkList.addAtLast(50);
doublyLinkList.addAt(60,0)
doublyLinkList.removeFirst();
doublyLinkList.removeLast();
console.log("size",doublyLinkList.size());
doublyLinkList.removeAt(3)

doublyLinkList.printLinkedList();