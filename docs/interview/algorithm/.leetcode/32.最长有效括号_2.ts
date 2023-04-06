/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses2(s: string): number {
    let max = 0;
    const stack = [-1]
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else if (stack.length === 1) {
            stack[0] = i
        } else {
            stack.pop()
            max = Math.max(max, i - stack[stack.length - 1])
        }
    }
    return max
};
// @lc code=end

