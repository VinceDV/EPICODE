var cliente = 'Aldo';
let stato = 'cliente';
const pie = 3.14;
document.getElementById('concatena').innerHTML = cliente + ", " + stato + ", " + pie;

//

var catena = cliente + ', ' + stato + ', ' + pie;
document.getElementById('concatena2').innerHTML = catena;

//

var cliente2 = 'Mario';
document.getElementById('var').innerHTML = cliente2;
document.getElementById('final').innerHTML = cliente2;
document.getElementById('let2').innerHTML = cliente2;
{
    let cliente2 = 'Carla';
    document.getElementById('let').innerHTML = cliente2;
    document.getElementById('let3').innerHTML = cliente2;
    document.getElementById('final2').innerHTML = cliente2;
}

//

const iniziale = 15;

document.getElementById('iniziale').innerHTML += iniziale;
document.getElementById('valore1').innerHTML += iniziale + iniziale + ", " + (iniziale + iniziale + 1);

document.getElementById('valore2').innerHTML += iniziale - 10 + ", " + (iniziale-11);

document.getElementById('valore3').innerHTML += iniziale * 3;

document.getElementById('valore4').innerHTML += iniziale / 3;

document.getElementById('valore5').innerHTML += iniziale + " e' un numero";
