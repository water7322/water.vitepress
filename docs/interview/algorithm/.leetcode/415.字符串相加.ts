/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
    let carry = 0;
    let res = '';
    let index1 = num1.length - 1;
    let index2 = num2.length - 1;

    while (index1 >= 0 || index2 >= 0 || carry) {
        const sum = +(num1[index1] ?? 0) + +(num2[index2] ?? 0) + carry;
        res = (sum % 10) + res;
        carry = sum > 9 ? 1 : 0;
        index1--;
        index2--;
    }
    return res;
}
// @lc code=end
