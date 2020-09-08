class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    const length = this.array.length;
    return this.array[length - 1];
  }

  push(val) {
    this.array.push(val);
    return this.array;
  }

  pop() {
    return this.array.pop();
  }

  printStack() {
    return this.array;
  }

  isEmpty() {
    return this.array.length > 0 ? false : true;
  }
}

module.exports.Stack = Stack;

const myStack = new Stack();
console.log(myStack.push("Discord"));
console.log(myStack.push("Google"));
console.log("peek", myStack.peek());
console.log(myStack.push("Facebook"));
console.log("pop", myStack.pop());
console.log("peek", myStack.peek());
