//your code here
function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  // Boyer-Moore Voting Algorithm
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}