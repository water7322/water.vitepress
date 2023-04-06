/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let prev = dummy;
    let node = head;
    let bool = false;
    while (node) {
        if (node.val === node.next?.val) {
            node = node.next;
            bool = true;
        } else {
            if (!bool) {
                prev.next = node;
                prev = node;
            }
            bool = false;
            node = node.next;
        }
    }
    prev.next = null;
    return dummy.next;
}
// @lc code=end
