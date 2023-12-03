/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let res = s.trim("").split(" ");
    return res[res.length - 1].length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));