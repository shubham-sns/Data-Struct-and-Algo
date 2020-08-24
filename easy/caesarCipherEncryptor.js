// O(n) time | O(n) space
// function caesarCipherEncryptor(string, key) {
//   const newLetters = [];
//   const newKey = key % 26;
//   for (const letter of string) {
//     newLetters.push(getNewLetter(letter, newKey));
//   }
//   return newLetters.join("");
// }
// function getNewLetter(letter, key) {
//   const newLetterCode = letter.charCodeAt() + key;
//   return newLetterCode <= 122
//     ? String.fromCharCode(newLetterCode)
//     : String.fromCharCode(newLetterCode - 26);
// }

// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey, alphabet));
  }
  return newLetters.join("");
}
function getNewLetter(letter, key, alphabet) {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return newLetterCode <= 25
    ? alphabet[newLetterCode]
    : alphabet[-1 + (newLetterCode % 25)];
}

caesarCipherEncryptor("xyz", 2);
