const lcm = (arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);

  return arr && [...arr].reduce((a = [], b) => _lcm(a, b));
};

function convertFrac(lst) {
  if (lst.length === 0) {
    return "";
  }
  const denoms = lst.map((g) => g[1]);
  const lcmAns = lcm(denoms);
  return lst
    .map((group) => `(${Math.ceil((group[0] / group[1]) * lcmAns)},${lcmAns})`)
    .join("");
}

convertFrac([
  [1, 2],
  [1, 3],
  [1, 4],
]);
convertFrac([
  [69, 130],
  [87, 1310],
  [3, 4],
]);
convertFrac([
  [77, 130],
  [84, 131],
  [3, 4],
]);
convertFrac([
  [8, 15],
  [7, 111],
  [4, 25],
]);
convertFrac([
  [1, 100],
  [3, 1000],
  [1, 2500],
  [1, 20000],
]);
