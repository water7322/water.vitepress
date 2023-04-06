/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
    const tMap = {}
    for (const char of t) {
        tMap[char] = (tMap[char] ?? 0) + 1
    }
    let checkCount = Object.keys(tMap).length;
    let res = s + t;
    let slow = 0;
    for (let fast = 0; fast < s.length; fast++) {
        const fastItem = s[fast]
        if (tMap[fastItem] !== undefined) {
            tMap[fastItem]--
            if (tMap[fastItem] === 0) checkCount--
        }
        while (checkCount === 0) {
            if (fast - slow + 1 < res.length) {
                res = s.substring(slow, fast + 1)
            }
            const slowItem = s[slow]
            if (tMap[slowItem] !== undefined) {
                tMap[slowItem]++
                if (tMap[slowItem] === 1) checkCount++
            }
            slow++
        }
    }
    return res === s + t ? '' : res
};
// @lc code=end

