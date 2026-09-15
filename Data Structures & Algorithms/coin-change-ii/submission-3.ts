class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount: number, coins: number[]): number {
        // const cache = {};
        // function backtracking(idx, curSum) {
        //     if(curSum === amount) {
        //         return 1;
        //     }

        //     if(curSum > amount || idx >= coins.length) {
        //         return 0
        //     }
        //     const key = `${idx}_${curSum}`;
        //     if(cache[key]) {
        //         return cache[key]
        //     }

        //     const t = backtracking(idx, curSum + coins[idx]);

        //     const s = backtracking(idx + 1, curSum);
            
        //     cache[key] = s + t;
        //     return cache[key];
        // }

        
        // return backtracking(0, 0);


        const dp = Array.from({ length: amount + 1 }, () => new Array(coins.length + 1).fill(0));
        dp[0] = new Array(coins.length + 1).fill(1)
        console.log(dp);


        for(let i = 1; i <= amount; i++) {
            for(let j = coins.length - 1; j >= 0; j--) {
                dp[i][j] = dp[i][j + 1];

                if(i - coins[j] >= 0) {
                    dp[i][j] += dp[i - coins[j]][j]
                }
            }
        }

        return dp[amount][0];
    }
}
