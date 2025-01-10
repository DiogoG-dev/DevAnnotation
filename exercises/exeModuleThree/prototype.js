/*Exercício 1: Criando um Objeto com Prototype
Crie uma função construtora chamada Carro que tenha as propriedades marca e modelo.
Adicione um método chamado informacoes ao prototype de Carro, que retorna uma string com a marca e o modelo do carro.
Crie uma instância do objeto Carro e chame o método informacoes para verificar o funcionamento.
Dica: O método informacoes pode ser acessado através da instância do objeto, mesmo que ele seja definido no prototype.*/

function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

Carro.prototype.informacoes = function() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
}

let meuCarro = new Carro('Chevrolet', 'Onix');

console.log(meuCarro.informacoes());

/*Exercício 2: Herança Prototípica
Crie uma função construtora chamada Animal, com uma propriedade nome e um método falar(), que imprime "Eu sou um [nome]".
Crie outra função construtora chamada Cachorro, que herda de Animal e adiciona um método latir() que imprime "Au au!".
Crie uma instância de Cachorro e faça com que ela use tanto o método falar() (herdado de Animal) quanto o método latir().
Dica: Use Cachorro.prototype = Object.create(Animal.prototype) para fazer a herança.*/

function Animal() {
}
Animal.prototype.falar = function() {
    return `Eu sou um ${this.nome}`;
}


function Cachorro(nome) {
    this.nome = nome;
    this.latir = function() {
        return 'Au au!';
    }
}
Cachorro.prototype = Object.create(Animal.prototype);


let meuCachorro = new Cachorro('Apollo');


console.log(meuCachorro.falar());
console.log(meuCachorro.latir());

/*Exercício 3: Modificando o Prototype de um Objeto Existente
Crie um objeto simples chamado carro com a propriedade modelo e o valor "Fusca".
Defina um método no prototype do carro chamado mostrarModelo que retorna a string "Modelo: [modelo]" (onde [modelo] é o valor da propriedade modelo do carro).
Crie uma nova instância e chame o método mostrarModelo.
Dica: Use Object.create() para criar o objeto e depois adicionar propriedades ou métodos no prototype.*/

let carro = {
    modelo: 'Fusca'
}

carro.mostrarModelo = function() {
    return `Modelo: ${this.modelo}`;
}

let meuCarro2 = Object.create(carro);

console.log(meuCarro2.mostrarModelo());

/*Exercício 4: Verificando a Herança Prototípica
Crie uma função construtora chamada Pessoa com uma propriedade nome.
Adicione um método apresentar ao prototype de Pessoa, que retorna uma string "Olá, meu nome é [nome]".
Verifique se uma instância de Pessoa tem o método apresentar acessando a cadeia de protótipos.
Dica: Use o método instanceof para verificar se a instância é de um determinado tipo e possui o método no prototype.*/

function Pessoa(nome) {
    this.nome = nome;
}

Pessoa.prototype.apresentar = function() {
    return `Olá meu nome é ${this.nome}`;
}

let pessoa1 = new Pessoa('João');

console.log(pessoa1 instanceof Pessoa);

console.log(pessoa1.apresentar());

/*Exercício 5: Modificando o Construtor no Prototype
Crie uma função construtora chamada Produto com as propriedades nome e preco.
No prototype de Produto, adicione um método desconto que recebe um valor de desconto e aplica ao preço do produto.
Crie uma instância do Produto e use o método desconto para aplicar um desconto.*/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto =  function(desconto) {
    this.desconto = desconto
    this.preco -= this.preco * (this.desconto / 100);
    return `O produto "${this.nome}" recebeu um desconto de ${this.desconto}%, agora seu valor é de R$${this.preco}!`
}

let primeiroProduto = new Produto('Arroz 1 kg', 10);

console.log(primeiroProduto.desconto(30));