class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        const dp = {};

        function backtracking(idx, curSum) {
            if(idx === nums.length) {
                return curSum === target ? 1 : 0
            }
            const key = `${idx}_${curSum}`
            if(dp[key] !== undefined) {
                return dp[key]
            }

            dp[key] = (
                backtracking(idx + 1, curSum + nums[idx]) + backtracking(idx + 1, curSum - nums[idx])
            )

            return dp[key]
        }


        return backtracking(0, 0)

    }
}
