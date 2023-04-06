/*
 * @lc app=leetcode.cn id=695 lang=typescript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
function maxAreaOfIsland(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let max = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, getSum(grid, i, j));
            }
        }
    }
    return max;
}
function getSum(grid, i, j) {
    let sum = 0;
    function bfs(grid, i, j) {
        if (grid?.[i]?.[j] !== 1) return;
        sum++;
        grid[i][j] = 0;
        bfs(grid, i - 1, j);
        bfs(grid, i, j - 1);
        bfs(grid, i + 1, j);
        bfs(grid, i, j + 1);
    }
    bfs(grid, i, j);
    return sum;
}
// @lc code=end
