/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    const mid = getMidNode(head);
    const list2 = reverseList(mid.next);
    mid.next = null;
    merge2list(head, list2);
}
function merge2list(list1: ListNode | null, list2: ListNode | null) {
    while (list2) {
        const next1 = list1.next;
        const next2 = list2.next;
        list1.next = list2;
        list2.next = next1;
        list1 = next1;
        list2 = next2;
    }
}
function getMidNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;
    while (fast?.next?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    while (head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
// @lc code=end
