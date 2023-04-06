/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
    const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(1))
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
        }
    }
    return dp[m - 1][n - 1]
};
// @lc code=end

