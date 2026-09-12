class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let res = [];

        const subSet = [];

        function backTracking(idx) {
            if(idx === nums.length) {
                res.push([...subSet]);
                return;
            }

            subSet.push(nums[idx]);
            backTracking(idx + 1);

            subSet.pop();
            backTracking(idx + 1);
        }

        backTracking(0);

        return res;
    }
}
