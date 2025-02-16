/* Exercício 1: Convertendo Objeto para JSON
Objetivo: Transformar um objeto JavaScript em uma string JSON.
Crie um objeto chamado usuario com as propriedades nome e idade. Em seguida, use JSON.stringify para convertê-lo em JSON e exiba o resultado no console. */

const usuario = {nome: 'Diogo', idade: 20}

console.log(usuario);
console.log(JSON.stringify(usuario));

/* Exercício 2: Convertendo JSON para Objeto
Objetivo: Transformar uma string JSON em um objeto JavaScript.
Crie uma string JSON contendo informações de um produto (nome, preço, categoria) e use JSON.parse para transformá-la em um objeto. Exiba no console. */

const json = '{"nome":"Café","preco":"84.9","categoria":"FazueleAmor"}'

console.log(json);
console.log(JSON.parse(json));

/* Exercício 3: Manipulando JSON
Objetivo: Modificar um JSON.
Pegue o JSON do exercício anterior, converta-o para um objeto JavaScript, altere o preço e depois converta de volta para JSON. Exiba o resultado no console. */

const jsonAnterior = JSON.parse(json);

const newJson = {
    ...jsonAnterior,
    preco: 98.9
}

console.log(newJson);
console.log(JSON.stringify(newJson));

/* Exercício 4: JSON em Local Storage
Objetivo: Armazenar e recuperar dados em JSON no Local Storage.
Crie um objeto usuário, converta para JSON e salve no localStorage. Em seguida, recupere-o e exiba no console. */

let newUsuario = {
    nome: 'Diogo',
    idade: 20
}

localStorage.setItem('usuario', JSON.stringify(newUsuario))

let jsonUsuario = JSON.parse(localStorage.getItem('usuario'))

console.log(jsonUsuario)

/* Exercício 5: Consumindo API com JSON
Objetivo: Trabalhar com JSON retornado de uma API.
Faça uma requisição para a API https://jsonplaceholder.typicode.com/users e transforme a resposta em um objeto JavaScript usando 
// JSON.parse(). Exiba no console apenas os nomes dos usuários. */

fetch('https://jsonplaceholder.typicode.com/users', {mode: 'cors', method: 'GET'})
    .then(response => response.json())
    .then(data => data.forEach(user => console.log(user.name)))