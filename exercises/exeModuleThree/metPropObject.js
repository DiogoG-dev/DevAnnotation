/* Exercício 1: Transferir Propriedades entre Objetos com Object.assign
Objetivo: Utilize o método Object.assign para transferir as propriedades de um objeto para outro.
Crie dois objetos, um chamado pessoa1 e outro chamado pessoa2. O objeto pessoa2 deve conter uma propriedade "idade".
Utilize o Object.assign para transferir a propriedade idade de pessoa2 para pessoa1 e exiba o resultado. */

const pessoa1 = {}

const pessoa2 = {
    idade: 22
}

console.log(pessoa1);
Object.assign(pessoa1, pessoa2);
console.log(pessoa1);


/* Exercício 2: Transferir Propriedades com Spread Operator
Objetivo: Utilize o operador spread (...) para transferir as propriedades de objetos.
Crie dois objetos, um chamado aluno1 e outro chamado aluno2. O objeto aluno2 deve conter a propriedade "nota".
Utilize o spread operator para criar um novo objeto, alunoFinal, que combine as propriedades de ambos, além de adicionar a propriedade "status". */

const aluno1 = {
    nome: 'David'
}

const aluno2 = {
    nota: 10
}

const alunoFinal = {
    ...aluno1,
    ...aluno2,
    status: 'Aprovado'
}

console.log(alunoFinal);

/* Exercício 3: Listar as Chaves de um Objeto
Objetivo: Utilize o método Object.keys para listar todas as chaves de um objeto.
Crie um objeto chamado livro com as propriedades título, autor e ano. Utilize Object.keys para exibir todas as chaves do objeto livro. */

const livro = {
    titulo: "Mindset",
    autor: 'Carol S. Dweck',
    ano: 2017
}

console.log(Object.keys(livro));

/* Exercício 4: Listar os Valores de um Objeto
Objetivo: Utilize o método Object.values para listar todos os valores de um objeto.
Crie um objeto chamado carro com as propriedades modelo, ano e cor. Utilize Object.values para exibir todos os valores do objeto carro. */

const carro = {
    modelo: 'Fiat Mobi',
    ano: 2022,
    cor: 'Vermelho'
}

console.log(Object.values(carro));

/* Exercício 5: Combinação de Objetos com Object.assign e Spread
Objetivo: Combine dois objetos de duas formas diferentes: utilizando Object.assign e o operador spread.
Crie dois objetos, um chamado pessoaA e outro chamado pessoaB, com propriedades como nome e idade.
1. Combine as propriedades de pessoaA e pessoaB usando Object.assign.
2. Combine as mesmas propriedades utilizando o spread operator e adicione uma nova propriedade "cidade". */

const pessoaA = {
    nome: 'Diogo',
    idade: 20
}

const pessoaB = {
    nome: 'Raissa',
    idade: 18
}

const pessoaC = Object.assign(pessoaA, pessoaB);
console.log(pessoaC);

const pessoaD = {
    ...pessoaC,
    cidade: 'SP'
}
console.log(pessoaD);