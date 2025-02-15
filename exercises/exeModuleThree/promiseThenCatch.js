/* Exercício 1: Criando uma Promise Simples
Objetivo: Criar uma Promise que simule um carregamento de dados.
Crie uma função chamada buscarDados que retorne uma Promise. A Promise deve ser resolvida após 2 segundos, retornando um objeto de dados 
fictício. Use then para exibir os dados quando a Promise for resolvida. */

function buscarDadosId(id) {
    return new Promise((resolve, reject) => {
        let dados = {
            id: 17,
            nome: 'Diogo',
            idade: 20,
            cidade: 'Brejo Santo'
        }

        setTimeout(function() {
            if(id == dados.id) {
                resolve(dados)
            } else {
                reject('Não existem dados!')
            }
        }, 2000)
    })
        
}

buscarDadosId(17)
    .then(result => {
        console.log(result)
    })
    .catch(errror => {
        console.log(errror)
    })

/* Exercício 2: Lidando com Erros em Promises
Objetivo: Demonstrar o uso do catch para capturar erros.
Altere a função buscarDados para que ela tenha uma chance de falha (usando Math.random). Se falhar, rejeite a Promise com uma mensagem de 
erro. Use catch para capturar e exibir o erro. */

function buscarDados() {
    return new Promise((resolve, reject) => {
        let dados = {
            id: 17,
            nome: 'Diogo',
            idade: 20,
            cidade: 'Brejo Santo'
        }

        let numRandom = Math.random();

        if(numRandom > 0.5) {
            resolve(dados)
        } else {
            reject('Não existem dados!')
        }
    })
}

buscarDados()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

/* Exercício 3: Encadeando Promises com then
Objetivo: Trabalhar com encadeamento de then para manipulação de dados.
Crie uma função chamada transformarDados que recebe um objeto e adiciona uma nova propriedade. Utilize then para transformar os dados após 
buscarDados ser resolvida. */

function transformarDados() {
    return new Promise((resolve, reject) => {
        buscarDados()
        .then(result => {
            resolve({ ...result, pais: 'Brasil'})
        })
        .catch(error => {
            reject(error)
        })
    })
}

transformarDados()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

/* Exercício 4: Usando finally em Promises
Objetivo: Garantir que um código seja executado independentemente do sucesso ou falha.
Modifique a função buscarDados para incluir um finally, que exiba a mensagem "Processo finalizado". */

buscarDados()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() =>{
        console.log('Processo finalizado! ✅')
    })

/* Exercício 5: Simulando Múltiplas Promises com Promise.all
Objetivo: Executar várias Promises ao mesmo tempo.
Crie três funções que retornam Promises resolvidas em tempos diferentes (ex: 1s, 2s, 3s). Use Promise.all para executar todas e exibir os 
resultados quando todas forem concluídas. */

function primeiraFuncao(num) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if(num) {
                resolve(num)
            } else {
                reject("Deu erro na Primeira!")
            }
        }, 1000)
    })
}

function segundaFuncao(num) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if(num) {
                resolve(num)
            } else {
                reject("Deu erro na Segunda!")
            }
        }, 2000)
    })
}

function terceiraFuncao(num) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if(num) {
                resolve(num)
            } else {
                reject("Deu erro na Terceira!")
            }
        }, 3000)
    })
}

Promise.all([primeiraFuncao("Primeira!"), segundaFuncao("Segunda!"), terceiraFuncao("Terceira!")]).then(console.log).catch(console.log)