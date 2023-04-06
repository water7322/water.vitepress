function ListNode(val) {
    this.val = val;
    this.next = null;
}
function createList(...arr) {
    const n = arr.length;
    const list = [];
    list[n] = null;
    for (let i = n - 1; i >= 0; i--) {
        list[i] = new ListNode(arr[i]);
        list[i].next = list[i + 1];
    }
    return list[0];
}
const head = createList(1, 2, 3, 3, 4, 4, 5);
console.log(head);

function ListNode(val) {
    this.val = val ?? 0;
    this.next = null;
}
function List(...nums) {
    if (!nums.length) return null;
    const head = new ListNode(nums[0]);
    let prev = head;
    for (let i = 1; i < nums.length; i++) {
        prev.next = new ListNode(nums[i]);
        prev = prev.next;
    }
    return head;
}
const head2 = List(1, 2, 3, 4, 5, 6, 7);
console.log(head2);
