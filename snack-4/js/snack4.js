/*In un array sono contenuti i nomi degli invitati alla festa del
grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa.*/
//Creo l'array
var invitati = ['Inzaghi', 'Tommaso', 'Gianluca', 'Samuele' ];
//Chiedo all'utente un nome
var nome = prompt('Inserisci il tuo nome');
//Creo variabile nome giusto
var inlista = 0;
for (var i = 0; i < invitati.length;  i++) {
  console.log(invitati[i]);
  if ( nome == invitati[i] ) {
    inlista = 1;
  }
}
//Dico all'utente se puo entrare o meno
if (inlista == 1) {
  alert('Congratulazioni! sei in lista');
} else {
  alert('non sei in lista ci dispiace...');
}
