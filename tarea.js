/*User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
*/


const prompt = require('prompt-sync')();

let username = prompt("¿Cuál es tu nombre de usuario?");
let age = prompt("¿Cuál es tu edad?");
let favoriteMovies = prompt("¿Cuáles son tus películas favoritas? (separadas por comas)");

let moviesArray = favoriteMovies.split(',').map(movie => movie.trim());

console.log(`Nombre de usuario: ${username}`);
console.log(`Edad: ${age}`);
moviesArray.forEach(movie => {
  console.log(`La película ${movie} es una de mis favoritas.`);
});


/*Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
*/

let maxNumber = -Infinity;

for (let i = 0; i < 10; i++) {
  let num = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
  if (num > maxNumber) {
    maxNumber = num;
  }
}
console.log(`El número más alto es: ${maxNumber}`);


/*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
*/

let seconds = parseInt(prompt("¿Cuántos segundos hasta la alarma?"));
let message = prompt("¿Qué mensaje desea mostrar?");

setTimeout(() => {
  console.log(message);
}, seconds * 1000);

/*
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/

function esPalindromo(text) {
  let cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversedText = cleanedText.split('').reverse().join('');
  return cleanedText === reversedText;
}

let inputText = prompt("Ingrese una palabra o frase:");
console.log(esPalindromo(inputText) ? "Es un palíndromo" : "No es un palíndromo");

/*
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

let number = parseInt(prompt("Ingrese un número entero:"));
console.log(`El factorial de ${number} es: ${factorial(number)}`);

/*
Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

*/
function flattenArray(arr) {
  let flatArray = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flattenArray(element));
    } else {
      flatArray.push(element);
    }
  });
  return flatArray;
}

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
console.log(flattenArray(multiDimension));