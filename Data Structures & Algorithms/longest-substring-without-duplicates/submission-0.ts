class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxLen = 0;
        const window = new Set();

        let l = 0;
        let r = 0;
        while(r < s.length) {
            while(window.has(s[r])) {
                window.delete(s[l]);
                l++
            }

            window.add(s[r]);
            maxLen = Math.max(maxLen, window.size);
            r++
        }

        return maxLen
    }
}
