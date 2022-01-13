class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let currentFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = currentFirst.next;
    currentFirst.next = null;
    this.size--;
    return currentFirst;
  }
}
