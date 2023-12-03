/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let result = str1[0];
    if (str1 + str2 == str2 + str1) {

        for (let i = 1; i < str1.length; i++) {
            if (str1[i] != str1[0]) {
                result += str1[i];

            } else {
                break;
            }
        }

        return str1.length > str2.length ? str2 : str1;
    } else {
        return ""
    }

};

console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"))