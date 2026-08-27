/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {

        let res = 0;
        let count = 0;

        const starts = intervals.map((i) => i.start).sort((a, b) => a - b);
        const ends = intervals.map((i) => i.end).sort((a, b) => a - b);
        let s = 0;
        let e = 0;

        while(s < intervals.length) {
             if(starts[s] < ends[e]) {
                s++
                count++
            } else {
                e++
                count--;
            }

            res = Math.max(count, res);
        }

        return res
    }
}
