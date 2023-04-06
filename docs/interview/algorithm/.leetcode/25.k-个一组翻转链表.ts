/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

 function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let prev = dummy
    while (prev.next) {
        let head = prev.next;
        let tail = prev;
        for (let i = 0; i < k; i++) {
            tail = tail?.next;
        }
        if (!tail) break;
        const next = tail.next;
        tail.next = null;
        [head, tail] = reverseList(head)
        prev.next = head;
        tail.next = next;
        prev = tail;
    }
    return dummy.next;
};

function reverseList(head) {
    let node = head;
    let prev = null;
    while (node) {
        const next = node.next;
        node.next = prev;
        prev = node;
        node = next
    }
    return [prev, head]
}
// @lc code=end

