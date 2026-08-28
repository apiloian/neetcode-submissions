class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts = {} as Record<string, number>;

        for(const n of nums) {
            counts[n] = (counts[n] || 0) + 1;
        }

        const arr = new Array(nums.length);

        for(const [n, count] of Object.entries(counts)) {
            if(!arr[count]) {
                arr[count] = [];
            }
            arr[count].push(n);
        }

        const res = [];

        for(let i = arr.length - 1; i >= 0; i--) {
            while(arr[i] && arr[i].length && (res.length < k)) {
                const el = arr[i].pop();
                res.push(el);
            }
        }

        return res;
    }
}
