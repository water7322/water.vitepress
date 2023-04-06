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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    while (lists.length > 1) {
        const list1 = lists.pop();
        const list2 = lists.pop();
        lists.push(merge2Lists(list1, list2));
    }
    return lists[0] ?? null;
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
