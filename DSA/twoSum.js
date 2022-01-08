// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1]

// Option One
// time O(N)2
// space O(1)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// console.log(twoSum([2, 7, 11, 15], 9));
//

// Option Two
// time O(N)
// space O(N)
function twoSum(nums, target) {
  let memory = {};
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;

    if (memory[num2] !== undefined) {
      return [memory[num2], i];
    } else {
      memory[num1] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
