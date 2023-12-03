let isSubsequence = function (s, t) {
    // get the index of the first char
    let firstChar = s[0];
    // find where is the last index of it
    console.log(t)
    let lastIndexOfTheFirstChar = t.lastIndexOf(firstChar);
    console.log(lastIndexOfTheFirstChar)

    // Answer
    let lasted = lastIndexOfTheFirstChar;
    res = "";

    for (let i = 0; i < s.length; i++) {

        for (let j = lasted; j < t.length; j++) {

            if (s[i] === t[j]) {
                console.log("hi", s[i], t[j])
                res += t[j]
                safe = j;
                lasted = j+1;
                break;
            }
        }

    }


    console.log(res, s)
    if (res === s) {
        return true
    } else {
        return false
    }

};



console.log(isSubsequence("aaaaaa", "bbaaaa"))