class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const adj = {};

        for(let i = 0; i < times.length; i++) {
            const [source, target, time] = times[i];
            if(!adj[source]) {
                adj[source] = []
            }
            adj[source].push([target, time]);
        }

        const minQueue = [[k, 0]];
        const visited = new Set();
        let t = 0;

        while(minQueue.length) {
            const [node, overallTime] = minQueue.pop();

            if(visited.has(node)) {
                continue;
            }
            // dont have this node so lets calc the time to reach this node
            visited.add(node);
            t = Math.max(t, overallTime)

            for(const [targetNode, time] of (adj[node] || [])) {
                if(!visited.has(targetNode)) {
                    minQueue.push([targetNode, overallTime + time]);
                }
            }
            minQueue.sort((a, b) => b[1] - a[1]);            
        }

        return visited.size === n ? t : -1

    }
}
