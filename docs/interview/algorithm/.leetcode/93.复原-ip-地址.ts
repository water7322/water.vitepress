/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
    const res: string[] = [];
    function rec(str, subStr, i, count) {
        if (subStr > 255 || count === 5 || (subStr[0] === '0' && subStr.length > 1)) return;
        if (count > 1) {
            str += '.' + subStr;
        } else {
            str = subStr;
        }
        if (count === 4 && i === s.length) res.push(str);
        rec(str, s.substr(i, 1), i + 1, count + 1);
        rec(str, s.substr(i, 2), i + 2, count + 1);
        rec(str, s.substr(i, 3), i + 3, count + 1);
    }
    rec('', '', 0, 0);

    return res;
}
// @lc code=end
