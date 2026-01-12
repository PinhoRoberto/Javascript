function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{ 
        hour12: false,
        timeZone: 'UTC'
})
}
console.log(getTimeFromSeconds(10)); // 00:00:10
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function atualizaRelogio(){
    if (timer) return;
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    atualizaRelogio();
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado');
    timer = null;
}); 
zerar.addEventListener('click', function(event){
    clearInterval(timer);
    timer = null;
    segundos = 0;
    relogio.innerHTML = getTimeFromSeconds(segundos);
});