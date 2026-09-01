class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = [];
        const res = new Array(temperatures.length).fill(0);

        for(let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];

            while(stack.length && t > stack[stack.length - 1][0]) {
                const [_, idx] = stack.pop();
                res[idx] = i - idx;
            }

            stack.push([t, i]);
        }

        return res;
    }
}
