const util = require("util");
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
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
    let curr = this.head,
      temp;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    temp = curr.next;
    curr.next = newNode;
    newNode.next = temp;
  }

  removeLast() {
    let curr = this.head,
      prev;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
  }
  reverse() {
    let nextNode = null,
      curr = this.head,
      prev = null;

    while (curr) {
      nextNode = curr.next;

      curr.next = prev;
      prev = curr;
      if (!nextNode) {
        this.head = curr;
        return;
      }
      curr = nextNode;
    }
  }
  removeAt(index) {
    let curr = this.head;
    if (index < 0 || index >= this.size()) {
      console.log("Invalid index");
    }
    if (index == 0) {
      this.head = this.head.next;
    }
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    if (curr.next) curr.next = curr.next.next;
  }
  removeNthElementFromEnd(n) {
    let slow = this.head,
      fast = this.head;
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
  }
  isPalindrome() {
    let curr = this.head,
      str1 = "",
      str2 = "";
    while (curr) {
      str1 = str1 + curr.data;
      str2 = curr.data + str2;
      curr = curr.next;
    }
    return str1 === str2;
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

const linklist = new LinkedList();

linklist.addFirst(2);
linklist.addFirst(3);
linklist.addFirst(4);
linklist.addFirst(5);
linklist.addFirst(6);
linklist.addAt(99, 2);
linklist.removeLast();
linklist.removeAt(2);
linklist.reverse();
linklist.removeNthElementFromEnd(3);

linklist.printLinkedList();
const linklist2 = new LinkedList();
linklist2.addFirst(2);
linklist2.addAtLast(3);
linklist2.addAtLast(3);
linklist2.addAtLast(2);
linklist2.printLinkedList();
console.log(linklist2.isPalindrome());

const linklist3 = new LinkedList();
linklist3.addFirst(9);
linklist3.addAtLast(9);
linklist3.addAtLast(9);
linklist3.addAtLast(9);
linklist3.addAtLast(9);
linklist3.addAtLast(9);
linklist3.addAtLast(9);

const linklist4 = new LinkedList();
linklist4.addFirst(9);
linklist4.addAtLast(9);
linklist4.addAtLast(9);
linklist4.addAtLast(9);

const linklist5 = new LinkedList();
linklist5.addFirst(1);
linklist5.addAtLast(2);
linklist5.addAtLast(4);
const linklist6 = new LinkedList();
linklist6.addFirst(1);
linklist6.addAtLast(3);
linklist6.addAtLast(4);

function addTwoNumbers(l1, l2) {
  const ansList = new LinkedList();
  const firstNode = new Node(0);
  ansList.head = firstNode;
  let curr = ansList.head;
  let carry = 0,
    sum = 0;
  while (l1 || l2 || carry !== 0) {
    let l1Val = l1?.data ?? 0;
    let l2Val = l2?.data ?? 0;
    sum = l1Val + l2Val + carry;
    if (sum > 9) {
      carry = parseInt(sum / 10);
    } else {
      carry = 0;
    }
    const newNode = new Node(sum % 10);
    curr.next = newNode;
    curr = newNode;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return ansList.printLinkedList();
}

// function mergeTwoSortedLists(list1, list2) {
//   let curr1 = list1.head;
//   let curr2 = list2.head,
//     temp,
//     prev = null;
//   while (curr1 && curr2) {
//     if (curr1.data <= curr2.data) {
//       temp = curr1.next;
//       curr1.next = curr2;
//       if (prev) {
//         prev.next = curr1;
//       }
//       prev = curr2;
//       curr2 = curr2.next;
//       curr1 = temp;
//     } else {
//       temp = curr2.next;
//       curr2.next = curr1;
//       if (prev) {
//         prev.next = curr2;
//       }
//       prev = curr1;

//       curr1 = curr1.next;
//       curr2 = temp;
//     }
//   }
//   if (curr1) {
//     if (curr2) curr2.next = curr1;
//   }
//   if (curr2) {
//     if (curr1) curr1.next = curr2;
//   }
//   return list1?.head?.next
//     ? list1?.printLinkedList()
//     : list2?.printLinkedList();

// }

function mergeTwoSortedLists(list1,list2){
    let curr1=list1.head;
    let curr2=list2.head;
    let resList=new LinkedList();
    const newNode=new Node(0);
    resList.head=newNode;
    let tail=resList.head,temp;
    while(curr1 && curr2){
        if(curr1.data<=curr2.data){
            tail.next=curr1;
            tail=curr1;
            curr1=curr1.next;

            tail.next=null;

        }
        else{
            tail.next=curr2;
            tail=curr2;
            curr2=curr2.next;
            tail.next=null;
        }
    }
    if(curr1){
        tail.next=curr1
    }
    if(curr2){
        tail.next=curr2
    }
    return resList.printLinkedList();
}
addTwoNumbers(linklist3.head, linklist4.head);

console.log("-----merge sorted lists-----");

mergeTwoSortedLists(linklist5, linklist6);
