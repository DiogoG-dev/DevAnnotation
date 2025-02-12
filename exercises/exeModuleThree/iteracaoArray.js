const pessoas = ['', 'João', 'Maria', 'José', 'Raissa', 'Gaiata', 'Raissa'];
const frutas = [{nome: 'banana', quantidade: 3}, {nome: 'Imbu', quantidade: 2000}];
const preco = [3.5, 5, 12, 7.2, 1];

// Itera sobre todos os itens do array
pessoas.forEach((value, index, array) => {
    console.log(value, index, array);
});
frutas.forEach((value, index, array) => {
    console.log(value.nome, index, array);
});

// Itera sobre todos os itens do array, podendo este criar um novo array
const returnMap = pessoas.map((value, index) => {
    return `${value} ${index}`
})

// Acumula o valor anterior para interagir com o atual
const returnReduce = preco.reduce((acc, value) => {
    return acc + value
}, 0) // 0 é o acumulado inicial

// Retorna o primeiro valor verdadeiro do array
const returnFind = pessoas.find((value) => value)

// Retorna a posição do primeiro valor verdadeiro do array
const returnoFindIndex = pessoas.findIndex((value) => value)

// Retorna true quando existir um valor true e false quando todos forem false
const returnoSome = pessoas.some((value) => value)

// Retorna true quando todos os valores forem true e false quando ao menos um for false
const returnEvery = pessoas.every((value) => value)

// Retorna o valor especificado
const returnFilter = pessoas.filter((value) => value === 'Raissa')