const nome = "Johnathan";
const sobrenome = "Silva";
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;
let imc;
let anoDeNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoDeNascimento = 2025 - idade;
console.log(`${nome}, ${sobrenome}, tem ,${idade}, anos de idade, ${peso}, kilos , ${alturaEmM} de altura e nasceu em ${anoDeNascimento}`);

console.log("Seu IMC é: " + imc);