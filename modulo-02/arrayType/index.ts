// Exemplo 01 - Uso de Colchetes:

let frutas01: string[] = ["abacaxi", "laranja", "maca", "melancia", "manga"];
console.log(frutas01[2]);

// Exemplo 02 - Array Object (Object Array):
let frutas02: Array<string> = [
  "abacaxi",
  "laranja",
  "maca",
  "melancia",
  "manga",
];
console.log(frutas02[3]);

// Exemplo 03 - Adicinando mais strings com metodo 'push:
let idiomas: Array<string> = ["Portugues", "Ingles", "Frances", "Russo"];
console.log(idiomas);
idiomas.push("Mandarin");
console.log(idiomas);

// Exemplo 04 - Identificar tamanho do Array - metodo 'length':
let idiomas00: Array<string> = ["Portugues", "Ingles", "Frances", "Italiano"];
console.log(idiomas00.length);

// Exemplo 05 - Exeplo de Array com Spread Operator:
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);

// Exemplo 06 - Exeplo de Array com laco de iteracao:
let linguagensArray: string[] = new Array("javascript", "java", "php", "rust");
function funcaoLinguages(linguages: string[]) {
  for (let i = 0; i < linguages.length; i++) {
    console.log(linguagensArray[i]);
  }
}
funcaoLinguages(linguagensArray);
