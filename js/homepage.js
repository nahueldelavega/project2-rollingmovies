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

//* document.getElementById("Comedia").scrollLeft

//! Base de peliculas

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

localStorage.setItem("moviesBase", JSON.stringify(moviesBase));

// let moviesTable = JSON.parse(localStorage.getItem("movies"));
// let carouselItem = document.getElementsByClassName("carousel-item");

// ! hacer un array dentro de otro array

//* Creación dinamica de pcategorías y películas

let categories = ["Recomendadas", "Comedia", "Drama", "Terror"];
console.log(categories);

let moviesCategories = document.getElementById("categories");
console.log(moviesCategories);

for (let i = 0; i < categories.length; i++) {
  let catTitle = document.createElement("h3");
  let carousel = document.createElement("div");
  let buttonLeft = document.createElement("button");
  let buttonRight = document.createElement("button");
  catTitle.innerHTML = categories[i];
  catTitle.classList.add("lista-imagenes", "mt-3", "mb-1");
  carousel.id = categories[i];
  carousel.classList.add(
    "lista-imagenes",
    `carousel-${categories[i]}`,
    "d-sm-flex",
    "carouselContainer",
  );
  buttonLeft.classList.add("lh-sm", "buttonLeft");
  buttonRight.classList.add("lh-sm", "buttonRight");
  // let fila = 
   
  // let left = document.getElementsByClassName("buttonLeft")
  buttonRight.addEventListener("click", () => {
    // fila.scrollLeft += pelicula.offsetWidth
    document.querySelector(`.carousel-${categories[i]}`).scrollLeft += 150 //*document.getElementById(`${categories[i]}`).offsetWidth
    
  });
  buttonLeft.addEventListener("click", () => {
    // fila.scrollLeft += pelicula.offsetWidth
    document.querySelector(`.carousel-${categories[i]}`).scrollLeft-- //*document.getElementById(`${categories[i]}`).offsetWidth
    
  });
  buttonLeft.innerHTML = `<`;
  buttonRight.innerHTML = `>`;

  moviesCategories.appendChild(catTitle);
  moviesCategories.appendChild(carousel);
  carousel.appendChild(buttonLeft);
  carousel.appendChild(buttonRight);
  // moviesCategories.appendChild(buttonRigth);
}
let pelicula = document.getElementById("Comedia").offsetWidth
console.log(pelicula)

let com = document.querySelector(".carousel-Comedia");
let dra = document.querySelector(".carousel-Drama");
let ter = document.querySelector(".carousel-Terror");
let rec = document.querySelector(".carousel-Recomendadas");

console.log(com);
console.log(dra);
console.log(ter);

//? Llenar de peliculas
for (let j = 0; j < moviesBase.length; j++) {
  console.log(moviesBase[j].recomended);
  if (moviesBase[j].recomended === "si") {
    let movieFilm = document.createElement("img");
    movieFilm.classList.add("movieImage", "mx-2", "mb-2");
    movieFilm.setAttribute("src", `${moviesBase[j].urlImage}`);

    rec.appendChild(movieFilm);
  }
  if (moviesBase[j].categories === "Comedia") {
    let movieFilm = document.createElement("img");
    movieFilm.classList.add("movieImage", "mx-2", "mb-2");
    movieFilm.setAttribute("src", `${moviesBase[j].urlImage}`);

    com.appendChild(movieFilm);
  }
  if (moviesBase[j].categories === "Drama") {
    let movieFilm = document.createElement("img");
    movieFilm.classList.add("movieImage", "mx-2", "mb-2");
    movieFilm.setAttribute("src", `${moviesBase[j].urlImage}`);

    dra.appendChild(movieFilm);
  }
  if (moviesBase[j].categories === "Terror") {
    let movieFilm = document.createElement("img");
    movieFilm.classList.add("movieImage", "mx-2", "mb-2");
    movieFilm.setAttribute("src", `${moviesBase[j].urlImage}`);

    ter.appendChild(movieFilm);
  }
}
let asd = document.querySelectorAll(".movieImage");
console.log(asd);

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
