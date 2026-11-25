class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => btoa(s) + '----').join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const parts = str.split('----');
        parts.pop();
        return parts.map(p => atob(p));
    }
}
