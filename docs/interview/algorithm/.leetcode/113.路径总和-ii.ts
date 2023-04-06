/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const results: number[][] = [];
    const result: number[] = [];
    function dfs(node: TreeNode | null, targetSum: number) {
        if (!node) return;
        targetSum -= node.val;
        result.push(node.val);
        if (!node.left && !node.right && targetSum === 0) {
            results.push(result.slice());
        }
        dfs(node.left, targetSum);
        dfs(node.right, targetSum);
        result.pop();
    }
    dfs(root, targetSum);
    return results;
}
// @lc code=end
