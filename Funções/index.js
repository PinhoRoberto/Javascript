/*
function saudacao(nome) {
console.log(`Olá, seja bem-vindo ${nome}!`);
}
saudacao('Carlos'); // Executando a função
saudacao('Maria'); // Executando a função novamente com outro nome
// */

function soma(a, b) {
    const resultado = a + b;
    return resultado; // Retorna a soma dos dois números
}
console.log(soma(3, 5)); // Chama a função e imprime o resultado
console.log(soma(10, 20)); // Chama a função com outros valores e imprime o resultado
console.log(soma("Luiz", " Otavio")); // Chama a função com outros valores e imprime o resultado


function soma(a, b) {
    const resultado = a + b;
    return resultado; // Retorna a soma dos dois números
}
const resultado = soma(3, 5); // Armazena o resultado da função em uma variável
console.log(resultado); // Imprime o resultado armazenado na variável

/* //Função comum

const raiz = function(n) {
    return n ** 0.5;
}
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

// Arrow function
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));