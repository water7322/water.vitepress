/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
    const m = matrix.length;
    const n = matrix[0].length;
    const res: number[] = []
    let left = 0;
    let top = 0;
    let right = n - 1;
    let bottom = m - 1
    let i = 0;
    while (res.length < m * n) {
        for (i = left; i <= right && res.length < m * n; i++) {
            res.push(matrix[top][i])
        }
        top++
        for (i = top; i <= bottom && res.length < m * n; i++) {
            res.push(matrix[i][right])
        }
        right--
        for (i = right; i >= left && res.length < m * n; i--) {
            res.push(matrix[bottom][i])
        }
        bottom--
        for (i = bottom; i >= top && res.length < m * n; i--) {
            res.push(matrix[i][left])
        }
        left++
    }
    return res
};
// @lc code=end

