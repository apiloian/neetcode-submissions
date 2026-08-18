class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const sum = {};

        for(let i = 0; i < nums.length; i++) {
            const n = nums[i];
            if(sum[n] !== undefined) {
                return [sum[n], i];
            }

            const dif = target - n;
            sum[dif] = i;
        }
    }
}
