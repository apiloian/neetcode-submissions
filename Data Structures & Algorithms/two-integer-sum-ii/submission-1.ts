class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let l = 0;
        let r = nums.length - 1;


        while(l < r) {
            if((nums[l] + nums[r]) === target) {
                return [l + 1, r + 1]
            } else if((nums[l] + nums[r]) > target) {
                r--;
            } else {
                l++
            }

        }
    }
}
