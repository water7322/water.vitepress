/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumNumbers(root: TreeNode | null): number {
    let res = 0;
    function dfs(node: TreeNode | null, num: string) {
        if (!node) return;
        num += node.val;
        if (!node.left && !node.right) res += +num;
        dfs(node.left, num);
        dfs(node.right, num);
    }
    dfs(root, '');
    return res;
}
// @lc code=end
