/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    const res: string[] = [];
    function rec(str: string, x: number, y: number) {
        if (x > y || x < 0) return;
        if (y === 0) res.push(str);
        rec(str + '(', x - 1, y);
        rec(str + ')', x, y - 1);
    }
    rec('', n, n);
    return res;
}

// @lc code=end
