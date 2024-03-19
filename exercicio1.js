let word = "Hello Human, nice to meet you!"

let minusculas = word.toLowerCase();

let vogais = ["a", "e", "i", "o", "u"];

let caracteres = minusculas.split('');
let vogaisFound = caracteres.filter(letra => vogais.includes(letra));
let numero = vogaisFound.length;


console.log("Texto: " + minusculas);
console.log("Número de vogais: " + numero);
console.log("Vogais encontradas: " + vogaisFound.join(", "));
