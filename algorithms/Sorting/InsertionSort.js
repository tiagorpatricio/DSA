//Implementation of the Insertion sort algorithm (O(n^2) time complexity).

const EXERCISE_NUMS = [4, 2, 12, 5, 14, 7, 3, 8];

const sortItems = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let currentItem = nums[i]
        for (var j = i - 1; j >= 0 && nums[j] > currentItem; j--) {
            nums[j + 1] = nums[j]
        }
        nums[j + 1] = currentItem;
    }
    return nums;
}

console.log(sortItems(EXERCISE_NUMS))