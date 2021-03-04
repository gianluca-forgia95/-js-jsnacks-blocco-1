/*
Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati.
*/
//Creo array nomi e cognomi
 var nomi = ['Gianluca', 'Samuele', 'Francesco'];
 var cognomi = ['Rossi','Bianchi','Totti'];
//creo array vuoto
 var nomiCognomiRandom = [];
 //Definisco il ciclo
 for (var i = 1; i <= 3; i++) {
   //Assegno var random per nomi e cognomi
  var nomeRandom = Math.floor(Math.random() * nomi.length);
  var cognomeRandom = Math.floor(Math.random() * cognomi.length);

   var invitato = nomi[nomeRandom] + '' + cognomi[cognomeRandom]
   nomiCognomiRandom.push(invitato);
 }
//Stampo la lista fake
 console.log(nomiCognomiRandom);
