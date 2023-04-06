/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const length1 = nums1.length;
    const length2 = nums2.length;
    const k = Math.ceil((length1 + length2) / 2)
    if ((length1 + length2) % 2 === 1) return getKth(nums1, nums2, k)
    return (getKth(nums1, nums2, k) + getKth(nums1, nums2, k + 1)) / 2
};

function getKth(nums1: number[], nums2: number[], k: number): number {
    const length1 = nums1.length;
    const length2 = nums2.length;
    let offset1 = 0;
    let offset2 = 0
    while (1) {
        if (offset1 === length1) return nums2[k + offset2 - 1]
        if (offset2 === length2) return nums1[k + offset1 - 1]
        if (k === 1) return Math.min(nums2[offset2], nums1[offset1])
        let m = Math.min(Math.floor(k / 2), length1 - offset1, length2 - offset2)
        if (nums1[m + offset1 - 1] > nums2[m + offset2 - 1]) {
            offset2 += m
        } else {
            offset1 += m
        }
        k -= m
    }
}
// @lc code=end

