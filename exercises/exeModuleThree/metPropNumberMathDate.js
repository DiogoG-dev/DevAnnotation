/* Exercício 1: Conversão de String para Número
Objetivo: Utilize os métodos Number.parseFloat e Number.parseInt para converter strings em números.
Crie uma string chamada preco contendo o valor "99.99". Converta essa string para um número de ponto flutuante e um número inteiro. */

const preco = '99.99'

console.log(Number.parseFloat(preco))
console.log(Number.parseInt(preco))

/* Exercício 2: Transformação de Número em String
Objetivo: Utilize o método toString para converter um número em uma string.
Crie um número chamado valor e converta-o em uma string. Exiba o resultado no console. */

const valor = 10

console.log(valor.toString())

/* Exercício 3: Arredondamento de Números
Objetivo: Utilize os métodos toFixed, Math.ceil, Math.floor e Math.round para arredondar números.
Crie um número decimal chamado numeroDecimal e:
1. Utilize toFixed para limitar o número a 2 casas decimais.
2. Utilize Math.ceil para arredondar para cima.
3. Utilize Math.floor para arredondar para baixo.
4. Utilize Math.round para arredondar para o valor mais próximo. */

const numeroDecimal = 31.17

console.log(numeroDecimal.toFixed())
console.log(Math.ceil(numeroDecimal))
console.log(Math.floor(numeroDecimal))
console.log(Math.round(numeroDecimal))

/* Exercício 4: Gerar Números Aleatórios
Objetivo: Utilize Math.random para gerar um número aleatório dentro de um intervalo específico.
Crie uma função chamada numeroAleatorio que receba dois parâmetros, minimo e maximo, e retorne um número aleatório entre eles. */

function numeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(numeroAleatorio(10, 100))

/* Exercício 5: Encontrar Maior e Menor Número
Objetivo: Utilize Math.max e Math.min para encontrar o maior e menor número de uma lista.
Crie um array chamado numeros contendo vários valores numéricos. Utilize Math.max para encontrar o maior número e Math.min para encontrar o menor número. */

console.log(Math.max(15.18945107989459, 15.12490332224559, 15.158610155641, 15.16808099702048, 15.19509831725233));
console.log(Math.min(15.18945107989459, 15.12490332224559, 15.158610155641, 15.16808099702048, 15.19509831725233));

/* Exercício 6: Trabalhando com Datas
Objetivo: Utilize os métodos do objeto Date para obter informações da data atual.
Crie uma variável chamada hoje que armazene a data atual e exiba:
1. O dia do mês.
2. O mês (lembre-se de que os meses começam em 0).
3. O ano.
4. A hora.
5. O minuto.
6. O dia da semana. */

const hoje = new Date;

console.log(hoje.getDate());
console.log(hoje.getMonth() + 1);
console.log(hoje.getFullYear());
console.log(hoje.getHours());
console.log(hoje.getMinutes());
console.log(hoje.getDay());

/* Exercício 7: Criando uma Data Específica
Objetivo: Utilize o objeto Date para criar uma data específica.
Crie um objeto chamado dataNascimento que represente o dia do seu nascimento (ano, mês e dia). Em seguida, exiba o ano, mês e dia dessa data. */

const dataNascimento = new Date('February 9, 2004 18:16:36');

console.log(dataNascimento.getDate())
console.log(dataNascimento.getMonth() + 1)
console.log(dataNascimento.getFullYear())