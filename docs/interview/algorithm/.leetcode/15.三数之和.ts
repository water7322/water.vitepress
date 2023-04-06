/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    const n = nums.length
    const result: number[][] = []
    for (let i = 0; i < n - 2; i++) {
        if (nums[i] === nums[i - 1]) continue
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                j++;
                continue;
            }
            const sum = nums[i] + nums[j] + nums[k]
            if (sum > 0) {
                k--
            } else if (sum < 0) {
                j++
            } else {
                result.push([nums[i], nums[j++], nums[k--]])
            }
        }
    }
    return result;
};
// @lc code=end

