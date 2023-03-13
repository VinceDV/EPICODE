class User {
    constructor (firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
}
confrontaEta = function(x) {
    if (this.age > x.age) {
        return this.firstName + " e' piu' grande di " + x.firstName
    } else {
        return x.firstName + " e' piu' grande di " + this.firstName
    }
}
}

const user1 = new User(
    'Luigi',
    'Bianchi',
    '24',
    'Italy',
)

const user2 = new User(
    'Gianni',
    'Bianchi',
    '26',
    'Italy'
)

const user3 = new User(
    'Piero',
    'Bianchi',
    '20',
    'Italy'
)
console.log(user1.confrontaEta(user3))

////
let nomeAnimale = document.getElementById('nomeAnimale')
let nomePadrone = document.getElementById('nomePadrone')
let nomeSpecie = document.getElementById('nomeSpecie')
let nomeRazza = document.getElementById('nomeRazza')
let addAnimal = document.getElementById('addAnimal')
let listaAnimali = document.getElementById('listaAnimali')

let animali = []

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }
    compareOwners = function(y) {
        if (this.ownerName === y.ownerName) {
            return true
        } else {
            return false
        }
    }
}

const renderAnimali = () => {
    listaAnimali.innerHTML = ''
    animali.forEach((animale) => {
        const newLi = document.createElement('li')
        newLi.innerText = animale.petName + ', di ' + animale.ownerName + '. ' + animale.species + ', ' + animale.breed
        listaAnimali.appendChild(newLi)
    })
}

addAnimal.addEventListener('click', () => {
    let newAnimal = new Pet(
        nomeAnimale.value,
        nomePadrone.value,
        nomeSpecie.value,
        nomeRazza.value
    )
    animali.push(newAnimal)
    nomeAnimale.value = ''
    nomePadrone.value = ''
    nomeSpecie.value = ''
    nomeRazza.value = ''
    renderAnimali()
})
