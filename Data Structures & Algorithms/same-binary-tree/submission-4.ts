/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if(p === null && q === null) {
            return true
        }
        if(p === null || q === null) {
            return false;
        }

        const stack = [[p, q]];

        while(stack.length) {
            const [n1, n2] = stack.pop();

            if(n1 === null && n2 === null) {
                continue;
            }

            if(n1 === null || n2 === null ) {
                return false
            }

            if(n1.val !== n2.val) {
                return false;
            }

            stack.push([n1.left, n2.left])
            stack.push([n1.right, n2.right])
        }

        return true;
    }
}

// p = [1,2,3], q = [1,2,3] -> true

// [4,7], q = [4,null,7] -> false

