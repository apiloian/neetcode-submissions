class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const brackets = {
            ")": "(",
            "]": "[",
            "}": "{",
        }

        for(let i = 0; i < s.length; i++) {
            const bracket = s[i];

            if(!")]}".includes(bracket)) {
                stack.push(bracket)
            } else {
                const prevBracket = stack.pop();
                if(prevBracket !== brackets[bracket]) {
                    return false;
                }
            }
        }

        return stack.length ? false : true;
    }
}
