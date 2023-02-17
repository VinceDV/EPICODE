/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

function funzione() {
    var risultato = 10 + 20;
    var sum = risultato;
    return sum;
}
console.log(funzione())

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

function generaNumero() {
    var random = Math.floor(Math.random() * 21);
    return random;
}
console.log(generaNumero());

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

var me = {
    name: 'Vince',
    surname: 'De Vito',
    age: 30,
}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['HTML, CSS, JS'];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('React');
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
    let dado = Math.floor(Math.random() * 6) + 1;
    return dado
}
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
{
    let a = 4;
    let b = 9;

    function whoIsBigger(a, b) {
        if (a > b) {
            return a;
        } else return b;
    }
    console.log(whoIsBigger(a, b))
}
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
{
    let stringa = 'Ciao come stai?'

    function splitMe(stringa) {
        let mioArray = stringa.split(' ');
        return mioArray;
    }

    console.log(splitMe(stringa))
}
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

{
    let stringa = 'pappa';
    let valore = true;
    function deleteOne(stringa, valore) {
        if (valore == true) {
            stringa = stringa.substring(1);
            return stringa;
        } else {
            stringa = stringa.slice(0, -1)
            return stringa;
        }
    }
    console.log(deleteOne(stringa, valore));
}

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/


let parola = 'I have 4dogs';
let result = '';
function onlyLetters(parola) {
    for (let i = 0; i < parola.length; i++) {
        let char = parola[i];
        if (isNaN(char)) {
            result += char;
        }
    } return result;
}
console.log(onlyLetters(parola));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

{
    let email = 'caramba@gmail.com';
    function isThisAnEmail(email) {
        if (email.includes('@') && email.includes('.')) {
            return true;
        } else {
            return false;
        }
    }
    console.log(isThisAnEmail(email))
}

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

{
    function whatDayIsIt() {
        let daysOfWeek = ['Domenica', 'Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato'];
        let today = new Date();
        let dayIndex = today.getDay();
        return daysOfWeek[dayIndex];
    }
    console.log(whatDayIsIt())
}

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().
 
  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
let numero = 3;
function rollTheDices(numero) {
    var somma = 0;
    var valori = [];
    var valoreAggiunto;
    for (let i = 0; i < numero; i++) {
        valoreAggiunto = dice();
        somma += valoreAggiunto;
        valori.push(valoreAggiunto);
    } let object = {
        sum: somma,
        values: valori,
    }
    return object
}
console.log(rollTheDices(numero));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
{
    let data = new Date('2022-10-10');
    function howManyDays(data) {
        let oggi = new Date();
        let calcolo = oggi.getTime() - data.getTime();
        let diffDays = Math.floor(calcolo / (1000 * 3600 * 24));
        return diffDays;
    }
    console.log(howManyDays(data))
}

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
{
    let comple = new Date('2023-05-16')
    function isTodayMyBirthday(comple) {
        let oggi = new Date();
        let compleMese = comple.getMonth();
        let compleGiorno = comple.getDate();
        let meseOggi = oggi.getMonth();
        let oggiGiorno = oggi.getDate();
        if ((compleMese === meseOggi && compleGiorno === oggiGiorno)) {
            return true
        } else {
            return false
        };
    }
    console.log(isTodayMyBirthday(comple))
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
    {
        Title: 'The Lord of the Rings: The Fellowship of the Ring',
        Year: '2001',
        imdbID: 'tt0120737',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },

    {
        Title: 'The Lord of the Rings: The Return of the King',
        Year: '2003',
        imdbID: 'tt0167260',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Two Towers',
        Year: '2002',
        imdbID: 'tt0167261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of War',
        Year: '2005',
        imdbID: 'tt0399295',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'Lords of Dogtown',
        Year: '2005',
        imdbID: 'tt0355702',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings',
        Year: '1978',
        imdbID: 'tt0077869',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1990',
        imdbID: 'tt0100054',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
        Title: 'The Lords of Salem',
        Year: '2012',
        imdbID: 'tt1731697',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
        Year: '1984',
        imdbID: 'tt0087365',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1963',
        imdbID: 'tt0057261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Endgame',
        Year: '2019',
        imdbID: 'tt4154796',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
]


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

let prop = 'nome';
let mioOggetto = {
    nome: 'Vincenzo',
    cognome: 'De Vito'
}
function deleteProp(mioOggetto, prop) {
    delete mioOggetto[prop];
    return mioOggetto
};
console.log(deleteProp(mioOggetto, prop))



/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(movies) {
    let FilmNuovissimo = movies[0];
    for (i = 1; i < movies.length; i++) {
        if (movies[i].Year > FilmNuovissimo.Year) {
            FilmNuovissimo = movies[i];
        };
    }
    return FilmNuovissimo;
}
console.log(newestMovie(movies))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(movies) {
    let numFilm = movies.length;
    return numFilm;
}
console.log(countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(movies) {
    let soloAnni = [];
    for (i = 0; i < movies.length; i++) {
        soloAnni.push(movies[i].Year)
    }
    return soloAnni;
}
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(movies) {
    let millennio = [];
    for (i = 0; i < movies.length; i++) {
        if (movies[i].Year < 2000) {
            millennio.push(movies[i])
        }
    } return millennio;
}

console.log(onlyInLastMillennium(movies))

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(movies) {
    let somma = 0;
    for (i = 0; i < movies.length; i++) {
        somma += Number(movies[i].Year);
    } return somma;
}
console.log(sumAllTheYears(movies))
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
let stringaTitolo = 'Lord'
function searchByTitle(movies, stringaTitolo) {
    let arrayFilm = [];
    for (i = 0; i < movies.length; i++) {
        if (movies[i].Title.includes(stringaTitolo)) {
            arrayFilm.push(movies[i])
        } return arrayFilm;
    }
    console.log(searchByTitle(movies, stringaTitolo))
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
let pippo = 'Rings';
function searchAndDivide(pippo, movies) {
    let oggetto = {
        match: [],
        unmatch: [],
    }
    for (i = 0; i < movies.length; i++) {
        if (movies[i].Title.includes(stringaTitolo)) {
            oggetto.match.push(movies[i])
        } else {
            oggetto.unmatch.push(movies[i])
        }
    } return oggetto;
}
console.log(searchAndDivide(pippo, movies));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
let numeroIndex = 3;
function removeIndex(movies, numeroIndex) {
    movies.splice(numeroIndex, 1);
    return movies;
}
console.log(removeIndex(movies, numeroIndex))
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selezionaID() {
    document.getElementById('container').style.border = '1px solid red';
}
selezionaID()
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selezionaTag() {
    let tdTags = document.getElementsByTagName('td');
    for (i = 0; i < tdTags.length; i++) {
        tdTags[i].style.backgroundColor = 'yellow';
    }
}
selezionaTag()
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function testoTD() {
    let tdTags = document.getElementsByTagName('td');
    for (i = 0; i < tdTags.length; i++) {
        console.log(tdTags[i].innerHTML);
    }
}
testoTD();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function bgRosso() {
    let aTag = document.getElementsByTagName('a');
    for (i = 0; i < aTag.length; i++) {
        aTag[i].style.backgroundColor = 'red';
    }
}
bgRosso();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addLI() {
    let nuovoLI = document.createElement('li');
    let contenuto = document.createTextNode('nuovo elemento');
    nuovoLI.appendChild(contenuto);
    document.getElementById('myList').appendChild(nuovoLI);
}
addLI()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotaLista() {
    document.getElementById('myList').innerHTML = '';
}
svuotaLista();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiATr() {
    let aTR = document.getElementsByTagName('tr');
    for (i = 0; i < aTR.length; i++) {
        aTR[i].classList.add('test')
    }
    for (i = 0; i < aTR.length; i++) {
        aTR[i].style.backgroundColor = 'pink';
    }
}
aggiungiATr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
let altezzaAlbero = 3;
function mezzoAlbero(altezzaAlbero) {
    // Iterare per ogni riga dell'albero
    for (var righe = 1; righe <= altezzaAlbero; righe++) {
        var stelle = "";

        // Aggiungere gli asterischi alla riga corrente
        for (var i = 0; i < righe; i++) {
            stelle += "*";
        }

        // Stampare la riga corrente
        console.log(stelle);
    }
}
mezzoAlbero(altezzaAlbero);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
let height = 5;
function tree(height) {
    // Iterare per ogni riga dell'albero
    for (var row = 1; row <= height; row++) {
        var spaces = "";
        var stars = "";

        // Calcolare il numero di spazi e asterischi per la riga corrente
        for (var i = 0; i < height - row; i++) {
            spaces += " ";
        }
        for (var j = 0; j < 2 * row - 1; j++) {
            stars += "*";
        }

        // Stampare la riga corrente
        console.log(spaces + stars);
    }
}
tree(height);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
  
*/

let numeroPr = 59;
let primoVero = true;
function isItPrime(numeroPr, primoVero) {
    for (let i = 2; i < numeroPr; i++) {
        if (numeroPr % i == 0) {
            primoVero = false;
            break;
        }
    }
    if (primoVero) {
        console.log(`${numeroPr} e' un numero primo`);
    }
    else {
        console.log(`${numeroPr} non e' un numero primo`);
    }
}
isItPrime(numeroPr, primoVero);