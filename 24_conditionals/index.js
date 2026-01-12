/* Aula 24 - Condicionais If e Else */
/*entre 0 e 11 - Bom dia
entre 12 e 17 - Boa tarde
entre 18 e 23 - Boa noite */

const hora = 50;
if (hora >= 0 && hora <=11){
    console.log("Bom dia!");
}else if (hora >= 12 && hora <=17){
    console.log("Boa tarde!");
}else if (hora >=18 && hora <= 23 ){
    console.log('boa noite!');
}else{
    console.log('Hora inválida!');


}

/* outro exemplo */
const tenhoDinheiro = true;   
if (tenhoDinheiro){
    console.log('Vou sair de casa!');
}else{
    console.log('Não vou sair de casa!');
}