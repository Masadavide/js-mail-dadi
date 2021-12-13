/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

function myFunction() {
    let myEmail = document.getElementById("myEmail").value;
    document.getElementById("demo").innerHTML = myEmail;
    return myEmail;
}

let myEmail2 = myFunction();

console.log(myEmail2);

const validEmail = ["a","b","c"];

let trovata = false;

for (let i = 0; i < validEmail.length; i++){
    if(myEmail2 == validEmail[i]){
        trovata = true;
    }
}    

if(trovata){
    document.getElementById("demo2").innerHTML = "Email corretta.";
}else{
    document.getElementById("demo2").innerHTML = "Email errata.";
}
