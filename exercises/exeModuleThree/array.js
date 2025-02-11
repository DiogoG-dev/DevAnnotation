/* Exercício 1: Contar Elementos no Array
Objetivo: Use a propriedade length para contar os elementos de um array.
Crie um array chamado carros contendo diferentes modelos de carro e exiba no console 
quantos elementos há no array. */

const carros = ['gol', 'hb20', 'hilux', 'chevrolet'];

console.log(carros.length);

/* Exercício 2: Manipulação de Início e Fim do Array
Objetivo: Use os métodos shift, unshift, pop e push para modificar um array.
Crie um array chamado frutas com alguns nomes de frutas. Em seguida:
1. Adicione uma fruta no início do array.
2. Remova a primeira fruta do array.
3. Adicione uma fruta no final do array.
4. Remova a última fruta do array. */

const frutas = ['banana', 'maça', 'uva', 'jaca', 'carambola'];

frutas.unshift('abacaxi');
console.log(frutas);

frutas.shift();
console.log(frutas);

frutas.push('pitomba');
console.log(frutas);

frutas.pop();
console.log(frutas);

/* Exercício 3: Verificar Existência de Item no Array
Objetivo: Use o método includes para verificar se um item existe em um array.
Crie um array chamado cores com diferentes cores e verifique se a cor "azul" está presente. */

const cores = ['azul', 'vermelho', 'amarelo', 'verde'];

console.log(cores.includes('azul'));

/* Exercício 4: Ordenar e Inverter um Array
Objetivo: Use os métodos sort e reverse para manipular a ordem dos itens no array.
Crie um array chamado numeros contendo números desordenados e:
1. Ordene-o em ordem crescente.
2. Inverta a ordem do array ordenado. */

const numeros = [5, 1, 3, 4, 2];

console.log(numeros.sort());
console.log(numeros.reverse());

/* Exercício 5: Encontrar Posições de um Elemento no Array
Objetivo: Use os métodos indexOf e lastIndexOf para encontrar a primeira e última ocorrência de um item.
Crie um array chamado animais contendo alguns nomes de animais, sendo que um nome aparece mais de uma vez. 
Descubra o índice da primeira e última aparição desse nome. */

const animais = ['gato', 'cachorro', 'cabra', 'rato', 'jacaré', 'cabra', 'pinto'];

console.log(animais.indexOf('cabra'));
console.log(animais.lastIndexOf('cabra'));

/* Exercício 6: Transformar um Array em String
Objetivo: Use o método join para transformar um array em uma string.
Crie um array chamado palavras e transforme-o em uma única string separada por espaços. */

const imbuP1 = ['No', 'tempo', 'dos', 'imbu', 'nois', 'chupa', 'igual', 'um', 'doido,'];

console.log(imbuP1.join(' '));

/* Exercício 7: Concatenar Dois Arrays
Objetivo: Use o método concat para unir dois arrays.
Crie dois arrays chamados lista1 e lista2 e os combine em um único array chamado listaCompleta. */

const imbuP2 = ['nunca', 'vi', 'um', 'imbu', 'ser', 'tão', 'gostoso'];

const imbuCompleto = imbuP1.concat(imbuP2);
console.log(imbuCompleto);

/* Exercício 8: Criar um Array Usando Métodos Estáticos
Objetivo: Use os métodos estáticos do Array para criar um array de diferentes formas.
Crie três arrays diferentes usando Array.of, new Array e Array(). */

console.log(Array.of(1, 2, 3));
console.log(new Array('a', 'b', 'c'));
console.log(Array(1, 'a', 2, 'b', 3, 'c'));

/* Exercício 9: Verificar se uma Variável é um Array
Objetivo: Use o método isArray para verificar se uma variável é um array.
Crie uma variável que contenha um array e outra que contenha uma string. 
Verifique qual delas é um array. */

const array = ['this', 'is', 'array'];
const string = 'this is string';

console.log(Array.isArray(array));
console.log(Array.isArray(string));

/* Exercício 10: Transformar Algo em um Array
Objetivo: Use o método Array.from para transformar algo semelhante a um array em um array real.
Transforme a string "Hello" em um array de caracteres. */

const helloWorld = 'Hello';

console.log(Array.from(helloWorld));