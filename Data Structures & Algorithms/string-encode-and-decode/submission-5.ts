class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // console.log(strs, strs.join('__'), 'here');

        return strs.length ?  "__" + strs.join('__') : ""
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(str.startsWith("__")) {
            str = str.slice(2);
            return str.split("__");
        }
        return [];
    }
}
