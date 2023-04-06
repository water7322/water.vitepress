/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let nodeA = headA;
    let nodeB = headB;
    while (nodeA !== nodeB) {
        nodeA = nodeA ? nodeA.next : headB;
        nodeB = nodeB ? nodeB.next : headA;
    }
    return nodeA;
}
// @lc code=end
