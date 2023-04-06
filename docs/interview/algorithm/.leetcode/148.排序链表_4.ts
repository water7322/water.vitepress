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
    if (!head?.next) return head;
    const mid = getMidNode(head);
    const head2 = mid.next;
    mid.next = null;
    return mergeTwoList(sortList(head), sortList(head2));
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
