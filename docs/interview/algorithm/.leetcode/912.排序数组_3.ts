/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
function sortArray(nums: number[], start: number = 0, end: number = nums.length - 1): number[] {
    if (start >= end) return nums;
    let left = start;
    let right = end;
    const mid = nums[Math.floor((start + end) / 2)];
    while (left < right) {
        while (nums[left] < mid) {
            left++;
        }
        while (nums[right] > mid) {
            right--;
        }
        if (left <= right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    sortArray(nums, start, right);
    sortArray(nums, left, end);
    return nums;
}
// @lc code=end
