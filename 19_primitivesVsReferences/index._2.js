/*
referencia mutavel - arrays e objetos - copia por referencia
*/

const a = {
    nome: "Luiz",
    sobrenome: "Miranda"
};
const b = {...a};   //Operador Spread (...) - Copia todas as propriedades do objeto A para o objeto B
a.nome = "João";
console.log(a);
console.log(b);