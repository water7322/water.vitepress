/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
    stack1: number[];
    stack2: number[];
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x: number): void {
        while (this.stack2.length) {
            const val = this.stack2.pop() as number;
            this.stack1.push(val);
        }
        this.stack1.push(x);
    }

    pop(): number {
        while (this.stack1.length) {
            const val = this.stack1.pop() as number;
            this.stack2.push(val);
        }
        return this.stack2.pop() as number;
    }

    peek(): number {
        return this.stack1[0] ?? this.stack2[this.stack2.length - 1];
    }

    empty(): boolean {
        return !(this.stack1.length + this.stack2.length);
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
