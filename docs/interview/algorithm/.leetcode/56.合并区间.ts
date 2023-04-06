/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    let pre = intervals[0]
    const res: number[][] = []
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > pre[1]) {
            res.push(pre)
            pre = intervals[i]
        } else {
            pre[1] = Math.max(pre[1], intervals[i][1])
        }
    }
    res.push(pre)
    return res
};
// @lc code=end

