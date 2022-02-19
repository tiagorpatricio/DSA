class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert = (value) => {
    this.values.push(value);
    this.bubbleUp();
  };

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMaxValue = () => {
    let removedElement = this.values.shift();
    if (!this.values.length > 0) return;
    this.values.unshift(this.values.pop());
    this.sinkDown();
    return removedElement;
  };

  sinkDown() {
    let idx = 0;
    let element = this.values[0];
    let length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (!swap) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const binaryHeap = new MaxBinaryHeap();

binaryHeap.insert(41);
binaryHeap.insert(36);
binaryHeap.insert(32);
binaryHeap.insert(22);
binaryHeap.insert(11);
binaryHeap.insert(15);
binaryHeap.insert(55);

binaryHeap.extractMaxValue();
console.log(binaryHeap.values);
