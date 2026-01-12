/*Primitivos (imutaveis): number, string, boolean, undefined, null, (symbol,bigint) - valor
 */
/*
let nome = 'Luiz';
nome[0] = 'R';  //NÃO FUNCIONA
console.log(nome[0]);   //Luiz
console.log(nome.length);   //4
console.log(nome);   //Luiz

let a = 'A';
let b = a;  //Copia o valor de A para B
console.log(a, b);
a = 'Outra coisa'; //Muda o valor de A
console.log(a, b); //B continua com o valor antigo
*/

/*Referência (mutável): array, object, function - endereço de memória
    */
let a = [1, 2, 3];
let b = a; //Copia o endereço de memória de A para B
let c = b; //Copia o endereço de memória de B para C
console.log(a, b);  //1,2,3 1,2,3
a.push(4);  //Adiciona o valor 4 ao array A
console.log(a, b);  //1,2,3,4 1,2,3,4 (B também é alterado pois aponta para o mesmo endereço de memória que A) 
b.pop();  //Remove o último valor do array B
console.log(a, b);  //1,2,3 1,2,3 (A também é alterado pois aponta para o mesmo endereço de memória que B)
a.push('Luiz'); //Adiciona o valor 'Luiz' ao array B 
console.log(c);