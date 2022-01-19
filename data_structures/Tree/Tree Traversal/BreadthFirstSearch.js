const BinarySearchTree = require("../BinarySearchTree");

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

const breadthFirstSearch = (tree) => {
  const queue = [];
  const traversed = [];
  let currentNode = tree.root;

  queue.push(currentNode);
  while (queue.length) {
    currentNode = queue.shift();
    traversed.push(currentNode);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return traversed;
};

console.log(breadthFirstSearch(tree));
