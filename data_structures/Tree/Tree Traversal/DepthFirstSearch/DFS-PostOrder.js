const BinarySearchTree = require("../../BinarySearchTree");

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

const DfsPostOrder = tree => {
  const traversed = [];

  const helper = node => {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      traversed.push(node);
  };

  helper(tree.root);
  return traversed;
};

console.log(DfsPostOrder(tree));
