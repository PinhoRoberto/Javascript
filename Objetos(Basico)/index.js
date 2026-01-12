/*const pessoa1 = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro"
};
console.log(pessoa1.nome); // Acessando a propriedade nome do objeto pessoa1

const pessoa2 = {
    nome: "Ana",
    idade: 25,
    profissao: "Designer"
};
console.log(pessoa2.nome); // Acessando a propriedade nome do objeto pessoa2
console.log(pessoa2.idade); // Acessando a propriedade idade do objeto pessoa2
console.log(pessoa2.profissao); // Acessando a propriedade profissao do objeto pessoa2*/

function criaPessoa (nome, idade, sobreNome) {
    return {
        nome: nome,
        idade: idade,
        sobreNome: sobreNome
    };
}   
const pessoa1 = criaPessoa("João", 30, "Silva");
console.log(pessoa1.nome); 