// Variáveis [Type Annotations]
let nome: string = "Matheus Vinicyus Strada";
console.log(nome);

// Array [Type Annotations]
let animais: string[] = ["Gato", "Cachorro", "Cavalo"];
console.log(animais);

// Objetos [Type Annotations]
let carro: {
  modelo: string;
  ano: number;
  preco: number;
};

carro = {
  modelo: "Civic Advanced Hybrid",
  ano: 2024,
  preco: 265900,
};

console.log(carro);

// Functions [Type Annotations]

function multiplyNumber(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplyNumber(4, 7));
