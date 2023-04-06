/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
    let i = 0;
    let j = 0
    while (version1[i] || version2[j]) {
        let str1 = ''
        let str2 = ''
        while (version1[i] !== '.' && version1[i]) {
            str1 += version1[i++]
        }
        while (version2[j] !== '.' && version2[j]) {
            str2 += version2[j++]
        }
        if (+str1 > +str2) return 1
        if (+str1 < +str2) return -1
        i++
        j++
    }
    return 0
};
// @lc code=end
