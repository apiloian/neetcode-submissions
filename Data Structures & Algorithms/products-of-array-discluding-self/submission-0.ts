class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // prefix - []
        // postfix - []
        // output
        const prefix = [1];
        const postfix = [];
        postfix[nums.length - 1] = 1;

        const res = [];


        // prefix[i] = product of everything before i
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        // postfix[i] = product of everything after i
        for (let i = nums.length - 2; i >= 0; i--) {
            postfix[i] = postfix[i + 1] * nums[i + 1];
        }

        // combine left side * right side
        for (let i = 0; i < nums.length; i++) {
            res[i] = prefix[i] * postfix[i];
        }

        return res

    }
}
