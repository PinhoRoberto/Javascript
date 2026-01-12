
const age = 20;
const isStudent = true;
const hasCoupon = false;

console.log(age >= 18 && isStudent);
console.log(age >= 21 || isStudent);
console.log(!hasCoupon);
console.log(age >= 18 && !hasCoupon);
console.log((age >= 21 || isStudent) && !hasCoupon);

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 === 10);
console.log(10 === "10");
console.log(10 == "10");
console.log("banana" === "banana");
console.log("Banana" === "banana");