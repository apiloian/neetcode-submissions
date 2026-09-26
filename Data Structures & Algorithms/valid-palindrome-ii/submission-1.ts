class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        while(l < r) {
            if(s[l] !== s[r]) {
                const left = s.slice(l + 1, r + 1);
                const right = s.slice(l, r);
                const reversedL = left.split("").reverse().join("");
                const reversedR = right.split("").reverse().join("");
                return left === reversedL || right === reversedR
            }

            l += 1;
            r -= 1
        }

        return true;
    }
}
