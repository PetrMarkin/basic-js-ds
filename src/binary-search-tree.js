const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.list = null;
    this.left = 0;
    this.right = 0;
  }

  root() {
    return this.list;
  }

  add(data) {
    if (this.list === null) {
      this.list = data;
    } else {
      if (this.left === 0) {
        this.left = data;
      } else {
        if (this.left > data) {
          this.left = data;
        }
      }
      this.right = data;
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    return this.left;
  }

  max() {
    return this.right;
  }
}

module.exports = {
  BinarySearchTree
};