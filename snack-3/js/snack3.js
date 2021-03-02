/*Il software deve chiedere per 10 volte all’utente di inserire
un numero. Il programma stampa la somma di tutti i numeri
inseriti.*/
//Chiedo all'utente 10 numeri
var somma = 0;

for  ( var i = 1; i <= 10; i++ )  {
  var number = parseInt(prompt("Inserisci un numero"));
  somma = somma + number;
}

//stampo la somma dei numeri
console.log( somma );
