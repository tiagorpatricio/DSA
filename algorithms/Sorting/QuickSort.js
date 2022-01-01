//Implementation of the Quick sort algorithm (O(n log n) time complexity - average || best && O(n^2) time complexity - worst).
// O(log n) space complexity.

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

EXERCISE_NUMS = [99, -2, 5, 7, 3, 5, 44, 2, 3, 8, 13, 36, 66, 88, 23];

const pivotHelper = (nums, startIndex = 0, endIndex = EXERCISE_NUMS.length + 1) => {
    let pivot = nums[startIndex];
    let smallerThanPivotCount = startIndex;

    for (let i = startIndex + 1; i <= endIndex; i++) {
        if (nums[i] < pivot) {
            smallerThanPivotCount++;
            swap(nums, smallerThanPivotCount, i);
        }
    }

    swap(nums, startIndex, smallerThanPivotCount);
    return smallerThanPivotCount;
};

const sortItems = (nums, left = 0, right = EXERCISE_NUMS.length - 1) => {
    if (left < right) {
        let pivotIndex = pivotHelper(nums, left, right);
        sortItems(nums, left, pivotIndex - 1);
        sortItems(nums, pivotIndex + 1, right);
    }

    return nums;
};

console.log(sortItems(EXERCISE_NUMS));
