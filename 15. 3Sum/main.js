var threeSum = function (nums) {
    let result = 0;
    let test = [];
    // !Fix THis 
    for (let i = 0; i < nums.length; i++) {
        let number = 0;
        for (let j = 0; j < nums.length; j++) {
            result = 0;
            if (i !== number && i !== number + 1) {
                console.log("Look Here !",number,"re   sult = ",result)
                // console.log( nums[i] , nums[j+1] , nums[j+2] , "numbers of indexes" , i,j+1,j+2)
                result += nums[i] + nums[number] + nums[number + 1];
                if (result === 0) {
                    test.push([nums[i], nums[number], nums[number + 1]]);
                }
            }
            number++;
        }
    }
    // !Fix THis 
    console.log("here !");
    console.log(test);
    // sort the array
    for (let i = 0; i < test.length; i++) {
        test[i].sort((a, b) => a - b);
    }
    test = test.sort();
    console.log(test);
    // !get the doubles
    result = false;
    let numbbb = 0;
    for (let i = 0; i < test.length - 1; i++) {
        numbbb = 0
        for (let j = 0; j < 3; j++) {
            if (test[i][j] === test[i + 1][j]) {
                console.log("first", test[i][j], "===", test[i + 1][j]);
                numbbb += 1;
            } else {
                console.log("Not equal !");
            }

        }
        console.log("numb =", numbbb);
        if (numbbb === 3) {
            test[i] = "";
        }
    }
    console.log(test);
    test = test.filter((entry) => { return entry !== ''; });
    return test;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));