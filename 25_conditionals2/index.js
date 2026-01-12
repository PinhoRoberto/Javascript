const numero = 11;

if (numero >= 0 && numero<=5){
    console.log('O número está entre 0 e 5');
}else if (numero >=6 && numero <=8){
    console.log('O número está entre 6 e 8');
}else if (numero >=9 && numero <=11) {
    console.log('O número está entre 9 e 11');
} else {
    console.log ('o numero é inválido');
}

/* outro exemplo */
if (numero % 2 ===0){
    console.log('O número é par');
} else {
    console.log ('O número é ímpar');
}