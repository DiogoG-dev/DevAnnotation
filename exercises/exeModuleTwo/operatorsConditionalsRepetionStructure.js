// 1. Crie um programa em JavaScript que:
//  • Solicite ao usuário dois números inteiros via prompt().
//  • Calcule a soma, subtração, multiplicação e divisão entre esses dois números.
//  • Exiba o resultado de cada operação na tela usando alert() ou console.log().
console.log('Exercício 1:')

let num1 = Number(window.prompt('Digite um número inteiro: '));
while (!Number.isInteger(num1)) {
    num1 = Number(window.prompt('Digite um número INTEIRO válido: '));
}

let num2 = Number(window.prompt('Digite outro número inteiro: '));
while (!Number.isInteger(num2)) {
    num2 = Number(window.prompt('Digite um número INTEIRO válido: '));
}

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
let divisao = num1 / num2;

if (divisao == 0) {
    divisao = 'Indefinido (divisão por zero)';
}

console.log(`Com os números que você inseriu sabemos que:
• ${num1} + ${num2} = ${soma}
• ${num1} - ${num2} = ${subtracao}
• ${num1} * ${num2} = ${multiplicacao}
• ${num1} / ${num2} = ${divisao}`);



// 2. Crie um programa que:
//  • Solicite ao usuário dois números inteiros via prompt().
//  • Utilize os operadores de atribuição (+=, -=, *=, /=) para calcular a soma, subtração, multiplicação e divisão, 
//  modificando os valores de uma variável ao longo do processo.
//  • Após cada operação, verifique se o valor da primeira variável é maior, menor ou igual ao da segunda e imprima a comparação no console.
console.log('Exercício 2:')

let num3 = Number(window.prompt('Digite um número inteiro: '));
while (!Number.isInteger(num3)) {
    num3 = Number(window.prompt('Digite um número INTEIRO válido: '));
}

let num4 = Number(window.prompt('Digite um número inteiro: '));
while (!Number.isInteger(num4)) {
    num4 = Number(window.prompt('Digite um número INTEIRO válido: '));
}

console.log(`Números recebidos ${num3} e ${num4}`);

// Soma
console.log('Somando 7 ao primeiro número e 3 ao segundo número...');
num3 += 7;
num4 += 3;
console.log(`O 1° número virou ${num3} e o 2° número virou ${num4}`);

if (num3 > num4) {
    console.log(`${num3} é maior que ${num4}`);
} else if (num3 < num4){
    console.log(`${num3} é menor que ${num4}`);
} else {
    console.log(`${num3} é igual a ${num4}`);
}

// Subtração
console.log('Subtraindo 9 do primeiro número e 1 do segundo número...');
num3 -= 9;
num4 -= 1;
console.log(`O 1° número virou ${num3} e o 2° número virou ${num4}`);

if (num3 > num4) {
    console.log(`${num3} é maior que ${num4}`);
} else if (num3 < num4){
    console.log(`${num3} é menor que ${num4}`);
} else {
    console.log(`${num3} é igual a ${num4}`);
}

// Multiplicação
console.log('Multiplicando o primeiro número por 5 e o segundo por 8...');
num3 *= 5;
num4 *= 8;
console.log(`O 1° número virou ${num3} e o 2° número virou ${num4}`);


if (num3 > num4) {
    console.log(`${num3} é maior que ${num4}`);
} else if (num3 < num4){
    console.log(`${num3} é menor que ${num4}`);
} else {
    console.log(`${num3} é igual a ${num4}`);
}

// Divisão
console.log('Dividindo o primeiro número por 2 e o segundo por 4...');
num3 /= 2;
num4 /= 4;
console.log(`O 1° número virou ${num3} e o 2° número virou ${num4}`);

if (num3 > num4) {
    console.log(`${num3} é maior que ${num4}`);
} else if (num3 < num4){
    console.log(`${num3} é menor que ${num4}`);
} else {
    console.log(`${num3} é igual a ${num4}`);
}



// 3. Crie um programa que:
//  • Solicite ao usuário um número inteiro via prompt().
//  • Verifique, usando um operador ternário, se o número é par ou ímpar.
//  • Exiba o resultado no console.
console.log('Exercício 3:')

let num = Number(window.prompt('Digite um número inteiro: '));
while (!Number.isInteger(num)) {
    num = Number(window.prompt('Digite um número INTEIRO válido: '));
}

let resultado = (num % 2) == 0 ? `PAR` : `IMPAR`;

console.log(`O número ${num} é ${resultado}.`);



// 4. Crie uma função chamada calcularImposto que:
//  • Receba um valor como parâmetro e calcule o imposto , tambem recebido.
//  • A função deve retornar o valor com o imposto adicionado.
//  • No programa principal, solicite ao usuário um valor via prompt(), chame a função e imprima o valor final no console.
console.log('Exercício 4:')

resultado = 0;

function calcularImposto (num1, num2) {
    resultado = num1 + (num1 * (num2 / 100));
}

let valor = Number(window.prompt('Digite um valor: '));
let imposto =  Number(window.prompt('Digite o valor do imposto: '));

calcularImposto(valor, imposto);

console.log(
`Valor Inicial: ${valor}
Valor do Imposto: ${imposto}%
Valor Final: ${resultado}`
);



// 5. Crie um objeto carro que tenha as seguintes propriedades:
//  • modelo: o modelo do carro (string).
//  • ano: o ano de fabricação (número).
//  • cor: a cor do carro (string).
//  • exibirInfo: um método que exibe as informações do carro no console.
//  • Após criar o objeto, execute o método exibirInfo() para exibir as informações do carro.
console.log('Exercício 5:')

let carro = {
    modelo: 'Gol',
    ano: 2016,
    cor: 'Vermelho',
    exibirInfo: function() {
        console.log(
            `Modelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}`
        );
    }
};

carro.exibirInfo();



// 6. Crie um programa que:
//  • Solicite ao usuário 5 números inteiros (use prompt() para capturar os valores).
//  • Armazene esses números em um array.
//  • Imprima o array na tela usando console.log().
//  • Em seguida, imprima a soma de todos os elementos do array.
console.log('Exercício 6:')

let array = [];
let sum = 0;

for (let i = 1; i < 6; i++) {
    let num = Number(window.prompt(`Digite o ${i}° número: `));
    while (isNaN(num)) {
        num = window.prompt('Por favor, digite um número válido: ');
    }
    array.push(num);
}

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(`Array: [${array}]`);
console.log(`A soma dos elementos é: ${sum}`);