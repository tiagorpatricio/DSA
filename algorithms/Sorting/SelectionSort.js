//Implementation of the Selection sort algorithm (O(n^2) time complexity - average || worse) and (O(n) time complexity - best).


const EXERCISE_NUMS = [4, 2, 12, 5, 14, 7, 3, 8];

const swapItems = (nums, i, smallest) => {
    [nums[smallest], nums[i]] = [nums[i], nums[smallest]]
}

const sortItems = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let smallest = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[smallest]) {
                smallest = j
            }
        }
        if (i !== smallest) swapItems(nums, i, smallest)
    }
    return nums
}

console.log(sortItems(EXERCISE_NUMS))