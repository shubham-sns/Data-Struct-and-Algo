/* Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one. */

const maxProfitRecursive = (prices) => {
  if (!prices || prices.length === 0) return 0;
  return maxProfitHelper(prices, 0, Infinity, 0);
};
const maxProfitHelper = (prices, index, currentMinStockPrice, maxDiff) => {
  if (prices.length === index) return maxDiff;
  let earn = prices[index] - currentMinStockPrice;
  maxDiff = Math.max(earn, maxDiff);
  currentMinStockPrice = Math.min(earn, currentMinStockPrice);

  return maxProfitHelper(prices, index++, currentMinStockPrice, maxDiff);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([7, 6, 4, 3, 1])); //0
