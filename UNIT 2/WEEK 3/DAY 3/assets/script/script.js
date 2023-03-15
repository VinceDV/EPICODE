fetch('https://striveschool-api.herokuapp.com/books')
.then((response) => {
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(data)
    data.forEach(libro => {
    let sezioneLibri = document.getElementById('sezioneLibri')
    let nuovaCard = document.createElement('div')
    nuovaCard.className = 'col col-md-2 col-lg-3 m-1 h-100'
    let cartaCtn = document.createElement('div')
    cartaCtn.className = 'card cursor-pointer m-2'
    let cartaImg = document.createElement('img')
    cartaImg.className = 'card-img-top'
    cartaImg.setAttribute('src', libro.img)
    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    let cardTtl = document.createElement('h5')
    cardTtl.className = 'card-title'
    cardTtl.innerText = libro.title
    let cardText = document.createElement ('p')
    cardText.className = 'card-text'
    cardText.innerText = '$' + libro.price
    let cncBtn = document.createElement('button')
    cncBtn.className = 'btn btn-danger m-2'
    cncBtn.innerText = 'Scarta'
    let aggiungi = document.createElement('button')
    aggiungi.className = 'btn btn-primary'
    aggiungi.innerHTML = 'Aggiungi al carrello'

    sezioneLibri.appendChild(nuovaCard)
    nuovaCard.appendChild(cartaCtn)
    cartaCtn.appendChild(cartaImg)
    cartaCtn.appendChild(cardBody)
    cardBody.appendChild(cardTtl)
    cardBody.appendChild(cardText)
    cardBody.appendChild(aggiungi)
    cardBody.appendChild(cncBtn)

    cncBtn.addEventListener('click', function() {
        cartaCtn.classList.add('d-none')
    })
    let listaCarrello = document.getElementById('listaCarrello')
    aggiungi.addEventListener('click', function() {
        let dltBtn = document.createElement('button')
        dltBtn.className = 'btn btn-danger m-2'
        dltBtn.innerHTML = 'X'
        let newLi = document.createElement('li')
        newLi.innerText = libro.title
        newLi.className = 'd-flex align-items-center justify-content-around border border-dark p-2'
        localStorage.setItem('Ordine', JSON.stringify(libro.title))
        listaCarrello.appendChild(newLi)
        newLi.appendChild(dltBtn)
        dltBtn.addEventListener('click', function() {
            newLi.classList.add('d-none')
        })
    })
    });
})

.catch((err) => {
    console.log(err)
})
