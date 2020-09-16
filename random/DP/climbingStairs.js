/* You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */

const climbStairs = (n, chache = { 1: 1, 2: 2 }) => {
  if (n in chache) return chache[n];
  chache[n] = climbStairs(n - 1, chache) + climbStairs(n - 2, chache);
  return chache[n];
};

const climbStairsBU = (n) => {
  let possibleJumps = [1, 2];
  for (let i = 3; i <= n; i++) {
    let sum = possibleJumps[0] + possibleJumps[1];
    possibleJumps[0] = possibleJumps[1];
    possibleJumps[1] = sum;
  }
  return n < 2 ? possibleJumps[0] : possibleJumps[1];
};
