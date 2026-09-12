class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const dp = {};

        function dfsMaxProfit(idx: number, buying: boolean) {
            if(idx >= prices.length) {
                return 0;
            }

            const key = `${idx}_${buying}`;

            if(dp[key] !== undefined) {
                return dp[key];
            }

            const profitIfYouJustWait = dfsMaxProfit(idx + 1, buying);
            if(buying) { // because you have only 2 choices buy or sell
                // calc for buying
                const profitIfYouBuyAtThisPoint = dfsMaxProfit(idx + 1, !buying) - prices[idx];

                dp[key] = Math.max(profitIfYouBuyAtThisPoint, profitIfYouJustWait);
            } else {
                const sellAndGetProfit = prices[idx] + dfsMaxProfit(idx + 2, !buying);
                
                dp[key] = Math.max(sellAndGetProfit, profitIfYouJustWait)
            }

            return dp[key]
        }

        return dfsMaxProfit(0, true) // we can not sell without buying
    }
}
