const age = 25;
const hasLicense = true;
const balance = 150;
const isPremium = true;


const isOldEnough = age>=21;
const hasEnoughMoney = balance >=200;

const canRent = isOldEnough && hasLicense && (hasEnoughMoney || isPremium);

console.log("===== ELIGIBILITY CHECK =====");
console.log(`Age: ${age}`);
console.log(`Has License: ${hasLicense}`);
console.log(`Balance: $${balance}`);
console.log(`Premium Member: ${isPremium}`);
console.log("=============================");
console.log(`Can rent car: ${canRent}`);

