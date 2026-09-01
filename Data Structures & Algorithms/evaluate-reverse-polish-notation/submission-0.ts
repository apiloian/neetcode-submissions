class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [Number(tokens[0])];
        const ops = {
            "+": (a, b) => a + b, 
            "-": (a, b) => a - b, 
            "*": (a, b) => a * b, 
            "/": (a, b) => Math.trunc(a / b), 
        }

        for(let i = 1; i < tokens.length; i++) {
            const n = tokens[i];

            if(ops[n] !== undefined) {
                const b = Number(stack.pop());
                const a = Number(stack.pop());
                stack.push(ops[n](a, b));
            } else {
                stack.push(Number(n));
            }
        }

        return stack[stack.length - 1]
    }
}
