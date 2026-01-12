let num1 = 9.545634;
let num2 = Math.floor(num1); //arredonda para baixo
let num3 = Math.ceil(num1); //arredonda para cima
let num4 = Math.round(num1);    //arredonda para o mais próximo
let num5 = Math.max(1,2,3,4,5,-10,150,20,30); //retorna o maior número
let num6 = Math.min(1,2,3,4,5,-10,150,20,30); //retorna o menor número

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(Math.random()); //retorna um número aleatório entre 0 e 1
//num1 = parseFloat(num1.toFixed(2)); //converte num1 para float com 2 casas decimais
num1 = +num1.toFixed(2); //converte num1 para float com 2 casas decimais
console.log(num1);