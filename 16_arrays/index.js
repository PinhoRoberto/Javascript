const alunos = ['luiz', 'maria', 'joão'];
console.log(alunos[0]);

alunos[0] = 'Eduardo';
console.log(alunos[0]);

console.log(alunos.length);
// for clássico - geralmente com iteráveis (array ou strings)
// for in - retorna o índice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteráveis, arrays ou strings)