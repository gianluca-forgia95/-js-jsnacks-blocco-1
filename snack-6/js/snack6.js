/*
Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente.
*/
//Chiedo all'utente un numero
var number = parseInt(prompt('Inserisci un numero'));
//apro il ciclo
for (var i = 1; i <= number; i++) {
  //stampo potenza del numero inserito e dei precedenti
  console.log(Math.pow(i, 3));
}
