//Implementation of the Merge sort algorithm (O(n log n) time complexity and O(n) space complexity).

const EXERCISE_NUMS = [999, 34, 2, 6, 4, 88, 44, 2, -23, -12, 67, 3, 22, 23, 0, 23, -66, 25, 67, 9, 1, 0];

const sortArrays = (firstHalf, leftHalf) => {
    let sortedResult = [];
    let firstHalfCounter = 0;
    let secondHalftCounter = 0;

    while (firstHalfCounter < firstHalf.length && secondHalftCounter < leftHalf.length) {
        if (firstHalf[firstHalfCounter] > leftHalf[secondHalftCounter]) sortedResult.push(leftHalf[secondHalftCounter++]);
        else sortedResult.push(firstHalf[firstHalfCounter++]);
    }

    if (!firstHalf[firstHalfCounter]) sortedResult.push(...leftHalf.slice(secondHalftCounter));
    else sortedResult.push(...firstHalf.slice(firstHalfCounter));

    return sortedResult;
}

const mergeSort = (items) => {
    if (items.length <= 1) return items;
    let middle = Math.floor(items.length / 2);
    let firstHalft = mergeSort(items.slice(0, middle));
    let secondHalft = mergeSort(items.slice(middle));

    return sortArrays(firstHalft, secondHalft);
}

console.table(mergeSort(EXERCISE_NUMS))