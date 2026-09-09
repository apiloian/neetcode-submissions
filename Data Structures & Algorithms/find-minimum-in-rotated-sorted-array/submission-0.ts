class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l = 0;
        let r = nums.length - 1;
        let res = nums[0];

        while(l <= r) {
            if(nums[l] < nums[r]) {
                res = Math.min(res, nums[l]);
                break;
            }

            const midIdx = Math.floor((r + l) / 2);
            res = Math.min(nums[midIdx], res);

            if(nums[l] <= nums[midIdx]) {
                l = midIdx + 1;
            } else {
                r = midIdx - 1;
            }
        }

        return res
    }
}
