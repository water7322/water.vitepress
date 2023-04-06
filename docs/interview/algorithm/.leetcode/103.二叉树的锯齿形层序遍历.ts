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
    if (!root) return [];
    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    let bool = false;
    while (queue.length) {
        const arr = queue.map((node) => node.val);
        if (bool) {
            arr.reverse();
        }
        result.push(arr);
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        bool = !bool;
    }
    return result;
}
// @lc code=end
