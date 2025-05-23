class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToFront(key, data) {
    const newNode = new Node({ key, data });
    console.log("newNode",newNode)
    this.size++;
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  moveToFront(key) {
    if(!this.head) return;
    if (this.head.data.key === key) {
      return;
    }
    let curr = this.head,
      prev = null;
    while (curr.data.key !== key) {
      prev = curr;
      curr = curr.next;
    }
    let reqdNode = curr;
    prev.next = curr.next;

    reqdNode.next = this.head;
    this.head = reqdNode;
  }

  removeLast() {
    if (!this.head) return;
    this.size--;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let curr = this.head,
      prev = null;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
    this.tail = prev;

    return curr.data.key;
  }
}

class LRUCache {
  constructor(capacity) {
    this.linklist = new LinkedList();
    this.capacity = capacity;
    this.cache = {};
  }

  get(key) {
    if (!this.cache[key]) return -1;
    this.linklist.moveToFront(key);
    console.log(this.cache)
    return this.cache[key];
  }

  put(key, data) {
    if (this.linklist.size === this.capacity) {
      const removedKey=this.linklist.removeLast();
      delete this.cache[removedKey];
    }

    this.linklist.addToFront(key,data);
    this.cache[key] = data;
    console.log(this.cache)
    return data;
  }
}
const lruCache = new LRUCache(3);
const getData = (tabId) => {

  const cacheVal = lruCache.get(tabId);
  if (cacheVal !== -1) {
    console.log("getting from cache");
    return cacheVal;
  }
  console.log("fetching data from network")
  return lruCache.put(tabId, `data for ${tabId}`);
};
console.log(getData("tab1"));
console.log(getData("tab2"));
console.log(getData("tab3"));
console.log(getData("tab1"));
console.log(getData("tab2"));
console.log(getData("tab2"));
console.log(getData("tab4"));
console.log(getData("tab3"));
