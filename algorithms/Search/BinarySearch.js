//Implementation of the binary search algorithm (O(log n) time complexity - average || worse) and (O(1) time complexity - best).

/*A binary search algorithm uses the "Divide and conquer" approach, which means, finding the start, middle and end of the SORTED array 
and checking if the target value is lesser, equal ou greater compared to the target value, adjusting the start, middle and end position 
until the target element is found or the start value is lesser or equal to the end value. */

const EXERCISE_NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 17];
const MATCH_NUM = 54;


//Looping over array
const findIndexOfTargetNumber = (sorted, target) => {
    let start = 0;
    let end = sorted.length - 1;
    let middle = Math.floor((start + end) / 2); // Length of list may be odd

    while (sorted[middle] !== target && start <= end) {
        if (sorted[middle] > target) end = middle - 1;
        else start = middle + 1;

        middle = Math.floor((start + end) / 2);
    }

    return sorted[middle] === target ? middle : - 1;

}

console.log(findIndexOfTargetNumber(EXERCISE_NUMS, MATCH_NUM))



//Using Recursion (helper method recursion);
const findIndexOfTargetNumberRecursion = (sorted, target) => {
    let start = 0;
    let end = sorted.length - 1;
    let middle = Math.floor((start + end) / 2); // Length of list may be odd

    const helper = (sorted, target) => {
        if (sorted[middle] === target || end < start) return;
        if (sorted[middle] > target) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
        helper(sorted, target)
    }

    helper(sorted, target)

    return sorted[middle] === target ? middle : -1
}

console.log(findIndexOfTargetNumberRecursion(EXERCISE_NUMS, MATCH_NUM))