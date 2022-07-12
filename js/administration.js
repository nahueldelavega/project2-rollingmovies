if (!localStorage.getItem('userLogged')){
  window.location.assign(window.location.origin)
}


//! cRud
let moviesBaseTabla = JSON.parse(localStorage.getItem('moviesBase'));
moviesBaseTabla.forEach(movie=>{
  let movieRow = document.createElement('tr');
  movieRow.innerHTML=`
  <th scope="row">${movie.id}</th>
  <td>${movie.name}</td>
  <td>${movie.categories}</td>
  <td>${movie.featured}</td>
  <td>${movie.recomended}</td>
  <td><img class="table-link-video" src=${movie.urlVideo}></td>
  <td><img class="table-link-image" src=${movie.urlImage}></td>
  <td>
  <button class="btn btn-secondary" onclick="deleteMovie(${movie.id})">🚮</button>
  <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#edit-modal" onclick="editMovie(${movie.id})">🖊️</button>
  </td>
  `;
  document.querySelector('.table-body').appendChild(movieRow);
})

  //! Crud
  function addMovie(){
    // event.preventDefault();
    let idMovie = Math.floor(Math.random()*1000000)
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const featured = document.getElementById('featured').value;
    const recomended = document.getElementById('recomended').value;
    const description = document.getElementById('description').value;
    const video = document.getElementById('url-video').value;
    const image = document.getElementById('url-image').value;

    let moviesBase = JSON.parse(localStorage.getItem("moviesBase"));
    let newMovie = new Movie (idMovie,name,category,featured,recomended,description,video,image);
    moviesBase.push(newMovie);
    let moviesFromLSToJSON = JSON.stringify(moviesBase);
    localStorage.setItem("moviesBase",moviesFromLSToJSON);
    // window.location.reload();
  }

  //!cruD
const deleteMovie = (id) => {
  let movies = JSON.parse(localStorage.getItem('moviesBase'));
  let moviesUpdated = movies.filter(movie=>movie.id !== id);
  localStorage.setItem('moviesBase',JSON.stringify(moviesUpdated));
  window.location.reload();
}

//!crUd
const editMovie = function(id){
  let movies = JSON.parse(localStorage.getItem('moviesBase'));
  let movieToEdit = movies.find(movie => movie.id == id);
  // document.getElementById('id-edit').value = movieToEdit.id;
  document.getElementById('name-edit').value = movieToEdit.name;
  document.getElementById('category-edit').value = movieToEdit.categories;
  document.getElementById('featured-edit').value = movieToEdit.featured;
  document.getElementById('recomended-edit').value = movieToEdit.recomended;
  document.getElementById('description-edit').value = movieToEdit.description;
  document.getElementById('url-video-edit').value = movieToEdit.urlVideo;
  document.getElementById('url-image-edit').value = movieToEdit.urlImage;
  document.getElementById('edit-form').setAttribute('onsubmit',`editMovie2(${id})`);
}

const editMovie2 = (id) =>{
  // let id = document.getElementById('id-edit').value;
  let name = document.getElementById('name-edit').value;
  let category = document.getElementById('category-edit').value;
  let featured = document.getElementById('featured-edit').value;
  let recomended = document.getElementById('recomended-edit').value;
  let description = document.getElementById('description-edit').value;
  let urlVideo = document.getElementById('url-video-edit').value;
  let urlImage = document.getElementById('url-image-edit').value;
  let movies = JSON.parse(localStorage.getItem('moviesBase'));
  let moviesUpdated = movies.filter(movie=>movie.id !== id);
  let movieUpdated = new Movie(id,name,category,featured,recomended,description,urlVideo,urlImage);
  moviesUpdated.push(movieUpdated);
  localStorage.setItem('moviesBase',JSON.stringify(moviesUpdated));
}
