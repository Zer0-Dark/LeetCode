/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false
    let hashTable = new Map();
    for (let i = 0; i < t.length; i++) {
        hashTable.set(t[i], hashTable.get(t[i]) ? hashTable.get(t[i]) + 1 : 1)
    }

    console.log(hashTable.entries())

    for (let i = 0; i < s.length; i++) {
        if (hashTable.has(s[i])) {
            hashTable.set(s[i], hashTable.get(s[i]) - 1)
            console.log(hashTable.entries());
        } else {
            return false
        }

        if (hashTable.get(s[i]) < 0) {
            return false
        }
    }

    return true
};

console.log(isAnagram("aacc", "ccac"))