// console.log("funziona js");


var arrayBomba = [];        // lista bombe (oovero numeri vietati)
var numeroMassimo = 100;
var possibilita = 84;           //100-16
var arrayNumeroAccettato = [];  // lista numeri accettati inseriti dall' utente
var utente = 0;             // numero scelto dall' utente


// facoltativo: scelta del livello di difficoltà
var livello = parseInt(prompt("inserisci la difficoltà da 0 a 2").trim());
while( (livello < 0) || (livello > 2) || isNaN(livello) ){
    utente = parseInt(prompt("inserisci la difficoltà deve essere tra  0 a 2").trim());
}

switch(livello){
    case 0:
        numeroMassimo = 100;
        possibilita = 84;
        break;
    
    case 1:
        numeroMassimo = 80;
        possibilita = 64;
        break;
    
    case 2:
        numeroMassimo = 50;
        possibilita = 34;
        break;
}

// 16 numeri random (bombe) con controllo dei doppioni
while(arrayBomba.length < 16){
    var numeroBOmba = numeroRandom(numeroMassimo);

    // se  numero è non già presente, pusha il numero
    if(!arrayBomba.includes(numeroBOmba)){     //arrayBomba.includes(numeroBOmba) === false
        arrayBombe.push(numeroBOmba);
    }
}
console.log("La tua lista  delle bombe: ", arrayBomba);



while( (arrayNumeroAccettato.length < possibilita) && (arrayBomba.includes(utente) !== true) ){
    
    // l' utente sceglie il numero
    utente = parseInt(prompt("inserisci un numero da 1 a " + numeroMassimo).trim());
    while( (utente < 1) || (utente > numeroMassimo) || (isNaN(utente) )){
        utente = parseInt(prompt("inserisci un numero da 1 a " + numeroMassimo).trim());
    }
    console.log("Scelta utente: ", utente);


    // controlla numero in input
    controlloNumero(utente);

    // confronto possibilità
    if(arrayNumeroAccettato.length === possibilita){
        alert("Hai vinto! ");
    }
}
console.log("LOSER");
console.log("Ecco la lista dei numeri validi inseriti: ", arrayNumeroAccettato);
// console.log("Tentativi riusciti: ", n);



// genera numeri random
function numeroRandom(max){
    return Math.floor(Math.random() * max) + 1;
}

// controllo numero utente
function controlloNumero(numero){
    // se n è presente nella lista bombe
    if(arrayBomba.includes(numero) ){       //arrayBomba.includes(numero) === true
        alert("Hai perso: hai provato con successo" + arrayNumeroAccettato.length +
         " volte prima di trovare la bomba");
    }
    // se n è già stato inserito in precedenza
    else if(arrayNumeroAccettato.includes(numero)){     // (numeriConsentiti.includes(numero) == true
        alert("numero già inserito, inserirne un altro: ");
    }
    // se n non è stato inserito
    else if( !arrayNumeroAccettato.includes(numero)){   // numeriConsentiti.includes(numero) == false
        arrayNumeroAccettato.push(numero);
    }
}