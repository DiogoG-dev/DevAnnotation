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

// Itera sobre todos os itens do array, podendo este criar um novo array, map
const returnMap = pessoas.map((value, index) => {
    return `${value} ${index}`
})

// Assim como Map, Reduce pode iterar sobre os itens e criar um novo array, porém neste contém um acumulador que armazena o item anterior.
const returnReduce = preco.reduce((acc, value) => {
    return acc + value
}, 0) // 0 é o acumulado inicial


// Para retornar o primeiro valor True de um array utiliza-se o find
const returnFind = pessoas.find((value) => value)

// Já para retorna a posição do primeiro valor True utiliza-se findIndex
const returnoFindIndex = pessoas.findIndex((value) => value)

// O some retorna um boolean de acordo com os valores no array, se existir um valor True retorna true, se todos forem False retorna false
const returnoSome = pessoas.some((value) => value)

// O every, assim como some, retorna um boolean de acordo com os valores no array, porém todos precisão ser True para retorna true e um False para false
const returnEvery = pessoas.every((value) => value)

// Para retornar o valou especificado utiliza-se filter
const returnFilter = pessoas.filter((value) => value === 'Raissa')