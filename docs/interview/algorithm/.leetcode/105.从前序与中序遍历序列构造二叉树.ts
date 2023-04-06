/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let i = 0;
    function rec(start, end) {
        if (start > end) return null;
        const val = preorder[i++];
        const node = new TreeNode(val);
        const index = inorder.indexOf(val);
        node.left = rec(start, index - 1);
        node.right = rec(index + 1, end);
        return node;
    }
    return rec(0, inorder.length - 1);
}
// @lc code=end
