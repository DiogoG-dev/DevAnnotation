/* Exercício 1: Propriedade length de Funções
Objetivo: Utilize a propriedade length para descobrir quantos parâmetros uma função recebe.
Crie uma função chamada pessoa que recebe três parâmetros e exiba no console a quantidade de argumentos esperados. */

function pessoa(nome, idade, cidade) {
    console.log(nome, idade, cidade);
}

console.log(pessoa.length);

/* Exercício 2: Propriedade name de Funções
Objetivo: Utilize a propriedade name para descobrir o nome de uma função.
Crie uma função chamada saudacao que exiba uma mensagem no console e, em seguida, utilize a propriedade name para exibir o nome da função. */

function saudacao() {
    console.log('Oi');
}

console.log(saudacao.name)

/* Exercício 3: Utilizando o Método call
Objetivo: Utilize o método call para definir o contexto de this dentro de uma função.
Crie uma função chamada apresentar que exibe o nome e a profissão do contexto this.  
Depois, execute essa função usando call e passando um objeto com as propriedades nome e profissão. */

function apresentar(nome){
    console.log(`Seu nome é ${nome} e sua profissão é ${this.profissao}.`);
}

apresentar.call({profissao: 'Programador'}, 'Diogo');

/* Exercício 4: Utilizando o Método apply
Objetivo: Utilize o método apply para definir o contexto de this dentro de uma função e passar argumentos como um array.
Crie uma função chamada descrever que recebe nome e idade como parâmetros e exibe esses valores junto com a cidade do contexto this.
Em seguida, execute a função usando apply e passe um objeto com a propriedade cidade e os argumentos necessários. */

function descrever(nome, idade) {
    console.log(`Seu nome é ${nome}, você tem ${idade} anos de idade e mora em ${this.cidade}.`);
}

descrever.apply({cidade: 'Brejo Santo'}, ['Diogo', 20]);

/* Exercício 5: Utilizando o Método bind
Objetivo: Utilize o método bind para criar uma nova função com um contexto pré-definido.
Crie uma função chamada apresentarPessoa que exibe o nome e a idade do contexto this.  
Utilize bind para criar uma nova função chamada apresentarJoao, que sempre terá um objeto com nome "João" e idade "30" como contexto. */

function apresentarPessoa() {
    console.log(`Seu nome é ${this.nome} e sua idade é ${this.idade}.`);
}

const apresentarJoao = apresentarPessoa.bind({nome: 'João', idade: 18})
apresentarJoao();

/* Exercício 6: Diferença entre call, apply e bind
Objetivo: Compare as diferenças entre call, apply e bind.
Crie uma função chamada infoUsuario que exibe o nome, idade e país do contexto this.
Depois, chame a função utilizando call, apply e bind, mostrando como cada método afeta a execução. */


function infoUsuario(nome) {
    console.log(nome, this.idade, this.pais);
}

infoUsuario.call({idade: 20, pais: 'Brasil'}, 'Diogo');
infoUsuario.apply({idade: 18, pais: 'Israel'}, ['João']);

const infoAna = infoUsuario.bind({idade: 35, pais: 'China'}, 'Ana');
infoAna();