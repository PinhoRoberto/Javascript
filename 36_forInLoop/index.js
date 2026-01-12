const frutas = ['pera', 'maça', 'uva'];
/*for (let i = 0; i < frutas.length; i++) {
console.log(frutas[i]);
}*/

//for (let i in frutas) {
  //  console.log(frutas[i]);
//}

const pessoa = {
    nome: 'joao',
    idade: 28,
    cidade: 'São Paulo'
}
for (let chave in pessoa) { 
    console.log(chave, pessoa[chave]);
}