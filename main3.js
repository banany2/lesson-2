function removeLetters(str, charsToRemove) {
 let result = "";
 for (let i = 0; i < str.length; i++) {
  if (!charsToRemove.includes(str[i])) {
   result += str[i];
  }
 }
 return result;
}
const inputString = prompt("Enter the string:");
const lettersToRemove = prompt("Enter the characters to remove (e.g., 'ld'):").split('');
const resultString = removeLetters(inputString, lettersToRemove);
console.log("Result:", resultString);