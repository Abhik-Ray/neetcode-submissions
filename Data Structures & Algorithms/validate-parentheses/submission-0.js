class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = new Map([['(', ')'], ['[', ']'], ['{', '}']]);
        for (const ch of s){
            if(['(', '[', '{'].includes(ch)){
                stack.push(ch);
            } else {
                const e = stack.pop();
                if(map.get(e) !== ch){
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
