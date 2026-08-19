class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        const map = { 0: 1 };
        let curSum = 0;
        let res = 0;

        for(let i = 0; i < nums.length; i++) {
            curSum = curSum + nums[i]
            const diff = curSum - k;

            if(map[diff] !== undefined) {
                res = res + map[diff] || 0;
            }

            map[curSum] = (map[curSum] || 0) + 1;
        }

        return res
    }
}
