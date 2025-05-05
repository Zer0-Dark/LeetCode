/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0;
    let res = 0;
    let currendWindow = new Set();
    for (let r = 0; r < s.length; r++) {
        while (currendWindow.has(s[r])) {
            currendWindow.delete(s[l]);
            l++
        }
        currendWindow.add(s[r]);
        res = res > r - l + 1 ? res : r - l + 1;
    }
    return res;

};

console.log(lengthOfLongestSubstring("dvdf"));