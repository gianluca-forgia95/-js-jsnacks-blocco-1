//Chiedo all'utente il primo numero
var primonumero = prompt('Inserisci il primo numero');
//Chiedo all'utente il secondo numero
var secondonumero = prompt('Inserisci il secondo numero');

//Stampo il numero piu grande
if ( primonumero > secondonumero ) {
  console.log(primonumero);
} else if ( secondonumero > primonumero ) {
  console.log(secondonumero);
} else {
  console.log('I numeri sono uguali');
}
