/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let max = 0;
    for (const price of prices) {
        if (minPrice > price) minPrice = price;
        if (price - minPrice > max) max = price - minPrice;
    }
    return max;
}
// @lc code=end
