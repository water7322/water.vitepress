/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
function sortArray(nums: number[]): number[] {
    if (nums.length < 2) return nums;
    const smallArr: number[] = [];
    const largeArr: number[] = [];
    const p = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > p) {
            largeArr.push(nums[i]);
        } else {
            smallArr.push(nums[i]);
        }
    }
    return sortArray(smallArr).concat(p, sortArray(largeArr));
}
// @lc code=end
