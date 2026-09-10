class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if(!nums.length) {
            return -1;
        }

        let l = 0;
        let r = nums.length - 1;

        while(l <= r) {
            const midIdx = Math.floor((l + r) / 2);
            console.log("midI", midIdx, l , r)
            if(nums[midIdx] === target) {
                return midIdx;
            }

            if(nums[midIdx] >= nums[l]) {
                if(nums[midIdx] < target || nums[l] > target) {
                    l = midIdx + 1;
                } else {
                    r = midIdx - 1;
                }
            } else {
                if(target < nums[midIdx] || target > nums[r]) {
                    r = midIdx - 1
                } else {
                    l = midIdx + 1
                }
            }
        }

        return -1;
    }
}


// nums = [3,4,5,6,1,2], target = 1
// l = 3
// r = 2
// m = 5 === 1 return
// 5 >= 1 l > t
            // [m, r]

        

