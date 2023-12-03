let twoSum = function(nums, target) {
    let output = [];
    for(let i =0; i< nums.length; i++){
        for(let j =0; j< nums.length; j++){
            if(nums[i] + nums[j] === target && j !== i){
                output = [i,j];
                return output;
            }
        }
        
    }
};
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));
console.log(twoSum([3,2,3],6));
console.log("end-----------------------");
let foo = [];
for (let i = 1; i<=10000; i++){
    foo.push(i);
}
console.log(twoSum(foo,19999));
