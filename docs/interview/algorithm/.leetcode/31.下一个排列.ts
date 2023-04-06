/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
 function nextPermutation(nums: number[]): void {
    let left = nums.length - 2
    while (nums[left] >= nums[left + 1]) {
        left--
    }
    if (left === -1) {
        nums.reverse()
        return;
    }
    let right = nums.length - 1
    while (nums[left] >= nums[right]) {
        right--
    };
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++
    right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++
        right--;
    }
};
// @lc code=end

