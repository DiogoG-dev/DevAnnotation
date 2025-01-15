/*Exercício 1: Rest no Parâmetro de Função
Objetivo: Use o operador rest (...) para coletar os parâmetros de uma função em um array.
Crie uma função chamada concatenarStrings que receba um número variável de strings e as 
combine em uma única string, separada por um espaço.*/

function concatenarStrings(first, last, ...resto) {
    console.log(first + last);
    console.log(resto);
}

concatenarStrings('Olá ', 'mundo!', 'Me', 'chamo', 'Diogo');

/*Exercício 2: Spread para Combinação de Objetos
Objetivo: Use o operador spread (...) para combinar dois objetos em um único objeto.
Crie duas constantes, pessoa1 e pessoa2, representando duas pessoas com propriedades como 
nome, idade e cidade. Em seguida, crie um terceiro objeto, pessoaCompleta, que combine as 
propriedades de pessoa1 e pessoa2, garantindo que as propriedades de pessoa2 sobrescrevam 
as de pessoa1 caso haja conflito.*/

const pessoa1 = {
    nome: 'Diogo',
    idade: 2,
    cidade: 'São'
};

const pessoa2 = {
    nome: 'Gabriel',
    idade: 2,
    cidade: 'Paulo'
};

const pessoaCompleta = {
    ...pessoa1,
    ...pessoa2
};

console.log(pessoaCompleta)

/*Exercício 3: Rest em Arrays
Objetivo: Use o operador rest para desestruturar um array e coletar os elementos restantes.
Dado o seguinte array de números, crie uma função chamada somarRestantes que, ao receber o 
primeiro número como argumento e os outros números como "resto", retorne a soma de todos os 
números restantes.*/

function somarRestantes(first, ...resto) {
    console.log(first)
    console.log(resto.reduce((acc, at) => acc + at, 0));
}

somarRestantes(1, 2, 3, 4);

/*Exercício 4: Spread para Cópia de Arrays
Objetivo: Use o operador spread para criar uma cópia de um array.
Crie uma função chamada copiarArray que recebe um array e retorna uma cópia dele. Em seguida, 
modifique a cópia, adicionando um novo item e verifique se a cópia e o array original 
permanecem independentes.*/

function copiarArray(...array) {
    return [...array]
}

const original = [1, 2, 'e', 4, 's']
const copia = copiarArray(original)

copia.push(6);

console.log(original);
console.log(copia);

/*Exercício 5: Rest e Spread Combinados em Funções
Objetivo: Use rest e spread juntos para manipular dados em uma função.
Crie uma função chamada filtrarValores que receba um valor de filtro como primeiro parâmetro e 
um número variável de valores. Utilize o operador rest para capturar os valores e, em seguida, 
use o operador spread para retornar todos os valores que são maiores que o valor de filtro.*/

function filtrarValores(filtro, ...valores) {
    return [...valores.filter(valor => valor > filtro)]
}

console.log(filtrarValores(10, 5, 12, 8, 20, 15));