/*
 * @lc app=leetcode.cn id=44 lang=typescript
 *
 * [44] 通配符匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
    const m = s.length;
    const n = p.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false))
    dp[0][0] = true
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = true
        } else {
            break
        }
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
            }
        }
    }
    return dp[m][n]
};
// @lc code=end

