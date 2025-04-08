/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function countVowels(phrase) {
  let word = 0;

  for (let i = 0; i < phrase.length; i++) {
    const currentChar = phrase[i];
    if (isVowel(currentChar)) {
      word++;
    }
  }

  return word;
}

alert(countVowels("javascript"));

function isVowel(char) {
  const vowels = "aeiouAEIOU";
  return vowels.includes(char);
}
// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
