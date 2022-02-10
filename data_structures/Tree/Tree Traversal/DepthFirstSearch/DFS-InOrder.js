const BinarySearchTree = require("../../BinarySearchTree");

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

const DfsInOrder = (tree) => {
  const traversed = [];

  helper = (node) => {
    if (node.left) helper(node.left);
    traversed.push(node);
    if (node.right) helper(node.right);
  };

  helper(tree.root);
  return traversed;
};

console.log(DfsInOrder(tree));
