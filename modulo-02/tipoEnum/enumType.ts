// ==> Exemplo 01: Numeric Enum (Enums Numericos)

// enum Idiomas {
//   Portugues,
//   Espanhol,
//   Ingles,
//   Frances,
// }
// console.log(Idiomas);

// ==> Exemplo 02: String Enums

enum Dia {
  Segunda = "seg",
  Terca = "ter",
  Quarta = "qua",
  Quinta = "qui",
  Sexta = "sex",
  Sabado = "sab",
  Domingo = "dom",
}
console.log(Dia);

// ==> Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: Exemplo 01:(usando const)

const enum Comida {
  Haburguer = "Hamburguer",
  Torta = "Torta",
  Pizza = "Pizza",
  Churrasco = "Churrasco",
}

function comida(c: Comida) {
  return "Comidas muito apetitosas!";
}
console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
// console.log(comida(5))

// ==> Exemplo 04: Quando usar Enum?

enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: "Parabens! Tarefa concluida com sucesso!!",
};
if (concluidaTarefa.status === Tarefa.Done) {
  console.log("Tarefa concluida!");
}
