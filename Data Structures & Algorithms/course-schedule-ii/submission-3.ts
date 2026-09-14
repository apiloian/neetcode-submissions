class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const res = [];
        const adj = {};

        for(const [course, pre] of prerequisites) {
            if(!adj[course]) {
                adj[course] = [];
            }
            adj[course].push(pre);
        }


        const visited = new Set();
        const visiting = new Set();

        function dfs(course) {
            if(visiting.has(course)) {
                return false
            }

            if(visited.has(course)) {
                return true
            }

            visiting.add(course);
            for(const preCourse of (adj[course] || [])) {
                if(!dfs(preCourse)) {
                    return false;
                }
            }
            visiting.delete(course);
            if(!visited.has(course)) {
                visited.add(course)
                res.push(course);
            }

            return true;
        }

        for(let i = 0; i < numCourses; i++) {
            if(visited.has(i)) {
                continue;
            }

            if(!dfs(i)) {
                return [];
            }
        }

        return res;
    }
}
