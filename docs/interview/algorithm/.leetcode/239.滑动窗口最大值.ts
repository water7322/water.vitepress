/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
    const res = [];
    const maxHeap = new MaxHeap();
    for (let i = 0; i < nums.length; i++) {
        maxHeap.add(nums[i], i);
        while (maxHeap.arr[0]?.index <= i - k) {
            maxHeap.pop();
        }
        if (i >= k - 1) res.push(maxHeap.arr[0].val);
    }
    return res;
}

class MaxHeap {
    arr: Array<{ val: number; index: number }>;
    constructor() {
        this.arr = [];
    }
    add(val, index) {
        this.arr.push({ val, index });
        this.up(this.arr.length - 1);
    }
    swap(i, j) {
        const arr = this.arr;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    getParentIndex(i) {
        if (i === 0) return 0;
        return Math.floor((i - 1) / 2);
    }
    up(i) {
        const arr = this.arr;
        const parentIndex = this.getParentIndex(i);
        if (arr[i].val > arr[parentIndex].val) {
            this.swap(i, parentIndex);
            this.up(parentIndex);
        }
    }
    down(index) {
        const arr = this.arr;
        const i = index * 2 + 1;
        const j = index * 2 + 2;
        let k = i;
        if (arr[i]?.val < arr[j]?.val) k = j;
        if (k >= arr.length) return;
        if (arr[index].val >= arr[k].val) return;
        this.swap(index, k);
        this.down(k);
    }
    pop() {
        const arr = this.arr;
        const n = arr.length;
        [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
        arr.pop();
        this.down(0);
    }
}
// @lc code=end
