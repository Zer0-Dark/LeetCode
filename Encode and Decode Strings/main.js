class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // what is my algo will look like ? 
    // i will use the asci|| to add a curtain value that multi by 5 for 
    // every new char 
    encode(strs) {
        let secret = '';
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            // Encode each character in the current string
            for (let j = 0; j < str.length; j++) {
                secret += str.charCodeAt(j) * 5 * (j + 1);
                if (j < str.length - 1) secret += 'B';  // Delimiter between chars in same string
            }
            if (i < strs.length - 1) secret += 'A';  // Delimiter between strings
        }
        // Add trailing 'A' if we had any strings (distinguishes [] from [""])
        if (strs.length > 0) secret += 'A';
        return secret;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // Edge case: empty input should return empty array
        if (!str || str.length === 0) return [];

        // Remove trailing 'A' marker that indicates we had at least one string
        if (str.endsWith('A')) {
            str = str.slice(0, -1);
        }

        // If after removing trailing A we have empty string, we had one empty string [""]
        if (str.length === 0) {
            return [""];
        }

        // Split by 'A' to get individual encoded strings
        const encodedStrings = str.split('A');
        const result = [];

        for (let encoded of encodedStrings) {
            // Split by 'B' to get individual encoded characters
            const encodedChars = encoded.split('B');
            let decodedStr = '';

            for (let i = 0; i < encodedChars.length; i++) {
                if (encodedChars[i]) {
                    decodedStr += String.fromCharCode(encodedChars[i] / 5 / (i + 1));
                }
            }
            result.push(decodedStr);
        }
        return result;
    }
}

// Test cases
const sol = new Solution();
const encoded = sol.encode(['Hello', 'World']);
const encoded2 = sol.encode(['GSRF;DKLJGFSDLJ;KFGDSJKL;SDGFJKL;', 'DAKLSHDASHL;KJDHJLASAKJDSHASJKLHDASLKJ']);
console.log('Encoded:', encoded);
console.log('Encoded:', encoded2);

console.log('Decoded:', sol.decode(encoded));
console.log('Decoded:', sol.decode(encoded2));
