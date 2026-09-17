class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if(nums.length < 3) {
            return Math.max(nums[0], nums[1] ?? 0)
        }
        // with first without last
        const withoutFirst = nums.slice(1);
        const dp = new Array(withoutFirst.length);
        dp[0] = withoutFirst[0];
        dp[1] = Math.max(withoutFirst[0], withoutFirst[1])
        for(let i = 2; i < dp.length; i++) {
            dp[i] = Math.max(dp[i - 1], withoutFirst[i] + dp[i - 2]);
        }
        // with last without first
        nums.pop();
        const dp2 = new Array(nums.length);
        dp2[0] = nums[0];
        dp2[1] = Math.max(nums[0], nums[1])
        for(let i = 2; i < dp2.length; i++) {
            dp2[i] = Math.max(dp2[i - 1], nums[i] + dp2[i - 2]);
        }

        return Math.max(dp[dp.length - 1], dp2[dp2.length - 1]);
    }
}
