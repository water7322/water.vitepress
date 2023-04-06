/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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

function sortList(head: ListNode | null): ListNode | null {
    if (!head?.next) return head;
    const smallHead = new ListNode();
    let small = smallHead;
    const largeHead = new ListNode();
    let large = largeHead;
    const mid = head;
    let node = head.next;
    while (node) {
        if (node.val > mid.val) {
            large.next = node;
            large = node;
        } else {
            small.next = node;
            small = node;
        }
        node = node.next;
    }
    small.next = null;
    large.next = null;
    large = sortList(largeHead.next);
    mid.next = large;
    if (!smallHead.next) return mid;
    const curHead = sortList(smallHead.next);
    node = curHead;
    while (node?.next) {
        node = node.next;
    }
    node.next = mid;
    return curHead;
}
// @lc code=end
