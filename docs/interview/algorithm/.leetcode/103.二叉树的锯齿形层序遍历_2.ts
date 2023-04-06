/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    function dfs(node: TreeNode, deep: number) {
        if (!node) return;
        result[deep] ??= [];
        if (deep % 2 === 0) {
            result[deep].push(node.val);
        } else {
            result[deep].unshift(node.val);
        }
        dfs(node.left, deep + 1);
        dfs(node.right, deep + 1);
    }
    dfs(root, 0);
    return result;
}
// @lc code=end
