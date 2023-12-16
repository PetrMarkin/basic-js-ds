const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.list = null;
  }

  root() {
    return this.list;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.list === null) {
      this.list = newNode;
    } else {
      this.insertNode(this.list, newNode);
    }
  }

  insertNode(list, newNode) {
    if (newNode.data < list.data) {
      if (list.left === null) {
        list.left = newNode;
      } else {
        this.insertNode(list.left, newNode);
      }
    } else {
      if (list.right === null) {
        list.right = newNode;
      } else {
          this.insertNode(list.right, newNode);
      }
    }
  }

  has(data) {
    if (this.find(data) === null) {
      return false;
    }
    return true;
  }

  find(data) {
    if (!this.list) {
      return null;
    }

    let currentNode = this.list;

    do {
      if (currentNode.data === data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    } while (currentNode);

    return null;
  }

  remove(data) {
    this.list = removeNode(this.list, data);

    function removeNode(currentNode, data) {
      if (!currentNode) {
        return this.list
      }
      if (data > currentNode.data) {
        currentNode.right = removeNode(currentNode.right, data);
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode.left = removeNode(currentNode.left, data);
        return currentNode;
      } else {
        if (!currentNode.left && !currentNode.right) {
          return null;
        } 
        if (!currentNode.left) {
          currentNode = currentNode.right;
          return currentNode;
        }
        if (!currentNode.right) {
          currentNode = currentNode.left;
          return currentNode;
        }
        let min = currentNode.right;
        while (min.left) {
          min = min.left;
        }
        currentNode.data = min.data;
        currentNode.right = removeNode(currentNode.right, min.data);
        return currentNode;
      }
    }
  }

  min(currentNode = this.list) {
    if (currentNode.left === null) {
      return currentNode.data;
    }    
    return this.min(currentNode.left);
  }

  max(currentNode = this.list) {
    if (currentNode.right === null) {
      return currentNode.data;
    }
    return this.max(currentNode.right);
  }
}

module.exports = {
  BinarySearchTree
};