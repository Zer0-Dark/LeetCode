var intToRoman = function (num) {
    num = num.toString();
    // ! Single number function
    function singleNumber(num) {


        let result = {
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",
            6: "VI",
            7: "VII",
            8: "VIII",
            9: "IX",
            0: ""
        }

        return result[num]
    }
    // ! double number function
    function doubleNumber(num) {

        // ! convert it to object for better performance
        let result = {
            1: "X",
            2: "XX",
            3: "XXX",
            4: "XL",
            5: "L",
            6: "LX",
            7: "LXX",
            8: "LXXX",
            9: "XC",
            0: ""
        }


        return result[num];
    }

    // ! Three Numbers fun
    function tripleNumber(num) {


        // ! convert it to object for better performance
        let result = {
            1: "C",
            2: "CC",
            3: "CCC",
            4: "CD",
            5: "D",
            6: "DC",
            7: "DCC",
            8: "DCCC",
            9: "CM",
            0: ""

        }

        return result[num];
    }

    // ! FourthNumber fun
    function fourthNumber(num) {

        let result = {
            1: "M",
            2: "MM",
            3: "MMM",
            4: "MMMM"
        }
        return result[num];
    }

    switch (num.length) {
        case 1:
            return singleNumber(num);
            break;
        case 2:
            return doubleNumber(num[0]) + singleNumber(num[1]);
            break;
        case 3:
            return tripleNumber(num[0]) + doubleNumber(num[1]) + singleNumber(num[2]);

            break;
        case 4:
            return fourthNumber(num[0]) + tripleNumber(num[1]) + doubleNumber(num[2]) + singleNumber(num[3]);

            break;

    }

};
console.log(intToRoman(1994));