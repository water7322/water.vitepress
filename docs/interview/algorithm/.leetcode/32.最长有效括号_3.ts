/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses3(s: string): number {
    const n = s.length;
    let max = 0;
    let left = 0;
    let right = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if (left === right) max = Math.max(max, left * 2);
        if (right > left) {
            left = 0;
            right = 0;
        }
    }
    left = 0;
    right = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if (left === right) max = Math.max(max, left * 2);
        if (right < left) {
            left = 0;
            right = 0;
        }
    }
    return max;
}
// @lc code=end
