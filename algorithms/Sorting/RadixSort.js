//Implementation of the Radix sort algorithm (O(nk) time complexity) and space complexity of O(n + k)

const EXERCISE_NUMS = [4567, 26, 1256, 5, 14756, 744, 37, 8];

const getDigit = (num, position) => {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const maxDigitNum = (nums) => {
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    maxCount = Math.max(maxCount, digitCount(nums[i]));
  }
  return maxCount;
};

const sortElements = (nums) => {
  let maxDigitCount = maxDigitNum(nums);

  for (let i = 0; i < maxDigitCount; i++) {
    let containers = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      containers[getDigit(nums[j], i)].push(nums[j]);
    }

    nums = [].concat(...containers);
  }

  return nums;
};

console.table(sortElements(EXERCISE_NUMS));
