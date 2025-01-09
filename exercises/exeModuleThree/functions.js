// Exercício 1: Function Declaration
// Escreva uma função chamada multiplicar que receba dois parâmetros, a e b, e retorne o produto desses números.
// Teste sua função chamando multiplicar(5, 10) e verifique se o retorno é 50.

function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(5, 10));

// Exercício 2: Function Expression
// Crie uma função chamada soma usando a forma de Function Expression. A função deve receber dois números e retornar a soma deles.
// Teste sua função chamando soma(10, 20) e verifique se o retorno é 30.

const somar = function(a, b) {
    return a + b;
}

console.log(somar(10, 20));

// Exercício 3: Arrow Function
// Converta a função subtrair para a forma de Arrow Function. A função deve receber dois números e retornar a diferença entre eles.
// Teste sua função chamando subtrair(30, 10) e verifique se o retorno é 20.

const subtrair = (a, b) =>  a - b;

console.log(subtrair(30, 10));

// Exercício 4: Factory Function
// Crie uma Factory Function chamada criarPessoa, que receba nome e idade como parâmetros e retorne um objeto com essas propriedades.
// Teste sua função chamando criarPessoa('João', 25) e verifique se o objeto retornado é { nome: 'João', idade: 25 }.

function criarPessoa(a, b) {
    return {
        nome: a,
        idade: b
    }
}

console.log(criarPessoa('João', 25));

// Exercício 5: Constructor Function
// Crie uma Constructor Function chamada Carro que tenha as propriedades marca e modelo, e um método chamado mostrarInfo que retorne uma 
// string com essas informações.
// Teste sua função criando um novo carro, por exemplo, const meuCarro = new Carro('Fusca', '1968'), e chamando o método mostrarInfo (que 
// deve retornar algo como: "Marca: Fusca, Modelo: 1968").

function Carro(a, b) {
    this.marca = a
    this.modelo = b
    this.mostrarInfo = function() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`
    }
}

const carro1 = new Carro('Fusca', 1968);
console.log(carro1.mostrarInfo())

// Exercício 6: Desafio Integrado
// Agora, crie uma função chamada calculadora que seja um Factory Function. Ela deve receber dois números e retornar um objeto com as 
// operações básicas de uma calculadora: soma, subtração, multiplicação e divisão. As operações devem ser métodos dentro desse objeto.
// Teste sua calculadora criando uma instância e fazendo algumas operações, por exemplo, calculadora(10, 5).

function calculadora(a, b) {
    return {
        soma: () => a + b,
        subtracao: () => a - b,
        multiplicacao: () => a * b,
        divisao: () => a / b
    }
}

const calc = calculadora(10, 5);
console.log(calc.soma());
console.log(calc.subtracao());
console.log(calc.multiplicacao());
console.log(calc.divisao());
