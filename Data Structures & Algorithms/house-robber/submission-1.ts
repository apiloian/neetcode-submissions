class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if(nums.length < 2) {
            return nums[0];
        }

        const dp = new Array(nums.length);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for(let i = 2; i < dp.length; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }

        return dp[nums.length - 1];
    }
}
