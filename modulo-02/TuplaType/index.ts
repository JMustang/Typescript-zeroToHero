// Exemplo 01 - Uso simples de tuplas em TypeScript
let pessoa: [string, string, number];
pessoa = ["junior", "alice", 2];

console.log(pessoa);

// Exemplo 02 - Acessando o valor da tupla
let pessoa1: [string, string, number];
pessoa1 = ["shagrath", "silenos", 2];
console.log(pessoa1[0]);

// Exemplo 03 - Outra forma de usar tuplas em TypeScript (com labels)
let pessoa2: [heroi1: string, heroi2: string, numDeHerois: number];
pessoa2 = ["Lina", "Luna", 2];
console.log(pessoa2);

// Exemplo 04 - Usando tuplas com spread operator
let frutas: [string, ...string[]] = [
  "\njaca",
  "\nabacate",
  "\ngenipapo",
  "\nciriguela",
  "\noutraJaca",
];
console.log(...frutas);

// Exemplo 05 - Lista heterogenia de tuplas
let listaFrutas: [number, boolean, ...string[]] = [5, true, ...frutas];
console.log(listaFrutas);

// Exemplo 06 - Uso de funcao com Tuplas
function listarPessoas(nome: string[], idade: number[]) {
  return [...nome, ...idade];
}
let resultado = listarPessoas(["junior", "alice"], [34, 9]);
console.log(resultado);

// Exemplo 07 - Labeled Tuples com spread operator numa funcao
type Nome =
  | [primeiroNome: string, sobreNome: string]
  | [primeiroNome: string, nomeMeio: string, sobreNome: string];

function criarPessoa(...nome: Nome) {
  return [...nome];
}
console.log(criarPessoa("junior", "Carvalho"));
console.log(criarPessoa("junior", "Esteves", "Carvalho"));
