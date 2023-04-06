/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left === right) return head;
    const dummy = new ListNode();
    dummy.next = head;
    let node = dummy;
    for (let i = 1; i < left; i++) {
        node = node.next;
    }
    node.next = reverseList(node.next, right - left);
    return dummy.next;
}

function reverseList(head: ListNode | null, k: number): ListNode | null {
    let prev = null;
    let node = head;
    for (let i = 0; i < k + 1; i++) {
        const next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    head.next = node;
    return prev;
}
// @lc code=end
