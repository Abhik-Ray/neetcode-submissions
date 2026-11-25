class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        strs.forEach(str => {
            const sorted = str.split('').sort().join('');
            if(map.get(sorted)){
                map.set(sorted, [...map.get(sorted), str])
            } else {
                map.set(sorted, [str])
            }
        })
        return [...map.values()];
    }
}
