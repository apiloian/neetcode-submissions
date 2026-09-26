class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const ans = new Array();
        const n = nums.length;

        for(let i = 0; i < n; i++) {
            ans[i] = nums[i];
            console.log('second', i , i + n)
            ans[i + n] = nums[i]
        }
        return ans 
    }
}
