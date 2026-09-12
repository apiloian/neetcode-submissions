class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {

        function backtracking(arr) {
            if(!arr.length) {
                return [[]];
            }
            const cutArr = arr.slice(1);
            const prevPermsWithCuttedArray = backtracking(cutArr);
            const res = []
            console.log('prevPermsWithCuttedArray', prevPermsWithCuttedArray)
            for(const permutations of prevPermsWithCuttedArray) {
                console.log('permutations', permutations)

                // add to each possition
                for(let i = 0; i < permutations.length + 1; i++) {
                    const copyPermutations = [...permutations];
                    console.log('before', copyPermutations)
                    copyPermutations.splice(i, 0, arr[0])
                    console.log('after', copyPermutations)
                    res.push(copyPermutations);
                }
            }

            return res
        }

        return backtracking(nums)
    }
}
