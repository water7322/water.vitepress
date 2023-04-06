/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    let sum = 0;
    let max = nums[0];
    for (const num of nums) {
        sum += num;
        max = Math.max(max, sum)
        if (sum <= 0) {
            sum = 0;
        }
    }
    return max
};
// @lc code=end

