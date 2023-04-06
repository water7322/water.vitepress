/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * [328] 奇偶链表
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
function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let node1 = head;
    let node2 = head?.next;
    let head2 = node2;
    while (node1?.next?.next) {
        node1.next = node1.next?.next;
        node2.next = node2.next?.next;
        node1 = node1.next;
        node2 = node2.next;
    }
    node1.next = head2;
    return head;
}
// @lc code=end
