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
    const minTop = new MinTop(lists);
    const dummy = new ListNode();
    let node = dummy;
    while (minTop.checkTop()) {
        const minNode = minTop.getTop();
        node.next = minNode;
        node = node.next;
    }
    return dummy.next;
}
class MinTop {
    arr: Array<ListNode | null>;
    constructor(lists: Array<ListNode | null>) {
        this.arr = [];
        for (const list of lists) {
            this.add(list);
        }
    }
    add(list: ListNode | null) {
        if (!list) return;
        this.arr.push(list);
        this.up(this.arr.length - 1);
    }
    swap(index1: number, index2: number) {
        const arr = this.arr;
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
    getParentIndex(index: number) {
        return Math.floor((index - 1) / 2);
    }
    up(index: number) {
        const arr = this.arr;
        const parentIndex = this.getParentIndex(index);
        if (arr[index]?.val < arr[parentIndex]?.val) {
            this.swap(index, parentIndex);
            this.up(parentIndex);
        }
    }
    down(index: number) {
        const arr = this.arr;
        const i = index * 2 + 1;
        const j = index * 2 + 2;
        let k = i;
        if (!arr[i] || arr[i]?.val > arr[j]?.val) k = j;
        if (!arr[k]) return;
        if (arr[index] && arr[index].val <= arr[k]?.val) return;
        this.swap(index, k);
        this.down(k);
    }
    checkTop(): boolean {
        const topNode = this.arr[0];
        return !!topNode;
    }
    getTop(): ListNode | null {
        const topNode = this.arr[0];
        this.arr[0] = topNode.next;
        this.down(0);
        return topNode;
    }
}
// @lc code=end
