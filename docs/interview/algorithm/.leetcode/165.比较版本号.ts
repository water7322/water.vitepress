/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
    const arr1 = version1.split('.');
    const arr2 = version2.split('.');
    const m = arr1.length;
    const n = arr2.length;
    for (let i = 0; i < Math.max(m, n); i++) {
        arr1[i] ??= '0';
        arr2[i] ??= '0';
        if (+arr1[i] > +arr2[i]) return 1;
        if (+arr1[i] < +arr2[i]) return -1;
    }
    return 0;
}
// @lc code=end
