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
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  removeLast() {
    if (!this.head) return;
    let curr = this.head,
      prev = null;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;

  }
  addAt(index, data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;
  }

  printList() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }

  removeAt(index) {
    if (index === 0) this.head = this.head.next;
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }

  reverse() {
    let curr = this.head,
      prev = null,
      temp = null;
    while (curr) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
  }

  isPalindrome() {
    let str1 = "",
      str2 = "";
    let curr = this.head;
    while (curr) {
      str1 += curr.data;
      str2 = curr.data + str2;
      curr = curr.next;
    }
    return str1 === str2;
  }
  removeNthElementFromEnd(index) {
    let slow = this.head,
      fast = this.head;
    for (let i = 0; i < index; i++) {
      fast = fast.next;
    }
    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
  }
}

const linklist = new LinkedList();
linklist.addFirst(10);
linklist.addFirst(40);
linklist.addAtLast(90);
linklist.addAtLast(100);
linklist.addAt(2, 50);
linklist.addAt(3, 56);
linklist.removeAt(3);
linklist.printList();

console.log("---reverse");
linklist.reverse();

// linklist.printList();

linklist.removeNthElementFromEnd(3);
linklist.printList();

const linklist2 = new LinkedList();
linklist2.addFirst(1);
linklist2.addAtLast(2);
linklist2.addAtLast(1);
console.log(linklist2.isPalindrome());

const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  let l3 = new LinkedList();

  l3.addFirst(0);

  while (l1 || l2 || carry) {
    const n1 = l1.data ?? 0;
    const n2 = l2.data ?? 0;
    let sum = n1 + n2 + carry;

    if (sum > 9) {

      l3.addAtLast(sum % 10);
      carry = parseInt(sum / 10);
    } else {

      l3.addAtLast(sum);
      carry=0;
    }

    if (l1) l1 = l1?.next;
    if (l2) l2 = l2?.next;
  }
  return l3;
};

const ll3 = new LinkedList();
ll3.addFirst(2);
ll3.addAtLast(4);
ll3.addAtLast(3);

const ll4 = new LinkedList();
ll4.addFirst(5);
ll4.addAtLast(6);
ll4.addAtLast(4);

addTwoNumbers(ll3.head, ll4.head).printList();
