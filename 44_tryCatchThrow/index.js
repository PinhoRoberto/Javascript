/* function soma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os argumentos devem ser números');
    }
    return a + b;
}
try {
  console.log(soma(10, 20));
  console.log(soma('10', 20));
} catch (error) {
    console.log('Erro capturado: ' + error.message);
} */

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora(11);
console.log (retornaHora (data));
} catch (e) {    
}finally{
console.log ("tenha um bom dia");
}
