class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxLen = 0;
        let l = 0;
        let r = 0;
        const counts = {};

        while(r < s.length) {
            counts[s[r]] = (counts[s[r]] || 0) + 1;
            while(((r - l + 1) - Math.max(...Object.values(counts) as any) )> k) {
                counts[s[l]] -= 1;
                l++;
            }

            maxLen = Math.max(r - l + 1, maxLen);
            r++;
        }

        return maxLen;
    }
}
