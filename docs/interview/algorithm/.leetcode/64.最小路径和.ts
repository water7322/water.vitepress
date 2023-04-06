/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue
            grid[i][j] += Math.min(grid[i - 1]?.[j] ?? Infinity, grid[i]?.[j - 1] ?? Infinity)
        }
    }
    return grid[m - 1][n - 1]
};
// @lc code=end

