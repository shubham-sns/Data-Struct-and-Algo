// O(n2)

// const nextGreaterElement = (list) => {
//   let output = [];
//   for (let i = 0; i < list.length; i++) {
//     let next = -1;
//     for (let j = i + 1; j < list.length; j++) {
//       if (list[j] > list[i]) {
//         next = list[j];
//         break;
//       }
//     }
//     output.pushValue(next);
//   }
//   return output;
// };

// O(n) => using stack

class Stack {
  constructor() {
    this.stack = [];
  }

  printStack() {
    return this.stack;
  }

  push(val) {
    this.stack.push(val);
    return this.stack;
  }

  pop() {
    if (this.stack) {
      return this.stack.pop();
    }
    return null;
  }

  top() {
    const length = this.stack.length;
    return this.stack[length - 1];
  }

  isEmpty() {
    return this.stack.length > 0 ? false : true;
  }
}

const nextGreaterElement = (list) => {
  let output = [];

  let stack = new Stack();
  stack.push(0);

  for (let i = 1; i < list.length; i++) {
    output[i] = -1;
    // console.log("Before: ", output, stack.printStack());
    while (!stack.isEmpty() && list[stack.top()] < list[i]) {
      output[stack.top()] = list[i];
      stack.pop();
      console.log("While:", i, stack.printStack(), output);
    }
    stack.push(i);
    // console.log("After: ", output, stack.printStack());
    // console.log("---------------------------");
  }
  return output;
};

console.log("o/p", nextGreaterElement([4, 5, 2, 1, 25])); //[5,25,25,25,-1]
// console.log(nextGreaterElement([11, 3, 7, 6, 11, 12])); //[12,7,11,11,12,-1]

/* stack = [];
output = [];
list = [4, 5, 2, 1, 25];

start => stack = [0]
  for --> i =1 ;
  output=[<empty>,-1]
    while ?? stack.isEmpty*()
    compare list[stack.top()] with list[i]

    list[ stack[0] ] < list[ stack[1] ]
      ?  output[0] = list[i]; stack.pop()
      :



 */
