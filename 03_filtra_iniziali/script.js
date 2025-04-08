/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function filterWordForLetter(array, letter) {
  return array.filter(
    (word) => word.charAt(0).toLowerCase() === letter.toLowerCase()
  );
}

const result = filterWordForLetter(names, "A");

console.log(result);
// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
