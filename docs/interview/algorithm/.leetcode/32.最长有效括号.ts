/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
    const n = s.length;
    if (n === 0) return 0
    const dp: number[] = new Array(n).fill(0);
    dp[-1] = 0;
    for (let i = 1; i < n; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = dp[i - 2] + 2;
            } else if (s[i - dp[i - 1] - 1] === '(') {
                dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
            }
        }
    }
    return Math.max(...dp)
}
// @lc code=end

