/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUCache {
    capacity: number;
    head: MyListNode;
    tail: MyListNode;
    map: Map<number, MyListNode>;
    constructor(capacity: number) {
        this.map = new Map();
        this.capacity = capacity;
        this.head = new MyListNode();
        this.tail = new MyListNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        const node = this.map.get(key);
        if (!node) return -1;
        this.moveToTail(node);
        return node.value;
    }

    put(key: number, value: number): void {
        const node = this.map.get(key);
        if (node) {
            this.map.delete(key);
            this.removeNode(node);
        } else if (this.map.size === this.capacity) {
            this.map.delete((this.head.next as MyListNode).key);
            this.removeNode(this.head.next as MyListNode);
        }
        const newNode = new MyListNode(key, value);
        this.map.set(key, newNode);
        this.addToTail(newNode);
    }

    addToTail(node: MyListNode) {
        node.prev = this.tail.prev;
        this.tail.prev = node;
        (node.prev as MyListNode).next = node;
        node.next = this.tail;
    }

    removeNode(node: MyListNode) {
        (node.prev as MyListNode).next = node.next;
        (node.next as MyListNode).prev = node.prev;
    }

    moveToTail(node: MyListNode) {
        this.removeNode(node);
        this.addToTail(node);
    }
}
class MyListNode {
    key: number;
    value: number;
    prev: MyListNode | null;
    next: MyListNode | null;
    constructor(key?, value?, prev = null, next = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
