class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    // this.prev = null; // uncomment prev lines to make this doubly linkedlist
  }
}

class LinkedList {
  constructor(value) {
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const appendNode = new ListNode(value);
    // appendNode.prev = this.tail;
    this.tail.next = appendNode;
    this.tail = appendNode; // same referance to this.tail.next
    this.length++;
    return this;
  }

  prepend(value) {
    const prependNode = new ListNode(value);
    // this.head.prev = prependNode;
    prependNode.next = this.head;
    this.head = prependNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) return this.append(value);

    const newNode = new ListNode(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;

    leader.next = newNode;
    // newNode.prev = leader;
    newNode.next = follower;
    // follower.prev = newNode;
    this.length++;

    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    let leader = this.traverseToIndex(index - 1);
    let unwantedNode = this.traverseToIndex(index);

    // unwantedNode.next.prev = leader;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }

  printList() {
    const list = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }
}

module.exports.LinkedList = LinkedList;

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.reverse();
console.log(myLinkedList.printList());
