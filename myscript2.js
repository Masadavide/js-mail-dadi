/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve? */

let dado_utente = Math.floor (Math.random() * 6 + 1);
let dado_cpu = Math.floor (Math.random() * 6 + 1);

document.getElementById("dado1").innerHTML = dado_utente;
document.getElementById("dado2").innerHTML = dado_cpu;

console.log(dado_utente)
console.log(dado_cpu)

if(dado_utente > dado_cpu){
    document.getElementById("risultato").innerHTML = ("Hai vinto");
    console.log("Hai vinto");
}else if(dado_utente < dado_cpu){
    document.getElementById("risultato").innerHTML = ("Hai perso");
    console.log("Hai perso");
}else{
    document.getElementById("risultato").innerHTML = ("Parità");
    console.log("Parità");
}
