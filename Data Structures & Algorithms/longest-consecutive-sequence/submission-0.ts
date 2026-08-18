class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let maxSeq = 0;
        const setOfNums = new Set(nums);

        for(let i = 0; i < nums.length; i++) {
            const n = nums[i];

            if(setOfNums.has(n - 1)) {
                continue;
            }

            let curSeq = 1;
            while(setOfNums.has(n + curSeq)) {
                curSeq++
            }

            maxSeq = Math.max(curSeq, maxSeq);
        }

        return maxSeq
    }
}
