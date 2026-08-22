class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = "";

        for(const s of strs){
            res += s.length + "#" + s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = [];
        let i = 0
        
        while(i < str.length) {
            let symbolIdx = i;
            while(str[symbolIdx] !== "#") {
                symbolIdx++
            }

            const len = Number(str.slice(i, symbolIdx)) // can be 102 for ex.
            const word = str.slice(symbolIdx + 1, symbolIdx + len + 1)

            res.push(word);

            i = symbolIdx + len + 1;
        }

        return res;
    }
}
