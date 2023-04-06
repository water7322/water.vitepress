/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
    let res = 0;
    const arr = JSON.parse(JSON.stringify(grid));
    const m = grid.length;
    const n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] === '1') {
                res++;
                dfs(i, j);
            }
        }
    }

    function dfs(i: number, j: number) {
        if (!arr[i]?.[j]) return;
        if (arr[i][j] === '0') return;
        arr[i][j] = '0';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    return res;
}
// @lc code=end
