/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    let slow = 0;
    for (let fast = 0; fast < s.length; fast++) {
        const index = s.indexOf(s[fast], slow);
        if (index < fast) {
            slow = index + 1;
        } else {
            max = Math.max(max, fast - slow + 1);
        }
    }
    return max
};
// @lc code=end

