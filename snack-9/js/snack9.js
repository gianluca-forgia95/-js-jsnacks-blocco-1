/*
Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.
*/
//Chiedo all'utente di inserire un numero 5 volte
var numeroInserito = parseInt(prompt('Inserisci un numero'));
var numeroInserito2 = parseInt(prompt('Inserisci un numero'));
var numeroInserito3 = parseInt(prompt('Inserisci un numero'));
var numeroInserito4 = parseInt(prompt('Inserisci un numero'));
var numeroInserito5 = parseInt(prompt('Inserisci un numero'));
//definisco il programma con for
var numeri = [];
numeri.push(numeroInserito + numeroInserito2 + numeroInserito3 + numeroInserito4 + numeroInserito5);
 for (var i = 0; i < numeri.length; i++) {
  console.log(numeri[i]);

 }
//definisco il programma con while
i = 0
while ( i < numeri.length ) {
console.log(numeri[i]);
i++;
}
