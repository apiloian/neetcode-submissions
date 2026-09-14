
// Definition for a Node.
class RNode {
    val: number
    neighbors: any[]
    constructor(val = 0, neighbors = []) {
      this.val = val;
      this.neighbors = neighbors;
    }
}


class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: RNode | null): RNode {
        const clonned = {};
        function dfs(n: RNode) {
            if(!n) {
                return null
            }

            if(clonned[n.val]) {
                return clonned[n.val]
            }

            const clone = new RNode(n.val);
            clonned[n.val] = clone;

            for(const neighbor of n.neighbors) {
                if(clonned[neighbor.val]) {
                    clone.neighbors.push(clonned[neighbor.val]);
                } else {
                    const clonNedneighbor = dfs(neighbor);
                    clone.neighbors.push(clonNedneighbor);
                }
            }

            return clone
        }

        return dfs(node)
    }
}
