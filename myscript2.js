/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve? */

let dado_utente = Math.floor (Math.random() * 6 + 1);
let dado_cpu = Math.floor (Math.random() * 6 + 1);

console.log(dado_utente)
console.log(dado_cpu)

if(dado_utente > dado_cpu){
    console.log("Hai vinto");
}else if(dado_utente < dado_cpu){
    console.log("Hai perso");
}else{
    console.log("Parità");
}
