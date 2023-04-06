/*
 * @lc app=leetcode.cn id=470 lang=typescript
 *
 * [470] 用 Rand7() 实现 Rand10()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

function rand10(): number {
    let res = 41;
    while (res > 40) {
        res = 7 * (rand7() - 1) + rand7();
    }
    // return Math.ceil(res / 4)
    return (res % 10) + 1;
}
// @lc code=end
