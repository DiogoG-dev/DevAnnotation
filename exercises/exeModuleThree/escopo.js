/* Exercício 1: Escopo Global e Local
Objetivo: Entender como variáveis globais e locais funcionam dentro de funções.
Crie uma variável global chamada mensagem e uma função exibirMensagem que declare uma variável local com o mesmo nome. Exiba os valores dentro e fora da função para verificar a diferença. */

const mensagem = '123';

function exibirMensagem() {
    const mensagem = '321'
    console.log(mensagem)
}

exibirMensagem()
console.log(mensagem)

/* Exercício 2: Escopo de Bloco e var vs let/const
Objetivo: Demonstrar como "var" ignora escopo de bloco, enquanto "let" e "const" respeitam.
Crie um bloco "if" onde uma variável seja declarada com "var" e outra com "let". Tente acessar ambas fora do bloco e observe o comportamento. */

if(1){
    var msg1 = 'abc'
    let msg2 = 'cba'
}

console.log(msg1)
//console.log(msg2)

/* Exercício 3: Funções Aninhadas e Escopo Léxico
Objetivo: Demonstrar que funções aninhadas podem acessar variáveis externas, mas não o contrário.
Crie uma função externa que declare uma variável e uma função interna que a acesse. Tente acessar a variável da função interna fora da função externa e observe o erro. */

/*function funcaoExterna() {
    const msg1 = 'qwe';

    function funcaoInterna() {
        const msg2 = 'ewq';
        console.log(msg1);
    }

    funcaoInterna()
    console.log(msg2);
}

funcaoExterna()*/

/* Exercício 4: Escopo e Closures
Objetivo: Entender como closures permitem que funções internas retenham acesso ao escopo externo.
Crie uma função criarContador que retorne outra função. A função retornada deve incrementar um contador privado e exibir seu valor a cada chamada. */

function criarContador() {
    let i = 0;

    return function() {
        i++
        console.log(i)
    }
}

const contador = criarContador()
contador()
contador()
contador()

/* Exercício 5: Evitando Vazamento de Escopo com let/const
Objetivo: Demonstrar a importância de usar "let" ou "const" para evitar comportamento inesperado.
Crie um loop for com "var" e outro com "let", ambos imprimindo um índice após a execução do loop. Veja a diferença no acesso ao índice. */

for(var i = 0; i < 3; i++) {
    console.log(i)
}

for(let j = 0; j < 3; j++) {
    console.log(j)
}