/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
function salutation(name) {
  const currentHuors = new Date().getHours();
  let salutation;

  if (currentHuors < 13) {
    salutation = "buongiorno";
  } else if (currentHuors < 17) {
    salutation = "buon pomeriggio";
  } else {
    salutation = "buonasera";
  }

  return `${salutation}, ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(salutation("Mario"));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
