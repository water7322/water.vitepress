/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
    const m = matrix.length;
    const n = matrix[0].length;
    let max = 0;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === '1') {
                const min = Math.min(+matrix[i - 1][j - 1], +matrix[i][j - 1], +matrix[i - 1][j]);
                matrix[i][j] = min + 1 + '';
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            max = Math.max(max, +matrix[i][j]);
        }
    }
    return max * max;
}
// @lc code=end
