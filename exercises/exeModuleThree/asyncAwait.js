// Crie uma função chamada "esperar" que retorna uma promessa resolvida após 2 segundos.
// Utilize "setTimeout" para simular um atraso.

async function esperar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Se passaram 2 segundos!')
            resolve();
        }, 2000);
    });
}

esperar().then(() => console.log('A espera acabou!'))

// Crie uma função chamada "buscarUsuarios" que faz uma requisição para a API:
// https://jsonplaceholder.typicode.com/users
// Converta a resposta para JSON e exiba a lista de nomes dos usuários no console.

async function buscarUsuarios() {
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        let jsonData = await data.json()
        console.log(jsonData.map(usuario => usuario.name))
}

buscarUsuarios()

// Modifique a função do exercício anterior para incluir um bloco try/catch.
// Teste forçando um erro (por exemplo, altere a URL da API para uma inválida).
// Exiba a mensagem de erro no console.

async function buscarUsuariosDnv() {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/userss')
        let jsonData = await data.json()

        console.log(jsonData.map(usuario => usuario.name))
    } catch (erro) {
        console.log('Deu erro aqui boy: ', erro.message)
    }
}

buscarUsuariosDnv()

// Crie uma função chamada "buscarPostsUsuario".
// Pegue um usuário pelo ID 1 da API https://jsonplaceholder.typicode.com/users/1.
// Depois, com os dados do usuário, busque os posts dele na API https://jsonplaceholder.typicode.com/posts?userId=1.
// Exiba no console o nome do usuário e a lista de posts dele.


async function buscarPostsUsuario() {
    try {
        let user = await fetch('https://jsonplaceholder.typicode.com/users/1')
        let userJson = await user.json()

        let postsUser = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        let postsUserJson = await postsUser.json()

        console.log('Usuário: ', userJson.name)
        console.log('Posts:')
        postsUserJson.forEach(post => console.log('-', post.title))
    } catch (erro) {
        console.error('Erro a buscar dados: ', erro.message)
    }
}

buscarPostsUsuario()

// Crie uma função chamada "simularRequisicao" que retorna uma Promise.
// A promessa deve ser resolvida após 3 segundos e retornar o objeto { mensagem: "Requisição concluída!" }.
// Utilize await para chamar essa função e exibir o resultado no console.

async function simularRequisicao() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve({ mensagem: "Requisição concluída!" })
            }, 3000)
        } catch (erro) {
            reject('Deu erro boy:', erro)
        }
    })
}

async function executar() {
    try {
        let resultado =  await simularRequisicao()
        console.log(resultado)
    } catch (erro) {
        console.log(erro);
    }
}

executar()