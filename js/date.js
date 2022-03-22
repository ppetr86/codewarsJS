console.log("now date is: " + new Date())
// mesice zacinaji od 0 a konci 11
console.log("defined date is " + new Date(1986,9,23,))
let now = new Date();
console.log(`${now.getDate()}. ${now.getMonth() + 1}.${now.getFullYear()}`);
console.log(`${now.getHours()}:${now.getMinutes()}`);

let guideRelease = new Date("1979-10-12 08:00");
console.log(`${guideRelease.getDate()}. ${guideRelease.getMonth() + 1}.`);

now.setDate(25)
console.log(`${now.getDate()}. ${now.getMonth() + 1}.`);
