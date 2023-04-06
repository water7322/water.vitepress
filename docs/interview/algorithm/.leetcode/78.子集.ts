/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    const results: number[][] = [];
    const n = nums.length;
    function rec(result: number[], i: number) {
        if (i === n) {
            return results.push(result.slice());
        }
        rec(result, i + 1);
        result.push(nums[i]);
        rec(result, i + 1);
        result.pop();
    }
    rec([], 0);
    return results;
};
// @lc code=end

