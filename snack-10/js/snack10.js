/*
Inserisci un numero, se è pari stampa il numero, se è dispari
stampa il numero successivo
*/
//Chiedo di inserire un numero
var numeroInserito = parseInt(prompt('Inserisci un numero'));
//condizione per stampare il numero pari
if ( numeroInserito % 2 == 0 ) {
  console.log(numeroInserito);
} //altrimenti stampo il numero inserito +1
else {
  console.log( numeroInserito + 1 );
}
