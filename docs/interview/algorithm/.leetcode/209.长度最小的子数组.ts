/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
    const n = nums.length;
    let slow = 0;
    let min = Infinity;
    for (let fast = 0; fast < n; fast++) {
        target -= nums[fast];
        while (target <= 0) {
            min = Math.min(min, fast - slow + 1);
            target += nums[slow];
            slow++;
        }
    }
    return min === Infinity ? 0 : min;
}
// @lc code=end
