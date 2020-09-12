function reverseString(str) {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output = output + str[i];
  }
  return output;
}
// console.log(reverseString("hello"));

//using tail call optimization
function reverseStringRecursive(str, reversed = "") {
  if (str === "") return reversed;
  return reverseStringRecursive(str.substring(1), str[0] + reversed);
}
console.log(reverseStringRecursive("hello darkness my old friend"));
