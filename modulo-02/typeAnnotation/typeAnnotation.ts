// => Variaveis [Type Annotations]
let nome: string = "junior";
console.log(nome);

// => Arrays [Type Annotations]
let animais: string[] = ["Elefante", "Cachorro", "Gato", "Dromedario"];
console.log(animais);

// => Objeto [Type Annotations]

let carro: {
  nome: string;
  ano: number;
  preco: number;
};
carro = { nome: "Tesla", ano: 2019, preco: 90.0 };
console.log(carro);

// => Function [Type Annotations]

function soma(num1: number, num2: number) {
  return num1 + num2;
}
console.log(soma(5, 5));
