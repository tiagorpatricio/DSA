class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }

    this.length--;
    return currentTail;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    }

    this.length--;
    return currentHead;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index <= this.length / 2) {
      let current = this.head;
      let counter = 0;
      while (counter !== index) {
        current = current.next;
        counter++;
      }

      return current;
    } else {
      let current = this.tail;
      let counter = this.length - 1;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
      return current;
    }
  }

  set(val, index) {
    if (index < 0 || inde > this.length - 1) return undefined;
    currentNode = get(index);
    if (!currentNode) return false;
    currentNode.val = val;
    return true;
  }

  insertInto(val, index) {
    if (index < 0 || index > this.length - 1) return undefined;
    let node = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = this.get(index);
    if (!prevNode) return this.unshift(val);
    if (!nextNode) return this.push(val);
    prevNode.next = node;
    node.prev = prevNode;
    node.next = nextNode;
    nextNode.prev = node;
    this.length++;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    let node = this.get(index);

    node.next.prev = node.prev;
    node.prev.next = node.next;
    node.prev = null;
    node.next = null;
    this.length--;

    return node;
  }
}

