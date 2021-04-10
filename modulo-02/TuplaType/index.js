"use strict";
// Exemplo 01 - Uso simples de tuplas em TypeScript
let pessoa;
pessoa = ["junior", "alice", 2];
console.log(pessoa);
// Exemplo 02 - Acessando o valor da tupla
let pessoa1;
pessoa1 = ["shagrath", "silenos", 2];
console.log(pessoa1[0]);
// Exemplo 03 - Outra forma de usar tuplas em TypeScript (com labels)
let pessoa2;
pessoa2 = ["Lina", "Luna", 2];
console.log(pessoa2);
// Exemplo 04 - Usando tuplas com spread operator
let frutas = [
    "\njaca",
    "\nabacate",
    "\ngenipapo",
    "\nciriguela",
    "\noutraJaca",
];
console.log(...frutas);
// Exemplo 05 - Lista heterogenia de tuplas
let listaFrutas = [5, true, ...frutas];
console.log(listaFrutas);
// Exemplo 06 - Uso de funcao com Tuplas
function listarPessoas(nome, idade) {
    return [...nome, ...idade];
}
let resultado = listarPessoas(["junior", "alice"], [34, 9]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa("junior", "Carvalho"));
console.log(criarPessoa("junior", "Esteves", "Carvalho"));
