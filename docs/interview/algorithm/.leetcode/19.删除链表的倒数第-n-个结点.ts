/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode();
    dummy.next = head
    let node = dummy
    const len = getListLength(head)
    for (let i = 0; i < len - n; i++) {
        node = node.next
    }
    node.next = node.next.next
    return dummy.next
};

function getListLength(head: ListNode | null): number {
    let count = 0
    while (head) {
        count++
        head = head.next
    }
    return count
}
// @lc code=end

