class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let lastNode = current;

    while (current.next) {
      lastNode = current;
      current = current.next;
    }
    this.tail = lastNode;
    lastNode.next = null;
    if (current.next === null) {
      this.length -= 1;

      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      return current;
    }
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(val, index) {
    let nodeToUpdate = this.get(index);
    if (!nodeToUpdate) return undefined;
    nodeToUpdate.val = val;
    return true;
  }

  insetInto(val, index) {
    if (index < 0 || index > this.length) return undefined;
    let backNode = this.get(index - 1);
    let frontNode = this.get(index);
    let node = new Node(val);
    if (!backNode) return this.unshift(node);
    if (!frontNode) return this.push(node);

    backNode.next = node;
    node.next = frontNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let priorNode = this.get(index - 1);
    let nextNode = this.get(index + 1);
    priorNode.next = nextNode;
    this.length--;

    return this;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}