class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  clear() {
    this.head = null;
  }

  insertValue(value) {
    const newNode = new ListNode(value);

    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      node = node.next;
      count++;
    }

    return count;
  }

  getFirst() {
    return this.head.data;
  }

  getLast() {
    let lastNode = this.head;

    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }

    return lastNode;
  }

  getIndex(index) {
    if (index > -1) {
      let current = this.head;
      let i = 0;

      while (current.next && i < index) {
        current = current.next;
        i++;
      }

      return current ? current.data : undefined;
    }
    return undefined;
  }
}

let list = new LinkedList();
list.insertValue(23);
list.insertValue(45);
list.insertValue(-1);
list.insertValue(00);
list.insertValue(123);

console.log(list.getIndex(4));
