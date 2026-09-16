class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = [];
        for(let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }
        cars.sort((a, b) => b[0] - a[0]);

        const track = [];
        for(let c = 0; c < cars.length; c++) {
            const [p, s] = cars[c];
            track.push((target - p) / s);
            if(track.length >= 2 && track[track.length - 1] <= track[track.length - 2]) {
                track.pop();
            }
        }
        return track.length
    }
}
