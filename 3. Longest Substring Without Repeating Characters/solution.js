/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let [l, r] = [0, 1];
    let currentWord = s[l];
    let longestWord = s[l] || "";
    while (r < s.length) {
        console.log(currentWord, l, r);
        if (currentWord.includes(s[r])) {
            l = r - 1;
            console.log(l, r, s[l]);


            currentWord = s[l];
        } else {
            currentWord += s[r];
            if (currentWord.length > longestWord.length) {

                longestWord = currentWord;
            }
        }

        r++;
    }
    // console.log(longestWord)
    return longestWord.length;

};

console.log(lengthOfLongestSubstring("dvdf"));