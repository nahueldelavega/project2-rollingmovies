if (!localStorage.getItem('userLogged')){
  window.location.assign(window.location.origin)
}


//! cRud
let moviesBaseTabla = JSON.parse(localStorage.getItem('moviesBase'));
moviesBaseTabla.forEach(movie=>{
  let movieRow = document.createElement('tr');
  movieRow.classList.add('border')
  movieRow.innerHTML=`
  <th scope="row">${movie.id}</th>
  <td class="text-center">${movie.name}</td>
  <td class="text-center">${movie.categories}</td>
  <td class="text-center">${movie.featured}</td>
  <td class="text-center">${movie.recomended}</td>
  <td class="text-center fs-6 fst-italic">${movie.description}</td>
  <td class="fs-6 fst-italic">${movie.urlVideo}</td>
  <td class="fs-6 fst-italic">${movie.urlImage}</td>
  <td class="text-center mt-2">
  <button class="btn mb-2" onclick="deleteMovie(${movie.id})"><img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" height ="40" width="40" /></button>
  <button class="btn" data-bs-toggle="modal" data-bs-target="#edit-modal" onclick="editMovie(${movie.id})"><img src="https://cdn-icons.flaticon.com/png/512/6051/premium/6051882.png?token=exp=1657748128~hmac=13432ba8c8b7d503ae2fdbda6d5bbb06" height ="40" width="40" /></button>
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
