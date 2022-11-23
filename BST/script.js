const BinaryTree = require("./bst");

const randomArray = (size) => {
  return Array.from({ length: size }, () => {
    return Math.floor(Math.random() * 100);
  });
};

const tree = new BinaryTree(randomArray(10));

console.log(tree.isBalanced());
tree.prettyPrint();
console.log(tree.inorder(), tree.preorder(), tree.postorder());
tree.insert(100);
tree.insert(200);
tree.insert(300);

console.log(tree.isBalanced());
tree.prettyPrint();
console.log(tree.inorder(), tree.preorder(), tree.postorder());
