//Napište algoritmus, který vyhledá v poli největší hodnotu. Pozor, v poli mohou být i textové hodnoty, které byste měli ignorovat.


//Napište algoritmus, který seřadí položky v poli od největší po nejmenší. Uvažujte, že v poli jsou pouze čísla.

/*
Projděme si další příklad ukazující několik technik najednou.Bude se jednat o analýzu rodného čísla.
Předpokládejme, že máme na vstupu rodná čísla a máme z nich poznat několik charakteristik daného člověka a
to pohlaví a den a měsíc narození. Nejprve si popišme rodné číslo. Rodné číslo se sestává ze dvou částí oddělených
lomítkem, kde první část obsahuje stabilně 6 číslic vyjadřující datum narození a pohlaví dané osoby a
část druhá obsahuje trojici nebo čtveřici čísel, jejichž význam není pro tuto aplikaci důležitý.
První část se má následující formát: YYMMDD, kde YY označuje poslední dvě číslice roku, MM měsíc a DD den.
Navíc ženám se k měsíci přičítá hodnota 50. Žena a muž narozeni např. (23.01.1998, jedná se o stejné datum),
tedy mohou mít následující rodná čísla:
žena: 985123/8144
muž: 980123/8139
Cílem programu je ze zadaného čísla zjistit pohlaví, den a měsíc narození respondenta.*/


/*
1. Uložte si do pole dny v týdnu a následně je vypište ve formátu:
  1 - pondělí
2 - úterý
...
7 - neděle
*/

function formatDaysOfWeek() {
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let daysWithNr = [...days];
  for (let i = 0; i < days.length; i++) {
    daysWithNr[i] = (i + 1) + " - " + daysWithNr[i];
  }

  let daysWithNr2 = [...days];
  daysWithNr2.forEach((element, index) => {
    daysWithNr2[index] = (1 + index) + " - " + daysWithNr2[index];
  });

  console.log(daysWithNr);
  console.log("-------")
  console.log(daysWithNr2)
  console.log("reversed")

  daysWithNrReversed = [...daysWithNr];
  daysWithNrReversed.reverse();
  console.log("-------")
  console.log(daysWithNrReversed)
}

formatDaysOfWeek();

console.log("findMin:")

function findMin() {
  let arr = ["1", "hello", "2", 3, 5, 3, 1, null, undefined, NaN, 99];
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != null && !isNaN(arr[i]) && min > arr[i])
      min = arr[i];
  }
  console.log(min);
}

findMin();

//3. Napište algoritmus, který na základě zadaného pole vrátí nové pole, které nebude obsahovat hodnoty menší než 10.
console.log("filterArr:")

function filterArr() {
  console.log("filter mensi nez 10")
  let arr = [100, 8, 9, 10, 11, 12];
  console.log(arr);
  let arr2 = new Array();
  let index = 0;

  while (index++ < arr.length) {
    if (arr[index] < 10)
      arr2.push(arr[index]);
  }
  console.log(arr2)

  arr = arr.filter(nr => nr < 10);
  console.log(arr);
}

filterArr();

//4. Napište algoritmus, který na základě zadaného pole vrátí nové pole, jehož hodnoty budou dvojnásobné
function multiplyArrVals(arr, multiplier) {
  console.log("multiplied")
  console.log(arr)
  let arr2 = new Array();
  arr.forEach(nr => arr2.push(nr * 2))
  console.log(arr2);
  arr = arr.map(nr => nr * multiplier);
  console.log(arr);
}

multiplyArrVals([10, 20, 30, 40], 2);
/*
2. Napište algoritmus, který vyhledá v poli nejmenší hodnotu. Pole může obsahovat i nečíselné hodnoty..*/

//Napište algoritmus, který z pole vybere pouze číselné hodnoty. Každou číselnou hodnotu vynásobí 5. Vrátí nové pole s výsledky. Vstup bude následující pole:

function findNumberAndMultiply(arr, multiplier) {
  console.log("findNumberAndMultiply");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null && !isNaN(arr[i]))
      arr[i] *= multiplier;
  }
  console.log(arr);
}

findNumberAndMultiply([10, null, "ahoj", 20, 30, 40], 2);

console.log("sort reverse")
console.log([3, 4, 2, 1, 6, 5]);
console.log([3, 4, 2, 1, 6, 5].sort().reverse());
6


//https://www.codewars.com/kata/58039f8efca342e4f0000023/train/javascript
//Replaces every letter with the letter following it in the alphabet (see note below)
//Makes any vowels capital
//Makes any consonants lower case
//the alphabet should wrap around, so Z becomes A
//in this kata, y isn't considered as a vowel.

function changer(str) {
  let vowels = new Set();
  vowels.add("a");
  vowels.add("e");
  vowels.add("i");
  vowels.add("o");
  vowels.add("u");

  let consonants = new Set();
  consonants.add("b");
  consonants.add("c");
  consonants.add("d");
  consonants.add("");
  consonants.add("");
  consonants.add("");
  consonants.add("");
  consonants.add("");
  consonants.add("");
  consonants.add("");
  consonants.add("");

}

console.log(changer("Cat30"));

function between(a, b) {
  if (a !== null && b != null && !isNaN(a) && !isNaN(b))
    return [...Array(1 + b - a).keys()].map(i => i + a);
  else
    return [];
}

console.log("function between")
console.log(between(-2, 2));

function usdcny(usd) {
  return (6.75 * usd).toFixed(2) + ' Chinese Yuan';
}

console.log(usdcny(15))

function dotCalculator(equation) {
  const indexOfSpace = equation.indexOf(" ");
  const indexOfLastSpace = equation.lastIndexOf(" ");
  const secondPartLength = equation.length - indexOfLastSpace - 1;
  let result = indexOfSpace;
  switch (equation.charAt(indexOfSpace + 1)) {
    case "+" :
      result += secondPartLength;
      break;
    case "-" :
      result -= secondPartLength;
      break;
    case "*" :
      result *= secondPartLength;
      break;
    case "/" :
      result /= secondPartLength;
      break;
  }
  return ".".repeat(result);
}

console.log(dotCalculator(".... // .."));

function validatePIN(pin) {
  const regex = /^\d+$/;
  const arr = pin.split("");
  let result = true;
  if (arr.length === 4 || arr.length === 6) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].match(regex))
        result = false;
    }
  } else {
    result = false;
  }
  return result;
}

function validatePIN2(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

console.log("validate pin: " + validatePIN("1"));


function raise(arr, howMuchInPercent) {
  return arr.map(each => each[1] *= 1 + (howMuchInPercent / 100));
}

function raise2(arr, howMuchInPercent) {
  let average = arr.reduce((a, b) => a[1] + b[1], 0);
  let name = arr[0][0];
  let salary = arr[0][1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] < average && arr[i][0].charAt(0) === "K")
      arr[i][1] *= 1.1;
    if (arr[i][1] > salary) {
      name = arr[i][0];
      salary = arr[i][1];
    }
  }
  return `Nejvyssi plat je ${salary} ma ${name}`;
}

console.log(raise([
  ['Karel', 22000],
  ['Pavel', 23000],
  ['Jiri', 24000],
  ['Klara', 23200]], 100));

console.log(raise2([
  ['Karel', 22000],
  ['Pavel', 23000],
  ['Jiri', 24000],
  ['Klara', 23200]], 100));

function stringReversal(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    if (char >= 'a' && char <= 'z')
      reversed += String.fromCodePoint(char.charCodeAt(0) - 32);
    else
      reversed += char;
  }
  return reversed;
}

console.log("reversed input: " + stringReversal("Ahoj"));

function elevator(str) {
  let level = 0;
  for (let i = 0; i < str.length; i += 2) {
    if (str.substring(i, i + 2) === 'UP')
      level++;
    else if (str.substring(i, i + 2) === 'DN')
      level--;
    if (level > 5 || level < -5)
      return "nastala kolize";
  }
  return `Vytah skonci v ${level}. patre.`;
}

console.log("elevator: " + elevator("UPUPDNDNUPUPUPDNDNUP"));

function sumAsOnPaper(nr1, nr2) {
  let result = 0;
  const reversedNr1 = String(nr1).split("").reverse();
  const reversedNr2 = String(nr2).split("").reverse();
  let multiplier = 1;
  for (let i = 0; i < Math.max(reversedNr1.length, reversedNr2.length); i++) {
    let add1 = 0;
    if (i < reversedNr1.length)
      add1 = reversedNr1[i] * multiplier;
    let add2 = 0;
    if (i < reversedNr2.length)
      add2 = reversedNr2[i] * multiplier;
    let interim = add1 + add2;
    result += interim;
    multiplier *= 10;
  }

  return result;
}

console.log("sumAsOnPaper " + sumAsOnPaper(999, 200));

function ohrozeneVeze(arr) {
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][0] === arr[j][0] || arr[i][1] === arr[j][1])
        result++;
    }
  }

  return `pocet vezi v ohrozeni: ${result}`;
}

console.log("ohrozene veze: " + ohrozeneVeze([[1, 1], [2, 2], [2, 7], [0, 7], [7, 0], [7, 7]]));

function zarovnejPole(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result += arr[i][j] + "\t";
    }
    result += "\n";
  }
  return result;
}

console.log("zarovnane pole:\n" + zarovnejPole([[5, 15, -100, 200], [2000, 5, 10, -50], [300, -30, 400, 9]]));

function insertToArray(numbers, numbers2, number) {
  numbers2 = numbers2.reverse();
  if (number === numbers.length)
    return [...numbers, ...numbers2];
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i === number) {
      result = [...result, ...numbers2];
    }
    result.push(numbers[i]);
  }
  return result;
}

console.log(insertToArray([1, 2, 3], [5, 4], 3));

function najdiPrvek(arr) {
  let minOfBiggerThanAvg = Number.MAX_SAFE_INTEGER;
  let maxOfSmallerThanAvg = Number.MIN_SAFE_INTEGER;
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg)
      minOfBiggerThanAvg = Math.min(minOfBiggerThanAvg, arr[i]);
    else if (arr[i] < avg)
      maxOfSmallerThanAvg = Math.max(maxOfSmallerThanAvg, arr[i]);
  }

  return `nejmensi prvek vetsi nez prumer: ${minOfBiggerThanAvg}\nnejvetsi prvek mensi nez prumer: ${maxOfSmallerThanAvg}`
}

console.log("najdiPrvek: \n" + najdiPrvek([5, 6, 4, 10, -5]));

function myReplace(str) {
  let result = str.replace(/[^0-9]/g, "");
  return result;
}

console.log(myReplace("ahoj123!= ahoj"))

//https://www.codewars.com/kata/59d727d40e8c9dd2dd00009f/train/javascript
function balance(book) {
  const arr = book.split("\n");
  let balance = 0;
  let totalExpense = 0;
  let averageExpense = 0;
  for (let i = 0; i < arr.length; i++) {
    let str = String(arr[i]).replace(/[^a-z0-9. ]+/gi, "");
    let howMuch = parseFloat(str.split(" ")[str.split(" ").length - 1]);
    if (i === 0) {
      str = "Original Balance: " + howMuch.toFixed(2) + "\n";
      balance = howMuch;
    } else {
      balance -= howMuch;
      str += " Balance " + balance.toFixed(2) + "\n";
      totalExpense += howMuch;
    }
    arr[i] = str;
  }

  totalExpense = totalExpense.toFixed(2);
  averageExpense = (totalExpense / (arr.length - 1)).toFixed(2);
  arr.push("Total expense  " + totalExpense + "\n");
  arr.push(`Average expense  ${averageExpense}`);
  return arr.join("");
}

var b1 = `1000.00!=
125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10`
console.log(balance(b1));

var b2 = `1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`
console.log("-------")
console.log(balance(b2));

//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
function arrayDiff(arr1, arr2) {
  let result = [];
  const setOfB = new Set(arr2);
  arr1.forEach(function (each) {
    if (!setOfB.has(each))
      result.push(each);
  })
  return result;
}

function array_diff2(a, b) {
  return a.filter(e => !b.includes(e));
}

function array_diff3(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) === -1;
  });
}

console.log("arrayDiff " + arrayDiff([1, 2, 2, 2, 3], [2]));
console.log("arrayDiff " + arrayDiff([1, 8, 2], []));

console.log("arrayDiff2 " + array_diff2([1, 2, 2, 2, 3], [2]));
console.log("arrayDiff2 " + array_diff2([1, 8, 2], []));

//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/java
function splitStrings(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    let currentAndNext = str.charAt(i) + ((i + 1 <= str.length - 1) ? str.charAt(i + 1) : "_");
    result.push(currentAndNext);
  }
  return result;
}

function splitStrings2(s){
  return (s+"_").match(/.{2}/g)||[]
}

console.log(splitStrings("abcdef"));
console.log(splitStrings("abcdefg"));
