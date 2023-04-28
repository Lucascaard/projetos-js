
const calcular = document.getElementById('calcu');

function calc()
{
    const _nome = document.getElementById('txtnome').value;
    const _altura = document.getElementById('txtaltura').value;
    const _peso = document.getElementById('txtpeso').value;
    const res = document.getElementById('res');

    let imc = _peso / (_altura * _altura);
    
    if(!_nome || !_altura || !_peso)
    {
        res.innerHTML = 'Preencha todos os campos vazios!';
    } else 
    {
        if(imc < 18.5)
        {
            res.innerHTML = `${_nome} seu IMC é ${imc.toFixed(2)} e você esta abaixo do peso`;
        } else if(imc < 25)
        {
            res.innerHTML = `${_nome} seu IMC é ${imc.toFixed(2)} e você esta no peso ideal`;
        } else if(imc < 30)
        {
            res.innerHTML = `${_nome} seu IMC é ${imc.toFixed(2)} e você esta levemente acima do peso`;
        } else if(imc < 35)
        {
            res.innerHTML = `${_nome} seu IMC é ${imc.toFixed(2)} e você esta com obsidade grau 1`;
        } else if(imc < 40)
        {
            res.innerHTML = `${_nome} seu IMC é ${imc.toFixed(2)} e você esta com obsidade grau 2(severa)`;
        } else{
            res.innerHTML = `${_nome} seu IMC é ${imc.toFixed(2)} e você esta com obsidade grau 3(mórbida)`;
        }
        document.getElementById('txtnome').value = '';
        document.getElementById('txtaltura').value = '';
        document.getElementById('txtpeso').value = '';
        document.getElementById('txtnome').focus();


    }
}

calcular.addEventListener('click', calc); // adiciona uma função quando for clicado no botao e passa a função que
                                            //  vai ser executada com segundo parametro!