class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        let res = 0;

        while(n) {
            // check if after modulo has 1 it means the number is 1,3,5,7... and it has 1, or it 2,4,6,8
            res += n % 2;


            // 000000010111 move to [00000001011] 1 removed the last number
            n = n >> 1
        }

        return res
    }
}
