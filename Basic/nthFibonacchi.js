//math formula:  fib(n) = fib(n-1) + fib(n-2) , where n>2

// O(n) time | O(1) space
function getNthFib(n) {
  let initial = [0, 1];
  let counter = 3;
  while (counter < n) {
    const newFib = initial[0] + initial[1];
    initial[0] = initial[1];
    initial[1] = newFib;
    counter++;
  }
  n > 0 ? initial[1] : initial[0];
}

// time O(2^n) | O(n) space
/* function getNthFib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
} */

//O(n) time | O(n) space
/* function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }
} */

getNthFib(10);
getNthFib(0);
getNthFib(1);
