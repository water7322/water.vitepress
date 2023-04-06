/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for (const [index, num] of nums.entries()) {
        const diff = target - num;
        if (map.has(diff)) {
            return [map.get(diff), index]
        } else {
            map.set(num, index)
        }
    }
};
// @lc code=end

