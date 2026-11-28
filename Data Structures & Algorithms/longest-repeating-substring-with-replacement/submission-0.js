class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        const isValidWindow = (i, j) => (j - i + 1) - Math.max(...map.values()) <= k;
        let maxLen = 0;
        let left = 0;
        for(let right = 0; right < s.length; right++){
            map.set(s.at(right), (map.get(s.at(right)) ?? 0) + 1)
            while(!isValidWindow(left, right)){
                map.set(s.at(left), (map.get(s.at(left)) ?? 1) - 1);
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}
