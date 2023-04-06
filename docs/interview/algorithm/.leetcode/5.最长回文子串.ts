/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
    const n = s.length * 2;
    let res = ''
    for (let i = 0; i < n - 1; i++) {
        let left = Math.floor(i / 2);
        let right = Math.ceil(i / 2);
        while (s[left] && s[left] === s[right]) {
            left--
            right++
        }
        if (--right - ++left + 1 > res.length) {
            res = s.substring(left, right + 1)
        }
    }
    return res
};
// @lc code=end

