class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        // 0: 000000 
        // 1: 000001 
        // 2: 000010
        // 3: 000011
        // 4: 000100
        // 5: 000101
        // 6: 000110
        // 7: 000111
        // 8: 001000
        // 9: 001001

        // so use dp and offset to calculate or use kind of memoization


        const dp = new Array(n + 1).fill(0);
        let offset = 1;


        for(let i = 1; i < n + 1; i++) {
            offset = (2 * offset === i) ? i : offset;

            dp[i] = 1 + dp[i - offset]
        }

        return dp

    }
}
