class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const res = [];
        candidates.sort();

        const curSet = [];
        function backtracking(idx, curSum) {
            if(curSum === target) {
                res.push([...curSet]);
                return;
            }

            if(curSum > target || idx >= candidates.length) {
                return;
            }
            
            curSet.push(candidates[idx]);
            backtracking(idx + 1, curSum + candidates[idx]);

            while(idx + 1 < candidates.length && candidates[idx] === candidates[idx + 1]) {
                idx++
            };
        
            curSet.pop()
            backtracking(idx + 1, curSum);
        }

        backtracking(0, 0);

        return res;
    }
}
