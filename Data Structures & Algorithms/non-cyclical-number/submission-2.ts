class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n: number): boolean {
        const cache = new Set();
        let num = n;

        
        while(!cache.has(num)) {
            cache.add(num);
            const sum = String(num).split("")
                .map((el) => Number(el) * Number(el))
                .reduce((acc, cur) => acc + cur, 0);

            if(sum === 1) {
                return true;
            }
            
            num = sum;
        }

        return false;

    }
}
