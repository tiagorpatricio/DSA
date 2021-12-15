//Implementation of  linear search algorithms (O(n) time complexity), (A linear search algorithm implies that the algorithm checks through every single element present agains a certain matching condition).

const EXERCISE_NUMS = [1, 3, 2, 4, 6, 5, 8, 7, 0, 9];
const MATCH_NUM = 3;

//Using a for loop (returning index of number if found or -1 if not).
const forLoopSolution = (nums, numToFind) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === numToFind) return i;
  }
  return -1;
};

console.log(forLoopSolution(EXERCISE_NUMS, MATCH_NUM));



//Using Recursion (helper method recursion);
const linearSearch = (nums, numToFind) => {
  let counter = 0;

  const helper = (nums, numToFind) => {
    if (nums[++counter] === numToFind) return counter;
    if (counter === nums.length) return (counter = -1);
    helper(nums, numToFind);
  };

  helper(nums, numToFind);
  return counter;
};

console.log(linearSearch(EXERCISE_NUMS, MATCH_NUM));

//Using Pure Recursion

const linearSearchPure = (nums, numToFind) => {
  if (nums.length === 0) return -1;
  if (nums[0] === numToFind) return 0;

  return linearSearchPure(EXERCISE_NUMS.splice(0, 1), numToFind);
};

console.log(linearSearchPure(EXERCISE_NUMS, MATCH_NUM));
