/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if(intervals.length <= 1) {
            return true;
        }
        intervals.sort((a, b) => a.start - b.start)
        let curMeeting = intervals[0];
        for(let i = 1; i < intervals.length; i++) {
            const intrval = intervals[i];
            if(curMeeting.end > intrval.start) {
                return false;
            }
            curMeeting = intervals[i];
        }

        return true;
    }
}

