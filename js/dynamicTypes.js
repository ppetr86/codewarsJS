let answer = false;
answer = "Answer to the ultimate question.";
answer = 42;
console.log(answer);

Number("42") // 42
Number("4.2") // 4.2
Number("2A") // NaN
Number("X") // NaN

parseInt("42", 10) // 42
parseInt("4.2", 10) // 4
parseInt("2A", 10) // 2
parseInt("2A", 16) // 42
parseInt("X", 10) // NaN

parseFloat("42") // 42
parseFloat("4.2") // 4.2
parseFloat("2A") // 2
parseFloat("4.2G") // 4.2
parseFloat("X") // NaN

console.log(parseInt("42",10))
console.log(Number("42"))

console.log(String(42))
let nr = 42;
console.log(nr.toString())

let str = "";
console.log(Boolean(nr));
console.log(Boolean(str));
//Matematické operace očekávají čísla, dojde proto v tomto programu k automatické konverzi na čísla.
// Operátor + však může reprezentovat buď sčítání, nebo spojování řetězců.
// Tento operátor bude vysvětlen v jedné z následujících lekcí.
let answer2 = [42];
let ready = true;
console.log(answer2 + ready);
console.log(answer2 - ready);

//TypeError: Cannot mix BigInt and other types, use explicit conversions
/*let years = 1000n;
let answer3 = 42;
console.log(years - answer3);*/

console.log(typeof "A")
