class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount: number, coins: number[]): number {
        const cache = {};
        function backtracking(idx, curSum) {
            if(curSum === amount) {
                return 1;
            }

            if(curSum > amount || idx >= coins.length) {
                return 0
            }
            const key = `${idx}_${curSum}`;
            if(cache[key]) {
                return cache[key]
            }

            const t = backtracking(idx, curSum + coins[idx]);

            const s = backtracking(idx + 1, curSum);
            
            cache[key] = s + t;
            return cache[key];
        }

        
        return backtracking(0, 0);;

    }
}
