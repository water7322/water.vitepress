/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

 function swapPairs(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0, head);
    let prev = dummy;
    while (prev.next?.next) {
        let tail = prev.next.next
        prev.next.next = tail.next;
        tail.next = prev.next;
        prev.next = tail;
        prev = tail.next
    }
    return dummy.next
};
// @lc code=end

