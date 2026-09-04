class LRUNode {
    key: number;
    val: number;
    next: LRUNode | null;
    prev: LRUNode | null;
    constructor(key?:number, val?: number) {
        this.key = key ?? 0
        this.val = val ?? 0
        this.next = null
        this.prev = null
    }
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    cache: Map<number, LRUNode>
    maxCapacity: number
    curCapacity: number
    head: LRUNode
    tail: LRUNode | null
    constructor(capacity: number) {
        this.cache = new Map();
        this.maxCapacity = capacity;
        this.curCapacity = 0;

        this.head = new LRUNode();
        this.tail = new LRUNode();

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const node = this.cache.get(key);
        if(node === undefined) {
            return -1;
        }

        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;


        const p = this.tail.prev;
        p.next = node;
        node.prev = p;
        node.next = this.tail
        this.tail.prev = node;

        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(this.cache.has(key)) {
            const cachedNode = this.cache.get(key);
            cachedNode.val = value;

            // update possition
            cachedNode.prev.next = cachedNode.next;
            cachedNode.next.prev = cachedNode.prev;

            const p = this.tail.prev;
            p.next = cachedNode;
            cachedNode.prev = p;
            cachedNode.next = this.tail
            this.tail.prev = cachedNode;
            return;
        }

        if(this.curCapacity === this.maxCapacity) {
            const removeNode = this.head.next;
            this.head.next = removeNode.next;
            removeNode.next.prev = this.head;
            this.cache.delete(removeNode.key);
            this.curCapacity -= 1;
        }

        const node = new LRUNode(key, value);
        const prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail
        this.tail.prev = node;
        this.cache.set(key, node);
        this.curCapacity += 1;
    }
}
