/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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

function mergeKLists(
    lists: Array<ListNode | null>,
    start: number = 0,
    end: number = lists.length - 1
): ListNode | null {
    if (start >= end) return lists[start] ?? null;
    if (start + 1 === end) return merge2Lists(lists[start], lists[end]);
    const mid = Math.floor((start + end) / 2);
    return merge2Lists(mergeKLists(lists, start, mid), mergeKLists(lists, mid + 1, end));
}
function merge2Lists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let node = dummy;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            node.next = list2;
            list2 = list2.next;
        } else {
            node.next = list1;
            list1 = list1.next;
        }
        node = node.next;
    }
    node.next = list1 || list2;
    return dummy.next;
}
// @lc code=end
