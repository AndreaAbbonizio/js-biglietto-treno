//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana


/*
-chiedere il numero di km e memorizzarlo .
-chiedere l'età del passeggero e memorizzarla .
-creare variabile per prezzo al km del biglietto.
-creare variabile del prezzo del biglietto moltiplicando i km che si vogliono percorrere per il prezzo del biglietto al km.
? SE l'età del passeggero è minore ai 18 anni
    °applicare sconto del 20% al biglietto.
-? ALTRIMENTI SE l'età del passegero è maggiore ai 65 anni
    °applicare uno sconto del 40% sul biglietto

-Trasformare l'output del prezzo finale con massimo due decimali.
*/



let usersKm = Math.floor(prompt("Quanti chilometri vuoi percorrere?"));
let usersAge = Math.floor(prompt("Quanti anni hai?"));
const ticketPrice = 0.21;

let finalPrice;

if (usersAge < 18){
    let sale20 = 20;
    finalPrice = ((usersKm * ticketPrice) * sale20 ) / 100 ;
} else if ( usersAge > 65 ) {
    let sale40 = 40;
    finalPrice = ((usersKm * ticketPrice) * sale40 ) / 100 ;

}else{
    finalPrice = usersKm * ticketPrice ;
}



document.writeln(`Il prezzo del tuo biglietto è : ${finalPrice.toFixed(2)}€`)









