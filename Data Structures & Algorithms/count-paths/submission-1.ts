class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        // const grid = Array.from({ length: m }, () => new Array(n).fill(1));
        let row = new Array(n).fill(1);


        for(let i = 0; i < m - 1; i++) {
            let newRow = new Array(n).fill(1);
            for(let j = newRow.length - 2; j >= 0; j--) {
               newRow[j] = newRow[j + 1] + row[j];
            }
            row = newRow;
        }

        return row[0];
    }
}
