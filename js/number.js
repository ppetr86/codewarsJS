let myNum = new Number(10);
console.log(myNum.toExponential(2));
console.log(myNum.toFixed(2))

console.log((42).toFixed(3))
console.log((38.2).toPrecision(4)); // cislo bude mit 4 cislice dohromady
console.log((42000.42).toLocaleString('cs-cz'));

console.log(!Number.isFinite(42));
console.log(42 > -Infinity && 42 < Infinity);

//jak zjistit zdali je promenna cislo
console.log(42 % 1 === 0);
console.log("ab" % 1 === 0);
console.log(Number.isInteger(42))

//Kterým způsobem lze ověřit, zda je nějaká hodnota typu Number, uložená v proměnné answer, hodnota NaN?
let some;
console.log(42 !== 55)
console.log(Number.isNaN(some))

// konstanty v Number
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(Number.EPSILON) // vuyziti pro upresneni prace s desetinnymi cisly

console.log(["Ford", "Trillian", "Arthur", "Zaphod"].slice(2, -1))

let nums = [111,10,12,14];
console.log(Math.min(...nums))

//vyraz priradi 180 stupnu uhel
console.log(Math.cos(Math.PI));

//dostupne konstanty: eulerovo a ludolfovo cislo

