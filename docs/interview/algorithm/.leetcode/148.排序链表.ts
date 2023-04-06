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
    if (!head) return head;
    const arr: ListNode[] = [];
    while (head) {
        const next = head.next;
        arr.push(head);
        head.next = null;
        head = next;
    }
    arr.sort((a, b) => a.val - b.val);
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1].next = arr[i];
    }
    return arr[0];
}
// @lc code=end
