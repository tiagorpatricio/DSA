const BinarySearchTree = require("../../BinarySearchTree");

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

const DfsPreOrder = (tree) => {
  const queue = [];
  let currentNode = tree.root;

  const helper = (node) => {
    queue.push(node);
    if (!queue.length) return queue;
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  };

  helper(currentNode);
  return queue;
};

console.log(DfsPreOrder(tree));
