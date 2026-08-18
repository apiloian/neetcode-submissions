class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intrv: number[][]): number[][] {
        intrv.sort((a, b) => a[0] - b[0])
        const res = [];
        let curIntrv = intrv[0];
        // [s, e] [s2, e2]

        for(let i = 1; i < intrv.length; i++) {
            console.log('s', intrv[i])
            const [start, end] = intrv[i];
            if(curIntrv[0] > end) {
                res.push(intrv[i]);
            } else if(start > curIntrv[1]) {
                res.push(curIntrv);
                curIntrv = intrv[i];
            } else {
                curIntrv = [Math.min(curIntrv[0], start), Math.max(curIntrv[1], end)]
            }
        }

        res.push(curIntrv)
    return res;

    }
}
