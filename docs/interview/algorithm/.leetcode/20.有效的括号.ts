/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const stack: string[] = []
    for (const char of s) {
        if (!map[char]) {
            stack.push(char)
        } else if (stack.pop() !== map[char]) {
            return false
        }
    }
    return stack.length === 0;
};
// @lc code=end

