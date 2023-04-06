/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
    const n = height.length;
    const leftArr: number[] = [height[0]]
    const rightArr: number[] = []
    rightArr[n - 1] = height[n - 1]
    let res = 0
    for (let i = 1; i < n; i++) {
        leftArr[i] = Math.max(leftArr[i - 1], height[i])
    }
    for (let i = n - 2; i >= 0; i--) {
        rightArr[i] = Math.max(rightArr[i + 1], height[i])
    }
    for (let i = 0; i < n; i++) {
        res += Math.min(leftArr[i], rightArr[i]) - height[i]
    }
    return res
};
// @lc code=end

