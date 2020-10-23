// console.log("funziona js");

var bombaArray = [];
var lunghezzaBombaArray = 5;
var i = 1;



while( i <= lunghezzaBombaArray){
    var bomba = numRandom(1, 5);
    console.log("numero generato: ", bomba);

    if(!bombaArray.includes()){
        bombaArray.push(bomba);
        console.log("Aggiungo numero nell' array:", bombaArray);
        
    }
    i++;

}

console.log("La mia array:", bombaArray);


function numRandom(min, max){
    return Math.floor(Math.random() * (max- min + 1) + min);
}