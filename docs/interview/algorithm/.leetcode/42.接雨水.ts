/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
    const stack: number[] = [];
    let res = 0
    for (let i = 0; i < height.length; i++) {
        while (height[i] > height[stack[stack.length - 1]]) {
            const topIndex = stack.pop();
            if (stack.length === 0) break
            const nextIndex = stack[stack.length - 1]
            res += (i - nextIndex - 1) * (Math.min(height[nextIndex], height[i]) - height[topIndex])
        }
        stack.push(i)
    }
    return res
};
// @lc code=end

