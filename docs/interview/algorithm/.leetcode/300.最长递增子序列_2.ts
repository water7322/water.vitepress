/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    const dp: number[] = [];
    const res: number[] = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] > dp[dp.length - 1]) {
            dp.push(nums[i]);
        } else {
            const index = getIndex(dp, nums[i]);
            dp[index] = nums[i];
        }
        res[dp.length - 1] = dp[dp.length - 1];
    }
    console.log(res);
    return dp.length;
}
function getIndex(dp: number[], num: number): number {
    let left = 0;
    let right = dp.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (dp[mid] < num) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
// @lc code=end
