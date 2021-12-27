//Implementation of the bubble sort algorithm (O(n^2) time complexity - average || worse) and (O(n) time complexity - best).

const EXERCISE_NUMS = [4, 2, 12, 5, 14, 7, 3, 8];

const swapItems = (nums, j) => {
    [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
}

const sortItems = (nums) => {
    let isSwapped;
    for (let i = nums.length; i > 0; i--) {
        isSwapped = false;
        for (let j = 0; j < i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                swapItems(nums, j)
                isSwapped = true;
            }
        }
        // prevent the loop from continuing until the end of the array if array is already sorted;
        if (!isSwapped) return nums;
    }
}

console.log(sortItems(EXERCISE_NUMS))