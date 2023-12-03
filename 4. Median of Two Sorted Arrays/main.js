let test1 = [1];
let test2 = [2,3,4,5,6,7,8,9,10];

function findMedianSortedArrays(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort(function (a, b) {
        if (a === Infinity)
            return 1;
        else if (isNaN(a))
            return -1;
        else
            return a - b;
    });
    console.log(arr);
    let index = arr.length; // 3
    let medianValue = index / 2;
    medianValue = parseFloat(medianValue);
    console.log(medianValue);
    if (medianValue % 2 === 0 ) {
        let first = arr[medianValue];
        let sec = arr[medianValue - 1] ;
        let val = first + sec;
        return val / 2;
    } else {   
        if(arr[medianValue - 0.5] === undefined){
            let first = arr[medianValue];
        let sec = arr[medianValue - 1] ;
        let val = first + sec;
        return val / 2;
        }else{
        return arr[medianValue - 0.5] ;
        }
    }


}
console.log(findMedianSortedArrays(test1,test2));


