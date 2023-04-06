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
    let head1 = new ListNode();
    let head2 = new ListNode();
    let copy2 = head2;
    let node = head;
    while (node) {
        head1.next = node;
        head2.next = node.next;
        head1 = head1.next;
        head2 = head2.next;
        node = node?.next?.next;
    }
    head1.next = copy2.next;
    return head;
}
// @lc code=end
