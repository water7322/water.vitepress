/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
    const n = s.length;
    const dp: boolean[] = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (dp[i] && wordDict.includes(s.substring(i, j))) {
                dp[j] = true;
            }
        }
    }
    return dp[n];
}
// @lc code=end
