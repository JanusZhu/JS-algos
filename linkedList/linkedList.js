class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(nodeValue) {
    const node = new Node();
    node.value = nodeValue;
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
  }

  prepend(nodeValue) {
    const node = new Node();
    node.value = nodeValue;
    node.nextNode = this.head;
    this.head = node;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count += 1;
      current = current.nextNode;
    }
    return count;
  }

  HEAD() {
    return this.head;
  }
  tail() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index > this.size() - 1) {
      return null;
    }
    let current = this.head;
    while (index > 0) {
      index -= 1;
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    let current = this.head;
    let pre = this.head;
    while (current.nextNode) {
      pre = current;
      current = current.nextNode;
    }
    pre.nextNode = null;
    return current;
  }

  contains(target) {
    let current = this.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(target) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.value === target) {
        return count;
      }
      current = current.nextNode;
      count += 1;
    }
    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size() - 1) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let current = this.head;
    let pre = this.head;
    while (index > 0) {
      index -= 1;
      pre = current;
      current = current.nextNode;
    }
    const node = new Node();
    node.value = value;
    pre.nextNode = node;
    node.nextNode = current;
  }

  removeAt(index) {
    if (index < 0 || index > this.size() - 1) {
      return;
    }
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    let pre = this.head;
    let current = this.head;
    while (index > 0) {
      index -= 1;
      pre = current;
      current = current.nextNode;
    }
    pre.nextNode = current.nextNode;
  }

  toString() {
    let result = "";
    let current = this.head;
    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }
    console.log(result + "null");
  }
}

let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(4);
linkedList.toString();
console.log(linkedList.size());
linkedList.removeAt(1);
linkedList.toString();
//console.log(linkedList.find(2));
//console.log(linkedList.tail());
//console.log(linkedList.at(1));
//console.log(linkedList.pop());
//linkedList.toString();
//console.log(linkedList.contains(1));
