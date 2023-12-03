/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let hashTable = new Map();
    for (let i = 0; i < magazine.length; i++) {
        hashTable.set(magazine[i], hashTable.get(magazine[i]) ? hashTable.get(magazine[i]) + 1 : 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {

        if (hashTable.has(ransomNote[i])) {
            if (hashTable.get(ransomNote[i]) == 0) {
                return false
            } else {
                hashTable.set(ransomNote[i], hashTable.get(ransomNote[i]) - 1)
            }

        } else {
            return false
        }
    }

    return true
};



console.log(canConstruct("aa", "ab"));