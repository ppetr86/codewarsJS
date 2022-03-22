function getQuantityOfIngredient(ingredient, numberOfCakes, arr) {
  let quantityOfIngredient = 0;
  let unit = "";
  for (let ingredientOfCake of arr) {
    if (ingredientOfCake.name === ingredient) {
      quantityOfIngredient = ingredientOfCake.quantity * numberOfCakes;
      if (ingredient === "eggs") {
        let t1 = parseInt(ingredientOfCake.quantity);
        let t2 = 1;
        let test = (t1 + t2) * parseInt(numberOfCakes);
        quantityOfIngredient = test;
      }
      unit = " " + ingredientOfCake.unit;
    }
  }
  return quantityOfIngredient.toString() + unit;
}

let arr = [{quantity: '1', unit: 'oz', name: 'unsalted butter'},
  {quantity: '21', unit: 'oz', name: 'granulated sugar'},
  {quantity: '6', unit: 'pc', name: 'eggs'},
  {quantity: '20.25', unit: 'oz', name: 'all-purpose flour'},
  {quantity: '2', unit: 'tsp', name: 'salt'},
  {quantity: '2', unit: 'tbsp', name: 'baking powder'},
  {quantity: '2.5', unit: 'cups', name: 'milk'},
  {quantity: '1', unit: 'tbsp', name: 'vanilla extract'}];

//console.log(getQuantityOfIngredient("eggs", 2, arr));


function getPurchaseList(arr) {
  let calculator_funcs = [];
  for (let ingredient of arr) {
    calculator_funcs.push(function (result) {
      let quantityOfIngredient = result[ingredient.quantity] ? result[ingredient.quantity] : 0;
      result[ingredient.quantity] = quantityOfIngredient + parseFloat(ingredient.quantity);
      return result;
    });

  }
  let result = {};
  for (const calculator_func of calculator_funcs) {
    let something = calculator_func(result);
    Object.assign(result, something);
  }
  console.log("result");
  return result;
}

let arr2 = [
  {quantity: '8', unit: 'fl oz', name: 'pasteurized liquid egg whites'},
  {quantity: '32', unit: 'oz', name: 'powdered sugar'},
  {quantity: '0.75', unit: 'tsp', name: 'salt'},
  {quantity: '32', unit: 'oz', name: 'unsalted butter'},
  {quantity: '2.5', unit: 'tbsp', name: 'vanilla extract'},
  {quantity: '1', unit: 'oz', name: 'unsalted butter'},
  {quantity: '21', unit: 'oz', name: 'granulated sugar'},
  {quantity: '6', unit: 'pc', name: 'eggs'},
  {quantity: '20.25', unit: 'oz', name: 'all-purpose flour'},
  {quantity: '2', unit: 'tsp', name: 'salt'},
  {quantity: '2', unit: 'tbsp', name: 'baking powder'},
  {quantity: '2.5', unit: 'cups', name: 'milk'},
  {quantity: '1', unit: 'tbsp', name: 'vanilla extract'}];

//console.log(getPurchaseList(arr2))


function calculateDifficulty(arr3) {
  let difficulties = [];
  for (let timer of arr3) {
    let str;
    timer = parseInt(timer);
    if (timer === 0) {
      str = "super easy";
    } else if (timer <= 10) {
      str = "easy";
    } else if (10 < timer && timer <= 20) {
      str = "medium";
    } else if (20 < timer && timer <= 30) {
      str = "difficult";
    }
    difficulties.push(str);
  }
  return difficulties;
}

let arr3 = ['0', '6', '3', '3', '30', '15', '5', '11'];
console.log(calculateDifficulty(arr3))

//https://www.codewars.com/kata/5797bbb34be9127074000132/train/javascript
function tetration(x, y) {

  if (y === 0)
    return 1;
  if (y === 1)
    return x;

  while (y > 1) {
    x += Math.pow(x, x);
    y--;
  }
  return x;
}

console.log(tetration(2, 3));
console.log(tetration(3, 2));
console.log(tetration(3, 3));

//https://www.codewars.com/kata/56f3a1e899b386da78000732
function partlist(arr) {
  // your code
}
