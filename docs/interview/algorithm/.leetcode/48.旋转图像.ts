/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;
    matrix.reverse();
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
        }
    }
}
// @lc code=end
