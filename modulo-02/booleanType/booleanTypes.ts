// docs referencias: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
// tsc --init: cria o arquivo tsconfig.json

// => Exemplo 01.
let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);

// Exemplo 02.

let concluido: boolean = false;

if (!concluido) {
  console.log("Tarefa concluida!");
} else {
  console.log("Tarefa pendente!!");
}
