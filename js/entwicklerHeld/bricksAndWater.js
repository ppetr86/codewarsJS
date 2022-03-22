function bricksAndWater(bricksArray) {

  let result = 0;

  for (let i = 1; i < bricksArray.length - 1; i++) {

    let left = bricksArray[i];

    for (let j = 0; j < i; j++) {
      left = Math.max(left, bricksArray[j]);
    }

    let right = bricksArray[i];
    for (let j = i + 1; j < bricksArray.length; j++) {
      right = Math.max(right, bricksArray[j]);
    }

    result += Math.min(left, right) - bricksArray[i];
  }
  return result;
}

console.log(bricksAndWater([1, 0, 2, 1]));
console.log(bricksAndWater([2, 0, 3, 0, 4]));
console.log(bricksAndWater([2, 0, 2]));
console.log(bricksAndWater([3, 1, 3]));
console.log(bricksAndWater([4, 0, 1, 4, 2, 4]));

