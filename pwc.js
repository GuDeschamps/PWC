// 1. Reverta a ordem das palavras nas frases, mantendo a ordem das palavras:

// a. input: "Hello, World! OpenAI is amazing."
//b. Output: "amazing. is OpenAI World! Hello,"

const originalString = "Hello, World! OpenAI is amazing.";

var splitString = originalString.split(" ");
var reverseString = splitString.reverse();
var joinArray = reverseString.join(" ");
console.log(joinArray);
//console.log(typeof joinArray);