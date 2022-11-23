class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(array) {
    this.root = this.buildTree([
      ...new Set(
        array.sort(function (a, b) {
          return a - b;
        })
      ),
    ]);
  }
  buildTree(array) {
    if (array.length === 0) {
      return null;
    }
    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);
    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));
    return node;
  }
  insert(value, root = this.root) {
    if (!root) {
      return new Node(value);
    }
    if (value > root.data) {
      root.right = this.insert(value, root.right);
    } else if (value < root.data) {
      root.left = this.insert(value, root.left);
    }
    return root;
  }
  delete(root = this.root, value) {
    //base case
    if (!root) {
      return root;
    }
    if (value < root.data) {
      root.left = this.delete(root.left, value);
    } else if (value > root.data) {
      root.right = this.delete(root.right, value);
    } else {
      //find the right node
      //no children
      if (root.left === null && root.right === null) {
        return null;
      }
      //has one child
      else if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }
      //have two children
      let current = root.right;
      let pre;
      while (current.left) {
        pre = current;
        current = current.left;
      }
      if (!pre) {
        current.left = root.left;
        return current;
      } else {
        pre.left = current.right;
        root.data = current.data;
      }
    }
    return root;
  }
  find(value, root = this.root) {
    if (!root) {
      return null;
    }
    if (value > root.data) {
      return this.find(value, root.right);
    } else if (value < root.data) {
      return this.find(value, root.left);
    } else {
      return root;
    }
  }
  //iterative
  levelOrder1(callbackFun) {
    let levelOrderList = [];
    let queque = [this.root];
    while (queque.length > 0) {
      const node = queque.shift();
      callbackFun ? callbackFun(node) : levelOrderList.push(node.data);
      if (node.left) queque.push(node.left);
      if (node.right) queque.push(node.right);
    }
    if (levelOrderList.length > 0) return levelOrderList;
  }
  //recursive
  levelOrder2(callbackFun, levelOrderList = [], queque = [this.root]) {
    if (queque.length === 0) {
      if (levelOrderList.length > 0) {
        return levelOrderList;
      } else {
        return;
      }
    }
    if (queque.length > 0) {
      const node = queque.shift();
      callbackFun ? callbackFun(node) : levelOrderList.push(node.data);
      if (node.left) queque.push(node.left);
      if (node.right) queque.push(node.right);
    }
    return this.levelOrder2(callbackFun, levelOrderList, queque);
  }

  inorder(node = this.root, callbackFun, inoderList = []) {
    if (!node) return;
    this.inorder(node.left, callbackFun, inoderList);
    callbackFun ? callbackFun(node) : inoderList.push(node.data);
    this.inorder(node.right, callbackFun, inoderList);
    if (inoderList.length > 0) return inoderList;
  }

  preorder(node = this.root, callbackFun, preorderList = []) {
    if (!node) return;

    callbackFun ? callbackFun(node) : preorderList.push(node.data);
    this.preorder(node.left, callbackFun, preorderList);
    this.preorder(node.right, callbackFun, preorderList);
    if (preorderList.length > 0) return preorderList;
  }
  postorder(node = this.root, callbackFun, postorderList = []) {
    if (!node) return;

    this.postorder(node.left, callbackFun, postorderList);
    this.postorder(node.right, callbackFun, postorderList);
    callbackFun ? callbackFun(node) : postorderList.push(node.data);
    if (postorderList.length > 0) return postorderList;
  }

  height(node = this.root) {
    if (!node) return -1;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  depth(target, node = this.root, d = 0) {
    if (node === null) return;
    if (target.data === node.data) return d;
    if (target.data > node.data) {
      return this.depth(target, node.right, d + 1);
    } else {
      return this.depth(target, node.left, d + 1);
    }
  }

  isBalanced(root = this.root) {
    return Math.abs(this.height(root.left) - this.height(root.right)) <= 1;
  }

  rebalance(root = this.root) {
    const array = this.inorder(root);
    return this.buildTree(array);
  }
  prettyPrint = (node = this.root, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}

module.exports = BinaryTree;
