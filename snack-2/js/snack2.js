/*L’utente inserisce due parole in successione, con due
prompt. Il software stampa prima la parola più corta, poi la
parola più lunga.*/
//Chiedo la prima parola
var parola1 = prompt('Inserisci la prima parola');
//Chiedo la seconda parola
var parola2 = prompt('Inserisci la seconda parola');
//Stampo prima la parola piu lunga poi la piu corta
if ( parola1.length > parola2.length ) {
  console.log( parola1 + '' + parola2 );
} else if ( parola2.length > parola1.length ) {
  console.log( parola2 + '' + parola1 );
} else {
  alert('le parole hanno gli stessi caratteri');
}
