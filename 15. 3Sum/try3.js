var threeSum = function (nums) {
    let midNumber = 0;
    nums.sort((a, b) => a - b);
    // console.log(nums);
    //get the mid number
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            // console.log("Found index is :",i,nums[i]);
            midNumber = i;
            break;
        }
    }
    let results = [];
    let right = 1;
    let left = 1;
    while (right < nums.length && left < nums.length) {
        // console.log(nums[midNumber]);
        // console.log(nums[midNumber+right]);
        // console.log(nums[midNumber-left]);
        if (nums[midNumber] + nums[midNumber + right] + nums[midNumber - left] === 0) {
            // console.log("found!");
            results.push([nums[midNumber], nums[midNumber + right], nums[midNumber - left]]);
        }
        if (Math.abs(+nums[midNumber + right]) < Math.abs(+nums[midNumber - left])) {
            // console.log("rigth",+nums[midNumber+right]);
            // console.log("left",+nums[midNumber-left]);
            right++;
            if (nums[right] === undefined) {
                right--;
            }
            console.log("right +=1")
        } else {
            left++;
            console.log("left +=1");
            if (nums[left] === undefined) {
                left--;
            }
        }
    }
    // console.log("-------------------------------loop2")
    right = 0;
    left = 0;
    safecfe
    while (right < nums.length && left < nums.length && safe > nums.length + 10) {
        // console.log(nums[midNumber]);
        // console.log(nums[midNumber+right]);
        // console.log(nums[midNumber-left]);
        if (nums[midNumber + right - 1] + nums[midNumber + right] + nums[midNumber - left] === 0) {
            // console.log("found!");
            results.push([nums[midNumber + right - 1], nums[midNumber + right], nums[midNumber - left]]);
        }
        if (Math.abs(+nums[midNumber + right]) < Math.abs(+nums[midNumber - left])) {
            right++;
            if (nums[right] === undefined) {
                right--;
            }
            console.log("right +=1")
        } else {
            left++;
            console.log("left +=1");
            if (nums[left] === undefined) {
                left--;
            }
        }
    }
    // console.log("-------------------------------loop3")
    right = 0;
    left = 0;
    safe = 0;
    while (right < nums.length && left < nums.length && safe > nums.length + 10) {
        safe++;
        // console.log(nums[midNumber]);
        // console.log(nums[midNumber+right]);
        // console.log(nums[midNumber-left]);
        if (nums[midNumber - left + 1] + nums[midNumber + right] + nums[midNumber - left] === 0) {
            // console.log("found!");
            results.push([nums[midNumber - left + 1], nums[midNumber + right], nums[midNumber - left]]);
        }
        if (Math.abs(+nums[midNumber + right]) < Math.abs(+nums[midNumber - left])) {
            // console.log("rigth",+nums[midNumber+right]);
            // console.log("left",+nums[midNumber-left]);
            right++;
            if (nums[right] === undefined) {
                right--;
            }
            console.log("right +=1")
        } else {
            left++;
            console.log("left +=1");
            if (nums[left] === undefined) {
                left--;
            }
        }
    }
    // remove the doubles
    results = results.sort();
    console.log(results);
    let numbbb = 0;
    for (let i = 0; i < results.length - 1; i++) {
        numbbb = 0
        for (let j = 0; j < 3; j++) {
            if (results[i][j] === results[i + 1][j]) {
                // console.log("first", arrOfResults[i][j], "===", arrOfResults[i + 1][j]);
                numbbb += 1;
                // console.log(numbbb);
            } else {
                // console.log("Not equal !");
            }

        }
        // console.log("numb =", numbbb);
        if (numbbb === 3) {
            results[i] = "";
        }
    }
    // console.log(arrOfResults);
    results = results.filter((entry) => { return entry !== ''; });
    // console.log(results);



    return results;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));