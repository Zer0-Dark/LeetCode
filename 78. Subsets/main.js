var subsets = function (nums) {
    const results = [];

    /**
     * @param {number} i - The current index in the 'nums' array
     * @param {number[]} path - The subset we are building "on the way down"
     */
    function backtrack(i, path) {
        // BASE CASE: If we've considered every number in 'nums'
        if (i === nums.length) {
            // We take a snapshot of the path as it looks right now
            results.push([...path]);
            return;
        }

        // OPTION 1: "PICK" the current number
        path.push(nums[i]);            // 1. Choose
        backtrack(i + 1, path);        // 2. Explore

        // OPTION 2: "DON'T PICK" the current number
        path.pop();                    // 3. Un-choose (Backtrack!)
        backtrack(i + 1, path);        // 4. Explore the other branch
    }

    // Start the process at index 0 with an empty bag
    backtrack(0, []);
    return results;
}; 