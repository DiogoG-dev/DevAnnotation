/* Exercício 1: Fazendo uma requisição GET
Objetivo: Realizar uma requisição para obter dados de uma API pública.
Faça um fetch para a API https://jsonplaceholder.typicode.com/posts e exiba no console os títulos dos posts recebidos. */

fetch('https://jsonplaceholder.typicode.com/posts', {mode: 'cors'})
    .then(response => response.json())
    .then(data => console.log(data))

/* Exercício 2: Tratando Erros com Catch
Objetivo: Simular um erro na requisição e tratá-lo adequadamente.
Altere a URL da API para um endereço incorreto e use .catch para exibir uma mensagem de erro no console. */

fetch('https://jsonplaceholder.typicode.com/post', {mode: 'cors'})
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log('Deu erro na requisição: ', error))

/* Exercício 3: Requisição com POST
Objetivo: Enviar dados para um servidor.
Utilize fetch para fazer um POST para a API https://jsonplaceholder.typicode.com/posts, enviando um novo post com título e corpo. Exiba a resposta no console. */

fetch('https://jsonplaceholder.typicode.com/posts',
{   
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
        "userId": 11,
        "title": "Fazuele laboriosam dolor voluptates",
        "body": "Fazuele doloremque ex facilis sit sint culpa soluta assumenda eligendi non ut eius sequi ducimus vel quasi veritatis est dolores"
    })
})  
    .then(response => response.json())
    .then(data => console.log(data))

/* Exercício 4: Usando Query Params
Objetivo: Filtrar os resultados de uma API.
Faça um fetch para a API https://jsonplaceholder.typicode.com/posts e obtenha apenas os posts do usuário com id = 1. */

fetch('https://jsonplaceholder.typicode.com/posts?userId=10', {mode: 'cors', method: 'GET'})
    .then(response => response.json())
    .then(data => console.log(data))

/* Exercício 5: Trabalhando com Headers
Objetivo: Enviar uma requisição GET com um cabeçalho personalizado.
Utilize fetch para fazer uma requisição para a API https://jsonplaceholder.typicode.com/posts, incluindo um cabeçalho customizado. */

fetch('https://jsonplaceholder.typicode.com/posts?id=5',
{
    mode: 'cors',
    method: 'GET',
    headers: {
        'Custom-Header': 'SeiLaBoy',
        'Accept': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))

/* Exercício 6: Verificando Status da Resposta
Objetivo: Aprender a lidar com códigos de status HTTP.
Faça uma requisição GET para uma URL inexistente e exiba no console o código de status da resposta. */

fetch('https://jsonplaceholder.typicode.com/postsss', {mode: 'cors',method: 'GET',})
    .then(response => {
        if(!response.ok) {
            throw new Error(`Houve erro na requisição. Status: ${response.status}`)
        }
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))