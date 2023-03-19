const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;


// event é o evento na tela, target é o algo e id é o id do alvo
// nessa arrow function se eu colocar pra  no console o event eu consigo ver os atributos do evento
const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const stopAutomatic = () => {
    clearInterval(intervalId);
    /* Toda vez que o método setInterval é chamado ele retorna um id único, então se ele é chamado muitas vezes
    ele tem vários id. o método clearInterval limpa os id do parâmetro que foi passado. Nesse caso o parâmetro é 
    o id dado para o setInterval que é intervalId */
}

// arrow function usando um if ternario pra incrementar ou zerar a variavel colorIndex
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0 ;
            /* No colorIndex o incremento <++> foi colocado antes porque esse if ja esta sendo atribuído a propia
             variável, no caso se fosse colorIndex++ iria primeiro atribuir e depois incrementar e acabava atribuindo
             o mesmo valor e ficava sempre em 0 então colocando o <++> antes ele ja incrementa.
            */

//Arrow function para passar para a função automatic
const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex(); // incrementar ou zerar o colorIndex
}

// object com arrow functions
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000) // setInterval executa a função que foi passada a cada x tempo
}

buttons.addEventListener('click', trafficLight);

/* 
EXPLICAÇÃO DO ChatGPT

trafficLight(event) - é uma função de seta que é chamada quando o usuário clica em um dos botões de controle. O argumento event representa o evento de clique. O evento target é o elemento que foi clicado e o id é o ID desse elemento. A função primeiro para o semáforo automático, caso esteja ativo, e, em seguida, chama a função correspondente ao botão clicado na propriedade turnOn.

stopAutomatic() - é uma função de seta que limpa o intervalo de tempo que é responsável por mudar as cores do semáforo de forma automática.

nextIndex() - é uma função de seta que altera o índice da cor do semáforo. Se o índice atual for menor que 2 (representando as cores vermelho, amarelo e verde), o índice será incrementado em 1. Caso contrário, o índice será redefinido para 0.

changeColor() - é uma função de seta que muda a cor do semáforo para a próxima cor na lista colors. Em seguida, a função nextIndex é chamada para atualizar o índice.

turnOn - é um objeto com funções de seta que definem a cor do semáforo. A propriedade automatic é responsável por iniciar o semáforo automático, usando o método setInterval para mudar as cores a cada 1000 milissegundos.

buttons.addEventListener('click', trafficLight) - este é o último trecho de código que adiciona um ouvinte de evento de clique ao elemento com o ID buttons. Quando o usuário clica em um dos botões, a função trafficLight é chamada. */
