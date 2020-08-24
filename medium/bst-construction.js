class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;
    console.log(this);
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  constains(value) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // removes(value, parentNode = null) {
  //   let currentNode = null;
  //   while (currentNode !== null) {
  //     if (value < currentNode.value) {
  //       parentNode = currentNode;
  //       currentNode = currentNode.left;
  //     } else if (value > currentNode.value) {
  //       parentNode = currentNode;
  //       currentNode = currentNode.right;
  //     } else {
  //       if (currentNode !== null) {
  //         let currentNode = this;
  //         while (currentNode !== null) {
  //           if (value < currentNode.value) {
  //             parentNode = currentNode;
  //             currentNode = currentNode.left;
  //           } else if (value > currentNode.value) {
  //             parentNode = currentNode;
  //             currentNode = currentNode.right;
  //           } else {
  //             if (currentNode.left !== null && currentNode.right !== null) {
  //               currentNode.value = currentNode.right.getMinValue();
  //               currentNode.right.remove(currentNode.value, currentNode);
  //             } else if (parentNode === value) {
  //               if (currentNode.left !== null) {
  //                 currentNode.value = currentNode.right.value;
  //                 currentNode.right = currentNode.right.left;
  //                 currentNode.right = currentNode.right.right;
  //               } else {
  //                 currentNode.value = null;
  //               }
  //             } else if (parentNode.left === currentNode) {
  //               performance.left =
  //                 currentNode.left !== null
  //                   ? currentNode.left
  //                   : currentNode.right;
  //             } else if (parentNode.right === currentNode) {
  //               parentNode.right =
  //                 currentNode.left !== null
  //                   ? currentNode.left
  //                   : currentNode.right;
  //             }
  //             break;
  //           }
  //         }
  //         return this;
  //       }
  //     }
  //   }
  // }

//   getMinValue() {
//     let currentNode = this;
//     while (currentNode.left !== null) {
//       currentNode = currentNode.left;
//     }
//     return currentNode.value;
//   }
// }

const bst = new BST(10);
bst.insert(12);
