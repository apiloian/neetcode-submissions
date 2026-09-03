class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;
        while(l <= r) {
            const midValue = Math.floor((r + l) / 2);
            let hours = 0;
            for(const p of piles) {
                hours += Math.ceil(p / midValue);
            }

            if(hours <= h) {
                res = Math.min(res, midValue);
                r = midValue - 1;
            } else {
                l = midValue + 1;
            }
        }

        return res;
    }
}
