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
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        function dfs(node) {
            if(node === null) {
                return;
            }

            const temp = node.left;
            node.left = node.right
            node.right = temp;
            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);
        return root;
    }
}
