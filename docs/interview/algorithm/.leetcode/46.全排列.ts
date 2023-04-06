/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    const results: number[][] = []
    function rec(res, arr) {
        if (arr.length === 0) {
            results.push(res.slice())
        }
        for (let i = 0; i < arr.length; i++) {
            res.push(arr[i]);
            const newArr = arr.slice()
            newArr.splice(i, 1)
            rec(res, newArr)
            res.pop()
        }
    }
    rec([], nums)
    return results
};
// @lc code=end

