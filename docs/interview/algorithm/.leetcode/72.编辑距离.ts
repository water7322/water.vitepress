/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length;
    const dp = new Array(m + 1).fill(null).map((item, index) => [index]);
    for (let i = 1; i <= n; i++) {
        dp[0][i] = i;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
            }
        }
    }
    return dp[m][n];
}
// @lc code=end
