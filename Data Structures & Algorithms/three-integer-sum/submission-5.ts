class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // [-1,0,1,2,-1,-4]
        nums.sort((a, b) => a - b);

        // [-4, -1, -1, 0, 1, 2]
        const res = [];
        
        for(let i = 0; i < nums.length; i++) {
            if(i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            let l = i + 1;
            let r = nums.length - 1;

            while(l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if(sum === 0) {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++
                    while((nums[l] === nums[l - 1]) && l < r) {
                        l++
                    }
                } else if (sum > 0) {
                    r--
                } else {
                    l++
                }
            }

        }

        return res;
    }
}
