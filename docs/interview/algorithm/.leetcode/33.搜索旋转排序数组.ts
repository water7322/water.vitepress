/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
    function bisection(start, end) {
        if (start > end) return
        const mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid
        } else {
            return bisection(start, mid - 1) ?? bisection(mid + 1, end)
        }
    }
    const res = bisection(0, nums.length - 1)
    return res ?? -1 
};
// @lc code=end

