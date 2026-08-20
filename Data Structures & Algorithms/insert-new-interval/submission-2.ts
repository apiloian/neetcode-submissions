class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        const res = [];

        for(let i = 0; i < intervals.length; i++) {
            const [start, end] = intervals[i];
            if(end < newInterval[0]) {
                res.push(intervals[i])
            } else if(start > newInterval[1]) {
                res.push(newInterval);
                console.log('here2')
                return res.concat(intervals.slice(i));
            } else {
                newInterval = [Math.min(start, newInterval[0]), Math.max(end, newInterval[1])]
            }
        }
        res.push(newInterval);

        return res;
    }
}
