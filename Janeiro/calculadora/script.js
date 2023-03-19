function insert(num)
{
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar()
{
    document.getElementById('resultado').innerHTML = '';
}

function back()
{
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

    /*A função substring() em JavaScript é usada para extrair uma parte de uma string. 
    Ela recebe dois parâmetros: o índice inicial e o índice final da parte da string que você deseja extrair.
     A função retorna uma nova string com os caracteres selecionados. */
}

function calcular()
{
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado); 
    } else
    {
        document.getElementById('resultado').innerHTML = 'Nada...'
    }
    /*A função eval() em JavaScript é usada para avaliar uma string como código JavaScript e retornar o resultado. 
    Ela permite que você execute comandos de JavaScript dinamicamente, com base em uma string de entrada.

    Exemplo:

        let x = 5;
        let y = 10;
        let result = eval("x * y");
        console.log(result); // prints 50

    Neste exemplo, a função eval() está avaliando a string "x * y" como código JavaScript e retornando o 
    resultado da operação matemática (5 * 10 = 50). */
}
