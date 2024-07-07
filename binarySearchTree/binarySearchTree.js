class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  Insert(key) {
    const newNode = new BSTNode(key);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(key) {
    if (this.root === null) return;
    this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    if (node == null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right == null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }

    return node;
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  inOrderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    return result;
  }

  inOrder(node, result) {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.key);
      this.inOrder(node.right, result);
    }
  }

  preOrderTraversal() {
    let result = [];
    this.preOrder(this.root, result);
    return result;
  }

  preOrder(node, result) {
    if (node !== null) {
      result.push(node.key);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }

  postOrderTraversal() {
    let result = [];
    this.postOrder(this.root, result);
    return result;
  }

  postOrder(node, result) {
    if (node !== null) {
      this.postOrder(node.left), result;
      this.postOrder(node.right, result);
      result.push(node.key);
    }
  }

  depthFirstTraversal() {
    if (this.root === null) {
      return;
    }
    const values = [];
    const stack = [this.root];
    let node;
    while (stack.length > 0) {
      node = stack.pop();
      values.push(node.key);
      if (node.right !== null) {
        stack.push(node.right);
      }
      if (node.left !== null) {
        stack.push(node.left);
      }
    }
    return values;
  }

  depthFirstTraversalRecursive() {
    if (this.root === null) {
      return;
    }
    const values = [];
    return this.depthFirstTraversalRecursiveHelper(this.root, values);
  }

  depthFirstTraversalRecursiveHelper(node, values) {
    if (!node) return;
    values.push(node.key);
    if (node.left) this.depthFirstTraversalRecursiveHelper(node.left, values);
    if (node.right) this.depthFirstTraversalRecursiveHelper(node.right, values);
    return values;
  }

  breadthFirstTraversal() {
    if (!this.root) return;
    const values = [];
    const queue = [this.root];
    let node;
    let deplth = 0;
    while (queue.length > 0) {
      node = queue.shift();
      values.push(node.key);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return values;
  }

  breadthFirstTraversalRecursive() {
    if (this.root === null) {
      return;
    }
    const values = [];
    return this.breadthFirstTraversalRecursiveHelper([this.root], values);
  }

  breadthFirstTraversalRecursiveHelper(nodes, values) {
    if (!nodes.length) return;
    for (const node of nodes) {
      const nodeLevels = [];
      values.push(node.key);
      if (node.left) nodeLevels.push(node.left);
      if (node.right) nodeLevels.push(node.right);
    }
    this.breadthFirstTraversalRecursiveHelper(nodeLevels, values);
    return values;
  }

  treeSum() {
    if (!this.root) return 0;
    const queue = [this.root];
    let sum = 0;
    while (queue.length > 0) {
      const node = queue.shift();
      sum += node.key;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return sum;
  }

  treeSumRecursive(root) {
    if (!root) return 0;

    return (
      root.key +
      this.treeSumRecursive(root.left) +
      this.treeSumRecursive(root.right)
    );
  }

  treeSumRecursiveSimplified(root, sum) {
    if (!root) return 0;
    sum += root.key;
    this.treeSumRecursive(root.left, sum);
    this.treeSumRecursive(root.right, sum);
  }
}

const bstTree = new BinarySearchTree();
bstTree.Insert(20);
bstTree.Insert(30);
bstTree.Insert(10);
bstTree.Insert(5);
bstTree.Insert(15);
bstTree.Insert(25);
bstTree.Insert(35);
//console.log(bstTree.inOrderTraversal());
//bstTree.delete(20);
//console.log(bstTree.inOrderTraversal());
//console.log(bstTree.depthFirstTraversal());
console.log(bstTree.depthFirstTraversalRecursive());
console.log(bstTree.breadthFirstTraversal());
console.log(bstTree.breadthFirstTraversal());
console.log(bstTree.treeSum());
console.log(bstTree.treeSumRecursive(bstTree.root));
console.log(bstTree.treeSumRecursive(bstTree.root, 0));
