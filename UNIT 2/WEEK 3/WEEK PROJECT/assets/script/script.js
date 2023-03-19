const striveUrl = "https://striveschool-api.herokuapp.com/api/product/"
const myAPI = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmNhM2Y4MWI0MjAwMTM5YjI3ZGQiLCJpYXQiOjE2NzkwNDM3NDcsImV4cCI6MTY4MDI1MzM0N30.rUfuULiw5aDvwnizn8uW0BuSn7hYpqItu0P3ifmou3M"
const displayItems = function (items) {
  console.log(items)
  items.forEach((product) => {
    const newLi = document.createElement('li')
    newLi.classList.add(
      'list-group-item',
    )
    //   newLi.innerHTML = `
    //     <span class="d-flex justify-content-between">
    //         <div>
    //             <span>${it.name} | </span>
    //             <span>${it.brand} | </span>
    //             <span>${it.description} | </span>

    //             <span>${it.img} | </span>
    //             <span>€${it.price} </span>
    //         </div>
    //         <div>
    //             <a href="./backoffice.html?eventId=${it._id}" class="btn btn-info">MODIFICA</a>
    //         </div>
    //     </span>
    //   `
    newLi.innerHTML = `<div class="card h-100 shadow">
                    <div class="row align-items-center">
                        <div class="col-sm-5 ">
                            <img src="${product.imageUrl}" class="img-fluid" alt="${product.name}">
                        </div>
                        <div class="col-sm-7 h-100" >
                            <div class="card-body">
                                <h5 class="card-title">${product.brand} ${product.name}</h5>
                                
                                <p class="card-text text-primary">$${product.price}</p>
                                <p class="card-text text-end">
                                <a href="./details.html?eventId=${product._id}" class="btn btn-primary">DETTAGLI</a>
                                <a href="./backoffice.html?eventId=${product._id}" class="btn btn-warning">MODIFICA</a>
                                                
                                </p>
                            </div>
                        </div>
                    </div>
                </div>`;
    let ulReference = document.getElementsByClassName('list-group')[0]
    ulReference.appendChild(newLi)
  })
}

const getItems = function () {
  fetch(striveUrl, {
    method: "GET",
    headers: {
      "Authorization": myAPI
    }
  })
    .then((response) => {
      console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        return new Error('Errore nella gestione della chiamata')
      }
    })
    .then((items) => {
      console.log('ITEMS', items)

      displayItems(items)
    })
    .catch((err) => {
      console.log(err)
    })
}
getItems()

const createItems = function () {
  fetch(striveUrl, {
    method: 'POST',
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmNhM2Y4MWI0MjAwMTM5YjI3ZGQiLCJpYXQiOjE2NzkwNDM3NDcsImV4cCI6MTY4MDI1MzM0N30.rUfuULiw5aDvwnizn8uW0BuSn7hYpqItu0P3ifmou3M"
    }
  })
    .then((response) => {
      console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        return new Error('Errore nella gestione della chiamata')
      }
    })
    .then((items) => {

      console.log('ITEMS', items)
      displayItems(items)
    })
    .catch((err) => {
      console.log(err)
    })
}