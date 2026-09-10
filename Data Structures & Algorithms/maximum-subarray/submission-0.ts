class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let maxSum = nums[0];
        let curSum = 0;

        for(const n of nums) {
            if(curSum < 0) {
                curSum = 0
            }
            curSum += n;
            maxSum = Math.max(maxSum, curSum);
        }

        return maxSum;
    }
}
