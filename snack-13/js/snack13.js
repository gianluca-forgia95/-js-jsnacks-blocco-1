//Snack13
/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,

fino a quando ne avrà tanti quanti l’altro.
*/
//Creo i 2 array
var elementiRandom1 = ['Totti','De Rossi', 'Max', 'Monir','Ranieri'];
var elementiRandom2 = ['Ilary','Diletta','Miriam'];
//Aggiungo variabile per elementi da aggiungere
var k = elementiRandom2.length;
//Definisco il ciclo
while ( k < elementiRandom1.length ) {
  //Creo var random
  var random = Math.floor(Math.random() * 1927);
  elementiRandom2.push(random);
  k++;
}
//Stampo la lista con elementi random aggiunti
console.log(elementiRandom2);
