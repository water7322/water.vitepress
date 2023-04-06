/*
 * @lc app=leetcode.cn id=41 lang=typescript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
function firstMissingPositive2(nums: number[]): number {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] < 1) nums[i] = n + 1;
    }
    for (let i = 0; i < n; i++) {
        nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1]);
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) return i + 1;
    }
    return n + 1;
}
// @lc code=end

