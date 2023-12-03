
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1] ) {
            if(nums[i] == nums[i+2]){
                nums.splice(i, 1);
                i--;
            }else{
                i++
            }
        }
    }
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))