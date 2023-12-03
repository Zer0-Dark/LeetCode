/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let hashTablePattern = new Map();
    for (let i = 0; i < pattern.length; i++) {
        if (hashTablePattern.has(pattern[i])) {
            hashTablePattern.set(pattern[i], hashTablePattern.get(pattern[i]) + 1)
        } else {
            hashTablePattern.set(pattern[i], 1);
        }
    }
    let res1 = Array.from(hashTablePattern.values())

    let namesArray = s.split(" ");
    let hashTableNames = new Map();
    for (let i = 0; i < namesArray.length; i++) {
        if (hashTableNames.has(namesArray[i])) {
            hashTableNames.set(namesArray[i], hashTableNames.get(namesArray[i]) + 1)
        } else {
            hashTableNames.set(namesArray[i], 1);
        }
    }
    let res2 = Array.from(hashTableNames.values())

    if (res1.length !== res2.length) {
        return false
    }

    let sure = 0;
    for (let i = 0; i < res1.length; i++) {
        sure += +(res1[i] == res2[i]);
    }
    console.log(res1, res2)
    return sure == res1.length

};

console.log(wordPattern("abab", "dog cat cat dog"));