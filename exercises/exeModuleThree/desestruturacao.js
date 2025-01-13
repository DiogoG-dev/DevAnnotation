/*1. Desestruturação de Arrays
Exercício 1:
Dado o seguinte array, use a desestruturação para extrair as variáveis firstName e lastName.*/

const userOne = ['João', 'Silva'];

const [firstName, lastName] = userOne;

console.log(firstName);
console.log(lastName);


/*Exercício 2:
Dado o seguinte array, use a desestruturação para obter o primeiro, terceiro e quinto elementos, ignorando os outros.*/

const numbers = [10, 20, 30, 40, 50];

const [primeiro, , terceiro, , quinto] = numbers;

console.log(primeiro);
console.log(terceiro);
console.log(quinto);


/*2. Desestruturação de Objetos
Exercício 3:
Dado o seguinte objeto, use a desestruturação para extrair as variáveis name, age e city.*/

const person = {
	name: 'Maria',
	age: 28,
	city: 'São Paulo'
};

const {name, age, city} = person;

console.log(name);
console.log(age);
console.log(city);

/*Exercício 4:
Dado o seguinte objeto, use a desestruturação e atribua novos nomes às variáveis.*/

const product = {
	title: 'Laptop',
	price: 2000, 
	inStock: true
};

const {title: productName, price: productPrice, inStock: availability} = product;

console.log(productName);
console.log(productPrice);
console.log(availability);

/*3. Desestruturação com Valores Padrão
Exercício 5:
Dado o seguinte objeto, extraia a variável address, atribuindo um valor padrão "Desconhecido" caso a propriedade não exista.*/

const userTwo = {
	name: 'Carlos',
	age: 35
};

const {address = 'Desconhecido'} = userTwo;

console.log(address);

/*4. Desestruturação de Objetos Aninhados
Exercício 6:
Dado o seguinte objeto, use a desestruturação para obter a variável city dentro da propriedade address.*/

const userThree = {
  name: 'Ana',
  age: 25,
  address: {
    street: 'Rua A',
    cityTwo: 'Rio de Janeiro',
    country: 'Brasil'
  }
};

const {cityTwo} = userThree.address;

console.log(cityTwo);

/*5. Desestruturação em Funções
Exercício 7:
Crie uma função greet que aceite um objeto com as propriedades name e age e use desestruturação para extrair essas propriedades dentro da 
função.*/

function greet(user) {
  const {name, age} = user;
  return {name, age};
}

console.log(greet({name: 'José', age: 103}));


/*6. Desestruturação com Rest
Exercício 8:
Dado o seguinte array, use a desestruturação para obter o primeiro e o segundo elemento e o resto do array.*/

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

const [first, last, ...rest] = colors;

console.log(first);
console.log(last);
console.log(rest);