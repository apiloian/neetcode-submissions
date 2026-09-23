class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        let l = 0;
        let r = 0;
        const elements = new Set();

        while(r < nums.length) {
            while(r < nums.length && (r - l) <= k) {
                if(elements.has(nums[r])){
                    return true
                }
                elements.add(nums[r]);
                r++
            }

            elements.delete(nums[l]);
            l++
        }

        return false;
    }
}
