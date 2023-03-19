const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken ()
{
    return lamp.src.indexOf ('quebrada') > -1;
    // retorta true se encontrar a string 'quebrada' dentro do lamp.src
    // e retorna false se não encontrar!
}

function lampOn()
{
    if (!isLampBroken()) // se a condição dentro do if retorna true a lampada esta quebrada
    {                    // essa condição testa de a function isLampBroken esta retornando false por conta do (!)
    lamp.src = './img/ligada.jpg';
    }
}

function lampOff()
{
    if (!isLampBroken())
    {
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken()
{
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn); // evento mouse em cima do elemento
lamp.addEventListener('mouseleave', lampOff); // mouse fora do elemento
lamp.addEventListener('dblclick', lampBroken); // dois clicks no elemento