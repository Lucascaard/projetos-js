var display = document.getElementById('display') // cria uma referência para o elemento com o id "display"
var minutos = document.getElementById('min') // cria uma referência para o elemento com o id "min"
var segundos = document.getElementById('seg') // cria uma referência para o elemento com o id "seg"
var comecar = document.getElementById('comecar') // cria uma referência para o elemento com o id "comecar"

var cronometroSeg;
var interval; // declara as variáveis globais "cronometroSeg" e "interval"

for(var i = 0;i <= 60;i++){
    minutos.innerHTML += '<option value="'+i+'">'+i+'</option>'; // adiciona opções de minutos de 0 a 60 no elemento "minutos"
}
for(var i = 1;i <= 60;i++){
    segundos.innerHTML += '<option value="'+i+'">'+i+'</option>'; // adiciona opções de segundos de 1 a 60 no elemento "segundos"
}

comecar.addEventListener('click', function(){ // adiciona um evento de click no elemento "comecar"
    let segundoAtual = segundos.value; // guarda o valor selecionado no elemento "segundos"
    let minutoAtual = minutos.value;  // guarda o valor selecionado no elemento "minutos"
    display.childNodes[1].innerHTML = minutoAtual + ':' + segundoAtual; // atualiza o conteúdo do elemento "display" com o valor selecionado em minutos e segundos
    interval = setInterval(function(){ // inicia um intervalo de tempo
        segundoAtual--; //decrementa o valor de segundoAtual em 1
            if(segundoAtual == 0){ // se o segundoAtual chegar a 0
                if(minutoAtual > 0){ // e ainda houver minutos
                    minutoAtual--; //decrementa o valor de minutoAtual em 1
                    segundoAtual = 59; // e seta segundoAtual para 59
                } else{
                   alert('ACABOU'); // se não houver mais minutos, mostra uma mensagem de alerta
                    clearInterval(interval); // e para o intervalo de tempo
                }
            }
            display.childNodes[1].innerHTML = minutoAtual + ':' + segundoAtual; // atualiza o conteúdo do elemento "display" com o valor atual de minutos e segundos
    },1000); // o intervalo é definido em 1000 milissegundos (1 segundo)
});

 