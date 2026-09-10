class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        let res = 0;
        let l = 0;
        let r = 0;

        while(r < nums.length - 1) {
            console.log(nums[l], nums[r])
            let maxDistance = 0; 
            for(let i = l; i <= r; i++) {
                maxDistance = Math.max(maxDistance, nums[i]);
            }
            l = r + 1;
            r = r + maxDistance;
            console.log('here', l, r)
            res++;
        }

        return res;
    }
}
