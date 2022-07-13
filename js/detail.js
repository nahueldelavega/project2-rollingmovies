//!  Traemos el hash y el id con la propiedad location.hash, y despues le cortamos el hash con el slice porque no nos sirve. Nos queda como resultado el id del producto
let idMovie = window.location.hash.slice(1);
console.log("Soy el idMovie", idMovie);
//! Traigo las peliculas de LS
let moviesBase = JSON.parse(localStorage.getItem("moviesBase"));
//! Con el id, lo busco
let moviet = moviesBase.find((movie) => movie.id == idMovie);
console.log(moviet);
//! Novela de creacion de elemento, decirle que lleva adentro y llamar al padre para que lo adopte

let movie = document.getElementById("movie");
console.log(movie);

console.log(moviesBase);

function completeMovie() {
  let title = document.createElement("h1");
  title.classList.add("d-flex", "justify-content-center", "my-3", "text-black");
  title.innerHTML = `${moviesBase[idMovie - 1].name}`;

  let cover = document.createElement("img");
  cover.classList.add(
    "d-flex",
    "justify-content-center",
    "m-auto",
    "rounded-2",
    "movieDetail",
    "mb-3"
  );
  cover.setAttribute("src", `${moviesBase[idMovie - 1].urlImage}`);

  let video = document.createElement("div");
  video.classList.add(
    "videoDetail",
    "d-flex",
    "justify-content-center",
    "m-auto"
  );
  video.innerHTML = `<iframe class="embed-responsive-item" src="${moviesBase[idMovie - 1].urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  let descriptionTitle = document.createElement("h2");
  descriptionTitle.classList.add(
    "d-flex",
    "justify-content-center",
    "my-3",
    "text-black"
  );
  descriptionTitle.innerHTML = `Descripción`;

  let description = document.createElement("p");
  description.classList.add(
    "d-flex",
    "justify-content-center",
    "text-center",
    "m-auto",
    "mb-5",
    "fs-6",
    "text-black"
  );
  description.innerHTML = `${moviesBase[idMovie - 1].description}`;

  let button = document.createElement("form");
  button.classList.add("d-flex", "justify-content-center", "m-auto", "my-3");
  button.setAttribute("action", "/error404.html");
  button.innerHTML = `
    <button id="button" class"text-white" type="submit">Reproducir</button>`;

  movie.appendChild(title);
  movie.appendChild(cover);
  movie.appendChild(video);
  movie.appendChild(descriptionTitle);
  movie.appendChild(description);
  movie.appendChild(button);
}

completeMovie();

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
<a class="nav-link" href="/admin.html">Administración</a>`;
  adminButton.classList.add("d-flex", "justify-content-end");
  document.getElementById("options-header").appendChild(adminButton);
}
