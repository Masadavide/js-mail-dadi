/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

function myFunction() {
    let myEmail = document.getElementById("myEmail").value;
    const validEmail = ["gee_male@gmail.com","pope_francis@franciscus.com","elon_musk@X_Æ_A-12.com"];
    
    let trovata = false;
    
    for (let i = 0; i < validEmail.length; i++){
        if(myEmail == validEmail[i]){
            trovata = true;
            i = validEmail.length
        }
    }    
    
    if(trovata){
        document.getElementById("demo").innerHTML = "Email corretta.";
    }else{
        document.getElementById("demo").innerHTML = "Email errata.";
    }
}
