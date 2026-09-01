class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        if(cost.length < 1) {
            return cost[0]
        }
        const dp = new Array(cost.length);
        dp[0] = cost[0];
        dp[1] = cost[1];

        for(let i = 2; i < dp.length; i++) {
            dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
        }

        return Math.min(dp[dp.length - 1], dp[dp.length - 2])
    }
}
