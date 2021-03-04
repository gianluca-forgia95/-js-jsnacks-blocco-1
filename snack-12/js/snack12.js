//Snack12
/*
Crea un array di numeri interi e fai la somma di tutti gli
elementi che sono in posizione dispari
*/
//Creo array numeri interi
var numeriInteri = [20 , 30, 40, 50, 60, 90, 70];

var posizioneDispari = 0;
//definisco il ciclo
for (var i = 0; i < numeriInteri.length; i++) {
  //sommo i numeri dispari
  if (i % 2 == 1 ) {
    posizioneDispari = posizioneDispari + numeriInteri[i];
  }
}
console.log(posizioneDispari);
