class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if(strs.length === 1) {
            return [strs];
        }

        const map = {};

        for(let i = 0; i < strs.length; i++) {
            const word = strs[i].toLowerCase();
            const symbolsCount = new Array(26).fill(0);

            for(const ch of word) {
                const code = ch.charCodeAt(0) - 'a'.charCodeAt(0);
                symbolsCount[code]++
            }
            const symbolKey = symbolsCount.join('_');
            if(!map[symbolKey]) {
                map[symbolKey] = [];
            }
            map[symbolKey].push(word)

        }

        return Object.values(map)
    }
}
