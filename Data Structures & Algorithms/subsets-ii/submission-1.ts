class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res = [];
        nums.sort((a, b) => a - b);

        const curSet = []
        function backtracking(idx) {
            if(idx === nums.length) {
                res.push([...curSet])
                return;
            }

            curSet.push(nums[idx]);
            backtracking(idx + 1);


            while(idx + 1 < nums.length && nums[idx] === nums[idx + 1]) {
                idx += 1;
            }
            curSet.pop();
            backtracking(idx + 1);
        }

        backtracking(0)

        return res;
    }
}
