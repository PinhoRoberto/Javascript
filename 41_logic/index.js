/* function max (x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log (max (10, 51)); */

const max2 = (x, y) => x > y ? x : y;
console.log (max2 (10, 77));
//########

function ePaisagem(largura, altura) {
    return largura > altura ? true: false;
}
console.log (ePaisagem (1920, 1080));
//########

const Epaisagem = (largura, altura) => largura > altura;
console.log (Epaisagem (1080, 1920));
//########

function fizzBuzz (n) {    
if (n % 3 === 0 && n % 5 === 0) return 'fizzbuzz';
if (n % 3 === 0) return 'fizz';
if (n % 5 === 0) return 'buzz';
return n;

}
for (let i = 0; i <= 100; i++) {
console.log (i, fizzBuzz (i));
}