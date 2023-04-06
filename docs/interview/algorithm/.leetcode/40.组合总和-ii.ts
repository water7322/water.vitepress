/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const results: number[][] = [];
    function rec(target: number, result: number[], initIndex: number) {
        if (target < 0) return;
        if (target === 0) {
            results.push(result.slice())
        }
        for (let i = initIndex; i < candidates.length; i++) {
            if (i > initIndex && candidates[i] === candidates[i - 1]) continue;
            result.push(candidates[i]);
            rec(target - candidates[i], result, i + 1);
            result.pop();
        }
    }
    rec(target, [], 0);
    return results;
}
// @lc code=end
