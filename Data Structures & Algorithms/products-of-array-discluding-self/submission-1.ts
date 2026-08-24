class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const res1 = new Array(nums.length).fill(1);

        let prefixSum = 1;
        for(let i = 0; i < nums.length; i++) {
            res1[i] = prefixSum;
            prefixSum = prefixSum * nums[i];
        }

        let postfixSum = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            res1[i] = postfixSum * res1[i];
            postfixSum = postfixSum * nums[i];
        }


        return res1;
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
