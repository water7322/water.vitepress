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

function buildTree(
    preorder: number[],
    inorder: number[],
    start: number = 0,
    end: number = inorder.length - 1,
    i: number = 0
): TreeNode | null {
    if (start > end) return null;
    const node = new TreeNode(preorder[i]);
    const index = inorder.indexOf(preorder[i]);
    node.left = buildTree(preorder, inorder, start, index - 1, i + 1);
    node.right = buildTree(preorder, inorder, index + 1, end, index - start + 1 + i);
    return node;
}

// @lc code=end
