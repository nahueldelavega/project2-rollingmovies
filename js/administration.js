
//! cRud
let moviesFromLS = JSON.parse(localStorage.getItem('moviesBase'));
console.log(moviesFromLS);
moviesFromLS.forEach(movie=>{
  let movieRow = document.createElement('tr');
  // movieRow.classList.add('table-link-image','table-link-video');
  movieRow.innerHTML=`
  <td>${movie.id}</td>
  <td>${movie.name}</td>
  <td><img class="table-link-video" src=${movie.video}></td>
  <td><img class="table-link-image" src=${movie.urlImage}></td>
  <td>
  <button class="btn btn-secondary" onclick="deleteMovie(${movie.id})">🚮</button>
  <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#edit-modal" onclick="fillValues(${movie.id})">🖊️</button>
  </td>
  `;
  document.querySelector('tbody').appendChild(movieRow);
})

  //! Crud
  
  function addMovie(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const video = document.getElementById('url-video').value;
    const image = document.getElementById('url-image').value;
    let moviesFromLS = JSON.parse(localStorage.getItem('moviesBase'));
    const newMovie = new Movie (moviesFromLS.length + 1,name,video,image);
    moviesFromLS.push(newMovie);
    localStorage.setItem('moviesBase',JSON.stringify(moviesFromLS));
    window.location.reload();
  }
