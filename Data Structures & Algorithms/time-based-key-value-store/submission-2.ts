class TimeMap {
    keyStore: Map<any, any>

    constructor() {
        this.keyStore = new Map<any, any>();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        let keyValues = this.keyStore.get(key);
        if(keyValues === undefined) {
            keyValues = []
            this.keyStore.set(key, keyValues);
        }

        keyValues.push([timestamp, value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const keyValues = this.keyStore.get(key);
        if(keyValues === undefined) {
            return ""
        }

        let res = "";
        let maxTimeStamp = null
        for(let i = 0; i < keyValues.length; i++) {
            if(keyValues[i][0] <= timestamp) {
                maxTimeStamp = Math.max(keyValues[i][0], maxTimeStamp);
                res = maxTimeStamp === keyValues[i][0] ? keyValues[i][1] : res;
            }
        }

        return res
    }
    
}

// Input:
// ["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1], "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]

// Output:
// [null, null, "happy", "happy", null, "sad"]

// Explanation:
// TimeMap timeMap = new TimeMap();
// timeMap.set("alice", "happy", 1);  // store the key "alice" and value "happy" along with timestamp = 1.
// timeMap.get("alice", 1);           // return "happy"
// timeMap.get("alice", 2);           // return "happy", there is no value stored for timestamp 2, thus we return the value at timestamp 1.
// timeMap.set("alice", "sad", 3);    // store the key "alice" and value "sad" along with timestamp = 3.
// timeMap.get("alice", 3);           // return "sad"





