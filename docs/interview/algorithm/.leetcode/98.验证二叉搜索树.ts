/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
    const stack: TreeNode[] = [];
    let node = root;
    let prev = -Infinity;
    while (stack.length || node) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        if (node.val <= prev) return false;
        prev = node.val;
        node = node.right;
    }
    return true;
}
// @lc code=end
