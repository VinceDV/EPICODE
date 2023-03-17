const myAPI = 'hhS3LyN56v55xGUkUwAqSNNfKp9ORVRHemeo7GD5eF6LfLpCaijL3bBl';
const rowReference = document.getElementById("fotoAlbum");
const standardUrl = "https://api.pexels.com/v1/search?query=";
const url1 = 'https://api.pexels.com/v1/search?query=nature'
const url2 = 'https://api.pexels.com/v1/search?query=cats'
const urlView='https://www.pexels.com/photo/'

const loadBtn = document.getElementById("btnLoad");
const colReference = document.getElementsByClassName("col");

const estraiFoto = (foto) => {
  rowReference.innerHTML = ``;
  foto.forEach((foto, index) => {
    let newCol = document.createElement('div');
    newCol.classList.add('col-md-4');
    newCol.setAttribute('id',index)
    newCol.innerHTML = `<div class="card mb-4 shadow-sm">
    <img src="${foto.src.original}" height="200px">
    <div class="card-body">
      <h5 class="card-title">${foto.alt}</h5>
      <p class="card-text">
        Photo description
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <a href="details.html?fotografoNome=${foto.photographer}&fotografoLink=${foto.photographer_url}&srcFoto=${foto.src.original}&titoloFoto=${foto.alt}" type="button" class="btn btn-sm btn-outline-secondary">
            View
          </a>
          <div type="button" id="${index}" onclick="nascondiCard(${index})" class="hide btn btn-sm btn-outline-secondary">
            HIDE
          </div>
        </div>
        <small class="text-muted">${foto.id}</small>
      </div>
    </div>
  </div>`;
  rowReference.appendChild(newCol); 
  console.log((`${urlView}${foto.alt}/${foto.id}`).trim())
  });
}


const caricaFoto = () => {
  fetch(url1, {
    headers: {
      Authorization: myAPI
    }
  })
  .then((response) => {
    return response.json();
  })
  .then((foto) => {
    let arrayFoto = foto.photos;
    console.log(arrayFoto)
    estraiFoto(arrayFoto)
  })
  .catch(err => {
    console.log(err)
  })
}

const caricaFoto2 = () => {
  fetch(url2,{
      method:'GET',
      headers:{
          Authorization:myAPI
      }
  })
  .then((response)=>{
      return response.json();
  })
  .then((foto)=>{
      //console.log(foto.photos);
      let arrayFoto=foto.photos;
      //console.log(arrayFoto[0]);
      estraiFoto(arrayFoto);
  })
  .catch(err=>{console.log(err)});
  } 

  
  loadBtn.addEventListener('click',()=>{
      fetch(standardUrl+fotoquery.value,{
          method:'GET',
          headers:{
              Authorization:myAPI
          }
      })
      .then((response)=>{
          return response.json();
      })
      .then((foto)=>{
          if(foto.photos.length === 0){
              rowReference.innerHTML=``;
              rowReference.innerHTML=`<h2 class="text-danger mx-auto">La parola cercata non ha foto presenti sul nostro sito!</h2>`
              console.log('l\'ggetto cercato non ha album');
          } else {
          let arrayFoto = foto.photos;
          //console.log(arrayFoto[0]);
          estraiFoto(arrayFoto);
          }

      })
      .catch(err => {
        console.log(err)
      });
      fotoquery.value = ''; 
      }
      
  )

let btnHide = document.querySelector('hide');
  const nascondiCard = (index)=>{
      let divEliminato=document.getElementById(`${index}`);
      divEliminato.style.display='none';
      //console.log(divEliminato);
  }