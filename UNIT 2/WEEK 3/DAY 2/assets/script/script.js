let form = document.getElementById('form')
let par = document.getElementById('valoreSalvato')
let input = document.getElementById('userInput')
let salva = document.getElementById('salva')
let rimuovi = document.getElementById('rimuovi')
let istruzioni = document.getElementById('istruzioni')

const save = function() {
    const currentText = input.value
    if (currentText) {
    localStorage.setItem('Nome Utente', JSON.stringify(currentText))
    par.innerHTML = currentText
    istruzioni.innerHTML = ("Il nome utente e' stato salvato.")
    } else {
        istruzioni.innerHTML =  ('Inserisci un nome!')
    }
}

salva.onclick = save

const remove = function() {
    if(localStorage.getItem('Nome Utente')) {
        localStorage.clear()
        par.innerHTML = ''
        istruzioni.innerHTML = ("Il nome utente e' stato eliminato.")
    } else {
        istruzioni.innerHTML = ('ERRORE! Non esiste al momento contenuto salvato.')
    }
}

rimuovi.onclick = remove

/// ESERCIZIO 2
let timer = document.getElementById('timer')

// Get the current time from session storage or set it to zero
let currentTime = sessionStorage.getItem('timer') || 0;

// Convert the time to milliseconds
currentTime = parseInt(currentTime, 10) * 1000;

// Start the timer
const intervalId = setInterval(() => {
  // Increment the time by one second
  currentTime += 1000;

  // Update the timer element with the new time
  const minutes = Math.floor(currentTime / 60000);
  const seconds = ((currentTime % 60000) / 1000).toFixed(0).padStart(2, '0');
  timer.textContent = `${minutes}:${seconds}`;

  // Save the current time to session storage
  sessionStorage.setItem('timer', currentTime / 1000);
}, 1000);