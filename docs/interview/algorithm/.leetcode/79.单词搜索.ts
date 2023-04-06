/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
    const m = board.length;
    const n = board[0].length;
    const len = word.length
    let bool = false;
    const dfs = (i, j, index) => {
        if (i < 0 || i === m || j < 0 || j === n || board[i][j] !== word[index] || bool) return;
        index++;
        if (index === len) bool = true
        board[i][j] = ''
        dfs(i - 1, j, index)
        dfs(i + 1, j, index)
        dfs(i, j - 1, index)
        dfs(i, j + 1, index)
        board[i][j] = word[index - 1]
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, 0)
        }
    }
    return bool
};
// @lc code=end

