class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) {
            return false;
        }

        const map = {};

        for(let i = 0; i < s.length; i++) {
            const ch = s[i];
            map[ch] = (map[ch] || 0) + 1;
        }

        for(let j = 0; j < t.length; j++) {
            const ch = t[j];
            if(!map[ch]) {
                return false
            }
            map[ch]--;

            if(map[ch] < 0) {
                return false
            }
        }

        return true;
    }
}
