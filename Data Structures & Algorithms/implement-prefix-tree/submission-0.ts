class PrefixTree {
    children: Map<string, PrefixTree>;
    isWordEnd: boolean;

    constructor() {
        this.children = new Map();
        this.isWordEnd = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let cur = this;

        for(let i = 0; i < word.length; i++) {
            const ch = word[i];
            if(!cur.children[ch]) {
                cur.children[ch] = new PrefixTree();
            }
            cur = cur.children[ch]
        }
        cur.isWordEnd = true;
        // console.log(JSON.stringify(this.children));
        // console.log("=============");
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let cur = this;
        for(let i = 0; i < word.length; i++) {
            const ch = word[i];
            cur = cur.children[ch];

            if(!cur) {
                return false;
            }
        }
        return cur && cur?.isWordEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
         let cur = this;
        for(let i = 0; i < prefix.length; i++) {
            const ch = prefix[i];
            cur = cur.children[ch];
            if(!cur) {
                return false;
            }
        }
        return !!cur;
    }
}
