class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxS = 0;

        let l = 0; 
        let r = heights.length - 1;

        while(l <= r) {
            maxS = Math.max(maxS, (r - l) * Math.min(heights[r], heights[l]));

            if(heights[l] > heights[r]) {
                r--;
            } else {
                l++
            }
        }

        return maxS;
    }
}
