/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";
function saluta(nome) {
  return "Ciao " + nome;
}

const messaggio = saluta(userName);

console.log(messaggio);

// Dichiara la funzione qui.

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'Mario': // ciao Mario
