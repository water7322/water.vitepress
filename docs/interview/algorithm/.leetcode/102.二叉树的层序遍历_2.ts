/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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
function levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = [];
    function dfs(node, deep) {
        if (!node) return;
        res[deep] ??= [];
        res[deep].push(node.val);
        dfs(node.left, deep + 1);
        dfs(node.right, deep + 1);
    }
    dfs(root, 0);
    return res;
}
// @lc code=end
