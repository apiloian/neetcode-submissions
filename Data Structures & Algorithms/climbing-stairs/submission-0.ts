class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        // 1 or 2
        if(n < 2) {
            return 1
        }
       const dp = new Array(n + 1);

       dp[0] = 1;
       dp[1] = 1;

       for(let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
       }

        console.log(dp)
       return dp[n];
       
    }
}
