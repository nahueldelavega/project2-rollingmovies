if (!localStorage.getItem("userLogged")) {
  window.location.assign(window.location.origin);
}
class Movie {
  constructor(id, name, categories, recomended, urlVideo, urlImage) {
    this.id = id;
    this.name = name;
    this.categories = categories;
    this.recomended = recomended;
    this.urlVideo = urlVideo;
    this.urlImage = urlImage;
  }
}

// let moviesBase = [
//   new Movie(
//     1,
//     "Movie1",
//     "Terror",
//     "si",
//     "https://www.youtube.com/watch?v=jYRtFFa4hT8",
//     "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80"
//   ),
//   new Movie(
//     2,
//     "Movie2",
//     "Drama",
//     "si",
//     "https://www.youtube.com/watch?v=jYRtFFa4hT8",
//     "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//   ),
//   new Movie(
//     3,
//     "Movie3",
//     "Comedia",
//     "no",
//     "https://www.youtube.com/watch?v=jYRtFFa4hT8",
//     "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
//   ),
//   new Movie(
//     4,
//     "Movie3",
//     "Comedia",
//     "si",
//     "https://www.youtube.com/watch?v=jYRtFFa4hT8",
//     "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
//   ),
//   new Movie(
//     5,
//     "Movie3",
//     "Comedia",
//     "si",
//     "https://www.youtube.com/watch?v=jYRtFFa4hT8",
//     "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
//   ),
//   new Movie(
//     6,
//     "Movie3",
//     "Comedia",
//     "si",
//     "https://www.youtube.com/watch?v=jYRtFFa4hT8",
//     "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
//   ),
//   new Movie(
//     7,
//     "Movie3",
//     "Comedia",
//     "si",
//     "https://www.youtube.com/watch?v=jYRtFFa4hT8",
//     "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
//   ),
//   new Movie(
//     8,
//     "Movie3",
//     "Comedia",
//     "si",
//     "https://www.youtube.com/watch?v=jYRtFFa4hT8",
//     "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
//   ),
//   new Movie(
//     9,
//     "Movie3",
//     "Comedia",
//     "no",
//     "https://www.youtube.com/watch?v=jYRtFFa4hT8",
//     "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
//   ),
//   new Movie(
//     10,
//     "Movie3",
//     "Comedia",
//     "si",
//     "https://www.youtube.com/watch?v=jYRtFFa4hT8",
//     "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
//   ),
//   new Movie(
//     11,
//     "Movie3",
//     "Comedia",
//     "no",
//     "https://www.youtube.com/watch?v=jYRtFFa4hT8",
//     "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
//   ),
// ];

// localStorage.setItem("moviesBase", JSON.stringify(moviesFromLS));

//! cRud
let moviesFromLS = JSON.parse(localStorage.getItem("moviesBase"));
console.log(moviesFromLS);
moviesFromLS.forEach((movie) => {
  let movieRow = document.createElement("tr");
  // movieRow.classList.add('table-link-image','table-link-video');
  movieRow.innerHTML = `
    <th scope="row">${movie.id}</th>
    <td>${movie.name}</td>
    <td>${movie.categories}</td>
    <td>${movie.recomended}</td>
    <td><img class="table-link-video" src=${movie.urlVideo}></td>
    <td><img class="table-link-image" src=${movie.urlImage}></td>
    <td>
    <button class="btn btn-secondary" onclick="deleteMovie(${movie.id})">:la_basura_en_su_lugar:</button>
    <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#edit-modal" onclick="fillValues(${movie.id})">:bolígrafo_abajo_a_la_izquierda:</button>
    </td>
    `;
  document.querySelector("tbody").appendChild(movieRow);
});
//! Crud
function addMovie() {
  // event.preventDefault();
  const name = document.getElementById("name").value;
  const video = document.getElementById("url-video").value;
  const image = document.getElementById("url-image").value;
  const category = document.getElementById("category").value;
  const recomended = document.getElementById("recomended").value;
  // console.log(name);
  // console.log(video);
  // console.log(image);
  let moviesFromLS = JSON.parse(localStorage.getItem("moviesBase"));
  const newMovie = new Movie(
    moviesFromLS.length + 1,
    name,
    category,
    recomended,
    video,
    image
  );
  moviesFromLS.push(newMovie);
  localStorage.setItem("moviesBase", JSON.stringify(moviesFromLS));
  // window.location.reload();
}

// IDENTIFICAMOS SI EL USUARIO ES ADMIN O NO
let userId = localStorage.getItem("user");
// console.log(userId);
let users = JSON.parse(localStorage.getItem("users"));
users = JSON.parse(localStorage.getItem("users"));
// console.log(users);
let userActive = users.find((user) => user.id == userId);
// console.log(userActive);
if (userActive.admin) {
  let adminButton = document.createElement("li");
  adminButton.classList.add("nav-item");
  adminButton.innerHTML = `
<a class="nav-link" href="http://127.0.0.1:5500/admin.html">Administración</a>`;
  document.getElementById("options-header").appendChild(adminButton);
}