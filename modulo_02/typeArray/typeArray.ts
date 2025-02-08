// => Exemplo 01 - Uso de Colechetes
let alimento: string[] = ["🍕", "🍔", "🌭", "🍟", "🌮"];
console.log(alimento[0]); // 🍕

// => Exemplo 02 - Array Object (Objeto Array)
let frutas: Array<string> = ["🍎", "🍌", "🍇", "🍉", "🍊"];
console.log(frutas[2]); // 🍇

// => Exemplo 03 - Adicionando mais strings ao Array, com o método push()
let idiomas: Array<string> = ["inglês", "espanhol", "francês"];
console.log(idiomas); // [ 'inglês', 'espanhol', 'francês' ]
idiomas.push("italiano", "alemão");
console.log(idiomas); // [ 'inglês', 'espanhol', 'francês', 'italiano', 'alemão' ]

// => Exemplo 04 - Identificando o tamanho do Array, com a propriedade length
let cores: Array<string> = ["vermelho", "azul", "verde", "amarelo"];
console.log(cores.length); // 4

// => Exemplo 05 - Exemplo de Array com Spread Operator
let paises: Array<string> = ["Brasil", "Argentina", "Chile"];
console.log(paises); // [ 'Brasil', 'Argentina', 'Chile' ]
paises = [...paises, "Peru", "Colômbia", "Uruguai"];
console.log(paises); // [ 'Brasil', 'Argentina', 'Chile', 'Peru', 'Colômbia', 'Uruguai' ]

// => Exemplo 06 - Exemplo de Array com laço de repetição
let linguagensProgramacao: Array<string> = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
];

function exibirLinguagens(linguagens: Array<string>) {
  for (let i = 0; i < linguagens.length; i++) {
    console.log(linguagens[i]);
  }
}

exibirLinguagens(linguagensProgramacao);
