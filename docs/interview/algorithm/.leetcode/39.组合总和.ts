/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
    const results: number[][] = []
    candidates.sort((a, b) => a - b)
    function rec(target: number, result: number[], initIndex: number) {
        if (target < 0) return
        if (target === 0) {
            results.push(result.slice())
        }
        for (let i = initIndex; i < candidates.length; i++) {
            result.push(candidates[i])
            rec(target - candidates[i], result, i)
            result.pop()
        }
    }
    rec(target, [], 0)
    return results
};
// @lc code=end

