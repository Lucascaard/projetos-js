//1
const num = 10;

const dobro = (num) => {
    return num*2;
}

console.log(dobro(10));

//2

const texto = 'lucas';

const tamanhoString = (string_) => {
    return string_.length;
};

console.log(tamanhoString(texto));

//3

const array = [1, 2, 3, 4, 5];

const totalArray = array.reduce((acc,value) => acc + value, 0);
console.log(totalArray);

//4

const endereco = ['Rua Paulo Zinher', 'N 51', 'Tatuquara', 'Paraná', 'Brasil'];

const concatenar = (endereco) => {
    return endereco.join(' ');
};

console.log(concatenar(endereco));

//5 Escreva uma arrow function que receba um objeto e retorne apenas as propriedades cujo valor seja uma string.


//6 Escreva uma arrow function que receba um array de objetos e retorne um novo array com apenas os objetos cujo valor de uma determinada propriedade seja igual a um determinado valor.


//7 Escreva uma arrow function que receba dois números e retorne o maior deles.
const sete = (num1, num2) => {
    let result = 0;
    if(num1 > num2 ){
         result = num1;
    } else{
         result = num2;
    }
    return result;
}

console.log(sete(3,2));

//8 Escreva uma arrow function que receba um array de números e retorne a soma de todos os números pares.
const arrays = [2, 5, 9, 6, 8, 10, 11];

const somaPares = (arrays) => {
    arrays.forEach()
}
