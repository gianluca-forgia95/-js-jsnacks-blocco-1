/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.*/
//Creo array vuoto
var numeri = [];
//Definisco array e chiedo all'utente 6 volte il numero
for ( var i = 1; i <= 6; i++) {
  var numero = parseInt(prompt('Inserisci il tuo numero'));
}
if ( numero % 2 == 1) {
  numeri.push(numero);
}
//Stampo il numero pari
console.log(numeri);
