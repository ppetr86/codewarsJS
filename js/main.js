console.log("test")

function sumMul(n, m) {
  if (n <= 0 || m <= 0 || n >= m)
    return "INVALID";

  let result = 0;

  for (let i = n; i < m; i += n) {
    result += n;
  }

  return result;
}

console.log(sumMul(2, 5));

function numberToString(num) {
  return "" + num;
  //return num.toString();
}

console.log(numberToString(123));

function reverseWords(str) {
  let reversed = '';
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 0) {
      reversed += ' ';
      continue;
    }
    for (let j = words[i].length - 1; j >= 0; j--) {
      reversed += words[i].charAt(j);
      if (j === 0 && words.length - 1 > i)
        reversed += ' ';
    }

  }
  return reversed;
}

console.log(reverseWords("double  spaced  words"));

function reverseWords(str) {
  return str.split(' ').map(function (word) {
    return word.split('').reverse().join('');
  }).join(' ');
}

function compress(sentence) {
  let myMap = new Map();
  let words = sentence.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (!isNaN(words[i])) {
      words.splice(i,1);
    }
  }

  for (let i = 0; i < words.length; i++) {
    let lowercased = words[i].toLowerCase();
    if (!myMap.has(lowercased)) {
      myMap.set(lowercased, i);
      result += i;
    } else {
      result += myMap.get(lowercased);
    }
  }
  return result;
}

//console.log(compress("the one bumble bee one bumble the bee"));
//console.log(compress("SILLY LITTLE BOYS silly little boys"));
//console.log(compress("Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"));
console.log(compress("The number 0 is such a strange number Strangely it has zero meaning"));

