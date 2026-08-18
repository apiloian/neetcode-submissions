class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;

        while(l <= r) {
            const midIndx = Math.floor((r + l) / 2);
            console.log(l, r, midIndx)
            if(nums[midIndx] === target) {
                return midIndx
            } else if(nums[midIndx] > target) {
                r = midIndx - 1;
            } else if(nums[midIndx] < target) {
                l = midIndx + 1;
            }
        }

        return -1;
    }
}
