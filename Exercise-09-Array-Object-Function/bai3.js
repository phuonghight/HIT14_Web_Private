const nums = [3, 2, 4],
  target = 6;

const sumTwo = (nums = [0, 0], target = 0) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

console.log(sumTwo(nums, target));
