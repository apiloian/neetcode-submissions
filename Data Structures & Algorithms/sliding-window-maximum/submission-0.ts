class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const queueIdxs = [];
        const res = [];
        let l = 0;

        for(let r = 0; r < nums.length; r++) {
            while(queueIdxs.length && nums[queueIdxs[queueIdxs.length - 1]] < nums[r]) {
                // pop from the last
                queueIdxs.pop();
            }

            queueIdxs.push(r); // push idx not the value

            // as I store the idx if the INDEX at first position in the queue smaller then the Left pointer
            if(l > queueIdxs[0]) {
                queueIdxs.shift(); // then pop from left
            }

            // after the r >= k we each iteration we start the count!
            if(r + 1 >= k) {
                res.push(nums[queueIdxs[0]])
                l++
            }
        }

        return res
    }
}
