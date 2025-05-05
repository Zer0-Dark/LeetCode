let test1 = [1, 3];
let test2 = [2];

function findMedianSortedArrays(nums1, nums2) {
    //sorting the array
    let arr = [...nums1, ...nums2].sort((a, b) => a - b);


    let index = arr.length; // 3
    let medianValue = index / 2;
    // console.log(medianValue);

    if (medianValue % 2 === 0) {
        return (arr[medianValue] + arr[medianValue - 1]) / 2;
    } else {
        if (arr[medianValue - 0.5] === undefined) {
            let first = arr[medianValue];
            let sec = arr[medianValue - 1];
            let val = first + sec;
            return val / 2;
        } else {
            return arr[medianValue - 0.5];
        }
    }


}
console.log(findMedianSortedArrays(test1, test2));


