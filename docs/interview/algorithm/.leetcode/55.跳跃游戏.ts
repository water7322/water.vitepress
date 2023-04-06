/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
    const n = nums.length
    let max = 0
    for (let i = 0; i <= max; i++) {
        max = Math.max(max, i + nums[i])
        if (max >= n - 1) return true
    }
    return false
};
// @lc code=end

