/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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

function rightSideView(root: TreeNode | null): number[] {
    const res: number[] = [];
    function dfs(node: TreeNode | null, depth: number) {
        if (!node) return null;
        res[depth] ??= node.val;
        dfs(node.right, depth + 1);
        dfs(node.left, depth + 1);
    }
    dfs(root, 0);
    return res;
}
// @lc code=end
