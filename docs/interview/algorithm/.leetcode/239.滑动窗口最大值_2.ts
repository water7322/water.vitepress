/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow2(nums: number[], k: number): number[] {
    const n = nums.length;
    const res: number[] = [];
    const queue: number[] = [];
    for (let i = 0; i < n; i++) {
        while (queue.length > 0 && queue[0] < i - k + 1) {
            queue.shift();
        }
        while (queue.length > 0 && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);
        if (i >= k - 1) res.push(nums[queue[0]]);
    }
    return res;
}
// @lc code=end
