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
    const dummy = new ListNode(0, head);
    const n = getLen(head);
    for (let subLength = 1; subLength < n; subLength *= 2) {
        let prev = dummy;
        let node = prev.next;
        while (node) {
            const currHead1 = curList(node, subLength);
            const currHead2 = curList(currHead1, subLength);
            prev.next = mergeTwoList(node, currHead1);
            node = currHead2;
            while (prev.next) {
                prev = prev.next;
            }
        }
    }
    return dummy.next;
}
function getLen(head: ListNode | null): number {
    let count = 0;
    while (head) {
        count++;
        head = head.next;
    }
    return count;
}
function curList(head: ListNode | null, n: number): ListNode | null {
    if (!head) return head;
    for (let i = 1; i < n && head.next; i++) {
        head = head.next;
    }
    const next = head.next;
    head.next = null;
    return next;
}
function mergeTwoList(head: ListNode | null, head2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let node = dummy;
    while (head && head2) {
        if (head.val > head2.val) {
            node.next = head2;
            head2 = head2.next;
        } else {
            node.next = head;
            head = head.next;
        }
        node = node.next;
    }
    node.next = head ?? head2;
    return dummy.next;
}
// @lc code=end
