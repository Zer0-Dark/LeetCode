/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let hashTablePattern = new Map();
    let namesArray = s.split(" ");
    let hashTableNames = new Map();
    if (namesArray.length != pattern.length) {
        return false
    }
    for (let i = 0; i < namesArray.length; i++) {

        if (hashTableNames.has(namesArray[i])) {
            hashTableNames.set(namesArray[i], hashTableNames.get(namesArray[i]) + 1)
        } else {
            hashTableNames.set(namesArray[i], 1);
        }


        if (hashTablePattern.has(pattern[i])) {
            hashTablePattern.set(pattern[i], hashTablePattern.get(pattern[i]) + 1)
        } else {
            hashTablePattern.set(pattern[i], 1);
        }

        if (hashTableNames.get(namesArray[i]) != hashTablePattern.get(pattern[i])) {
            return false
        }
        console.log(hashTableNames.get(namesArray[i]), hashTablePattern.get(pattern[i]));

    }

    return true
};

console.log(wordPattern("aba", "dog cat cat"));
