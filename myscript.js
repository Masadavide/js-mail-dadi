/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

/* function myFunction() {
    let myEmail = document.getElementById("myEmail").value;
    document.getElementById("demo").innerHTML = myEmail;
    return myEmail;
}
let myEmail2 = myFunction(); */

const myEmail = prompt("Inserisci la tua email:");

const validEmail = [" gee_male@gmail.com","pope_francis@franciscus.com","elon_musk@X_Æ_A-12.com"];

let trovata = false;

for (let i = 0; i < validEmail.length; i++){
    if(myEmail == validEmail[i]){
        trovata = true;
    }
}    

if(trovata){
    console.log("Email corretta.");
}else{
    console.log("Email errata.");
}
