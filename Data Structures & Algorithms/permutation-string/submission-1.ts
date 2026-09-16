class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // array track counts
    // count items
    // l r
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length > s2.length) {
            return false;
        }

        const s1Counts = new Array(26).fill(0);
        const s2Counts = new Array(26).fill(0);
        const aCodeIdxPosition = 'a'.charCodeAt(0);

        // fill window |____| with len s1, then for rest will loop by sliding window
        for(let i = 0; i < s1.length; i++) {
            const s1Key = s1.charCodeAt(i) - aCodeIdxPosition;
            const s2Key = s2.charCodeAt(i) - aCodeIdxPosition
            s1Counts[s1Key] += 1;
            s2Counts[s2Key] += 1;
        }

        let matches = 0;
        let l = 0;
        for(let i = 0; i < 26; i++) {
            if(s1Counts[i] === s2Counts[i]) {
                matches += 1;
            }
        }

        for(let r = s1.length; r < s2.length; r++) {
            if(matches === 26) {
                return true
            }

            // add r
            const idxR = s2.charCodeAt(r) - aCodeIdxPosition; // idx position in Array
            s2Counts[idxR] += 1;

            if(s1Counts[idxR] === s2Counts[idxR]) {
                matches += 1;
            } else if (s1Counts[idxR] + 1 === s2Counts[idxR]) { // check if they was matched before
                matches -= 1;
            }

            // remove l
            const idxL = s2.charCodeAt(l) - aCodeIdxPosition; // idx position in Array
            s2Counts[idxL] -= 1;
             if(s1Counts[idxL] === s2Counts[idxL]) {
                matches += 1;
            } else if (s1Counts[idxL] - 1 === s2Counts[idxL]) { // check if they was matched before
                matches -= 1;
            }
            l++
        }
        return matches === 26 ? true : false;
    }
}






















