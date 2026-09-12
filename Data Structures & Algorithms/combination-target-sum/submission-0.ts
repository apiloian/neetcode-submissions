class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = [];

        const curCombinations = [];

        function backtracking(idx, curSum) {
            if(idx >= nums.length || curSum > target) {
                return
            }

            if(curSum === target) {
                res.push([...curCombinations])
                return;
            }

            curCombinations.push(nums[idx]);
            backtracking(idx, curSum + nums[idx]);

            curCombinations.pop();
            backtracking(idx + 1, curSum);

        }
        backtracking(0, 0) // idx, sum/total
        return res;
    }
}
