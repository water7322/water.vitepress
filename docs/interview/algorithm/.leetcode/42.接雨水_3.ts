/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
    let leftMax = 0
    let rightMax = 0
    let res = 0
    let left = 0
    let right = height.length - 1;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        if (leftMax < rightMax) {
            res += leftMax - height[left]
            left++
        } else {
            res += rightMax - height[right]
            right--
        }
    }
    return res
};
// @lc code=end

