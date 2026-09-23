class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let l = 0;
        let r = 0;
        let minLen = Infinity;
        let curSum = 0;
        while(r <= nums.length) {
            while(target <= curSum) {
                minLen = Math.min(r - l, minLen);
                
                curSum -= nums[l];
                l++;
            }

            curSum += nums[r];
            r++;
        }

        return minLen === Infinity ? 0 : minLen;
    }
}
