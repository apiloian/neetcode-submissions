class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        // DP
        // const dp = new Array(nums.length).fill(false);
        // dp[0] = true;

        // for(let i = 0; i < nums.length; i++) {
        //     if(!dp[i]) {
        //         continue;
        //     }

        //     for(let step = 1; step <= nums[i]; step++) {
        //         const jumpedPosition = i + step;
        //         if(jumpedPosition >= nums.length) {
        //             break;
        //         }
        //         dp[jumpedPosition] = true;
        //     }
        // }

        // return dp[dp.length - 1];

        // GREEDY
        // [1,2,1,0,1] can I achive the goal? from the prev(s) position(s)
        let t = nums.length - 1;

        for(let i = nums.length - 1; i >= 0; i--) {
        // idx + jumps become max index
            const maxIdx = i + nums[i];


            if(maxIdx >= t) {
                // we can jump to the goal from this position it means we can change the goal to the current idx
                t = i;
            }
        }

        return t === 0 ? true : false
    }
}
