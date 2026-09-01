class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if(s === "" || t === "" || s.length < t.length) {
            return ""
        }

        let l = 0;
        let r = 0;
        let indexesForSlice = [];
        let minLen = s.length;

        const targetMap = {};
        for(let i = 0; i < t.length; i++) {
            targetMap[t[i]] = (targetMap[t[i]] || 0) + 1;
        }

        const currentWindowMap = {};
        const needAmountOfKeys = Object.keys(targetMap).length;
        let haveAmount = 0; 

        while(r < s.length) {
            const ch = s[r];
            currentWindowMap[ch] = (currentWindowMap[ch] || 0) + 1;

            if(currentWindowMap[ch] === targetMap[ch]) {
                haveAmount += 1;
            }
            
            while(haveAmount === needAmountOfKeys) {
                const leftCh = s[l];
                const curLen = (r - l);

                if(curLen < minLen) {
                    indexesForSlice = [l, r + 1];
                    minLen = curLen;
                }


                currentWindowMap[leftCh] -= 1;
                if(targetMap[leftCh] && currentWindowMap[leftCh] < targetMap[leftCh]) {
                    haveAmount -= 1;
                }
                l++
            }

            r++;
        }

        return indexesForSlice.length ? s.slice(indexesForSlice[0], indexesForSlice[1]) : "";
    }
}
