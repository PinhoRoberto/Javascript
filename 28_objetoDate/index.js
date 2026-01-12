//const data = new Date(0);
//console.log(data.toString());

//const data = new Date(2024, 5, 15, 14, 30, 0);
//console.log(data.toString());

const data = new Date('2024-06-15T14:30:00');
console.log(data.toString());   

//const data = new Date(2024, 3); //a, m, d, h, min, s, ms
//console.log(data.toString());
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();
const seg = data.getSeconds();
console.log(dia, mes, ano, hora, min, seg);

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milissegundos', data.getMilliseconds());
console.log('Dia da semana', data.getDay());
console.log(data.toString());
console.log(Date.now());