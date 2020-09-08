class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top.value;
  }
  push(value) {
    const newTop = new Node(value);

    if (this.top) {
      newTop.next = this.top;
      this.top = newTop;
    } else {
      this.top = newTop;
      this.bottom = newTop;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
// console.log(myStack.push("Discord"));
// console.log(myStack.push("Google"));
// console.log("peek", myStack.peek());
// console.log(myStack.push("Facebook"));
// console.log("pop", myStack.pop());
// console.log("peek", myStack.peek());
