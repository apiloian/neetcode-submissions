class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adj = {};
        for(const el of prerequisites) {
            const [course, pre] = el;
            if(!adj[course]) {
                adj[course] = []
            }
            adj[course].push(pre);
        }

        const visitingCourses = new Set();
        function dfs(course) {
            if(visitingCourses.has(course)) {
                return false;
            }
            if(!adj[course] || adj[course].length === 0) {
                return true
            }
            visitingCourses.add(course);
            for(const c of adj[course]) {
                if(!dfs(c)) {
                    return false;
                }
            }
            visitingCourses.delete(course);
            adj[course] = [];
            return true;
        }

        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) {
                return false
            } 
        }

        return true;

    }
}
