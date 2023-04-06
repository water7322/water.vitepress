/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
    const minTop = new MinTop(nums, k);
    return minTop.arr[0];
}

class MinTop {
    arr: number[];
    max: number;
    constructor(nums, k) {
        this.arr = [];
        this.max = k;
        for (const num of nums) {
            this.add(num);
        }
    }
    add(num) {
        if (this.arr.length < this.max) {
            this.arr.push(num);
            this.up(this.arr.length - 1);
        } else if (this.arr[0] < num) {
            this.arr[0] = num;
            this.down(0);
        }
    }
    swap(index1, index2) {
        const arr = this.arr;
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    up(index) {
        if (index === 0) return;
        const arr = this.arr;
        const parentIndex = this.getParentIndex(index);
        if (arr[index] < arr[parentIndex]) {
            this.swap(index, parentIndex);
            this.up(parentIndex);
        }
    }
    down(index) {
        const arr = this.arr;
        const i = index * 2 + 1;
        const j = index * 2 + 2;
        let k = i;
        if (arr[i] > arr[j]) k = j;
        if (arr[index] <= arr[k]) return;
        if (k >= this.max) return;
        this.swap(index, k);
        this.down(k);
    }
}
// @lc code=end
