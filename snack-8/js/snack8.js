//chiedo all'utente un numero di 4 cifre
var numero = prompt('Inserisci un numero di 4 cifre');
//creo var
var somma = 0;
//definisco il ciclo
for (var i = 0; i < numero.length; i++) {
  somma = somma + parseInt(numero[i]);
}
//Stampo il risultato
console.log(somma);
