// Síncrono: processamento ocorre de forma sequencial
// Assíncrono: podem ocorrer vários processos ao mesmo tempo

// Promise: objeto utilizado para operações assíncronas
const minhaPromise = new Promise((resolve, reject) => {
    // Gera um resultado boleano
    let sucesso = Math.random() > 0.5

    // Executado quando resolvido
    if (sucesso) {
        resolve('Deu certo! ✅')
    }
    // Executado quando não resolvido
    else {
        reject('Deu errado! ❌')
    }
})

minhaPromise
    // Recebe o valor de "resolve"
    .then(result => {
    console.log(result)
    })

    // Recebe o valor de "reject"
    .catch(error => {
        console.log(error)
    })
