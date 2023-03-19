var login = 'lucascaarv'; //variável que armazena o login correto
var pass = 'rede11'; //variável que armazena a senha correta
var usuario = document.getElementById('usuario'); //variável que armazena o elemento input de login
var senha = document.getElementById('password'); //variável que armazena o elemento input de senha
var result = document.getElementById('res'); //variável que armazena o elemento onde será exibida a mensagem de erro ou sucesso

document.getElementById("myForm").addEventListener("submit", function(e){ //adiciona o evento submit no formulário e chama a função log
    e.preventDefault(); //impede que o formulário seja submetido antes de validar as informações
    log(); //chama a função log
});

function log(){
    let _usuario = (usuario.value); //armazena o valor do login digitado pelo usuário
    let _senha = (senha.value); //armazena a senha digitada pelo usuário

    if(_usuario == '' || _senha == ''){ //verifica se algum dos campos está vazio
        result.innerHTML = 'Insira os dados!'; //exibe uma mensagem de erro informando que os campos estão vazios
        result.style.color = 'purple'; //muda a cor da mensagem para roxo
    } else if(_usuario != login && _senha != pass){ //verifica se as informações de login e senha estão incorretas
        result.innerHTML = 'Usuario ou senha incorretos!'; //exibe uma mensagem de erro informando que as informações estão incorretas
        result.style.color = 'red'; //muda a cor da mensagem para vermelho
    } else{
        result.innerHTML = 'Login Correto!'; //exibe uma mensagem de sucesso informando que o login foi realizado com sucesso
        result.style.color = 'green'; //muda a cor da mensagem para verde
    }
    usuario.value = ''; //limpa o campo de login
    usuario.focus(); //coloca o foco no campo de login
}
var teste = 'teste'
console.log(typeof(teste)) // Exemplo de como usar o typeof(no caso aqui retornou string)
// é fn+F8 pra usar o node 