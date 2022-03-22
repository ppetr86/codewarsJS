let nums = [];
while (true) {
  let input = window.prompt('Enter number: ')
  if (!input) break;
  nums.push(input);
  console.log(nums);
}
nums.shift();
let reversed = [];
for (let i = 0; i < nums.length; i++) {
  reversed.unshift(nums[i]);
}
console.log(reversed.join('_'));
