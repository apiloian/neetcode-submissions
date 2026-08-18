class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const dp = new Array(amount + 1).fill(amount + 1); 
        dp[0] = 0;

        for(let dpAmount = 1; dpAmount < dp.length; dpAmount++) {
            for(let j = 0; j < coins.length; j++) {
                const coin = coins[j];
                if(dpAmount - coin >= 0) {
                    dp[dpAmount] = Math.min(dp[dpAmount], 1 + dp[dpAmount - coin])
                }
            }
        }
        return dp[amount] === (amount + 1) ? -1 : dp[amount];
    }
}
