if (!localStorage.getItem("userLogged")) {
  window.location.assign(window.location.origin);
}

class Movie {
  constructor(
    id,
    name,
    categories,
    featured,
    recomended,
    description,
    urlVideo,
    urlImage
  ) {
    this.id = id;
    this.name = name;
    this.categories = categories;
    this.featured = featured;
    this.recomended = recomended;
    this.description = description;
    this.urlVideo = urlVideo;
    this.urlImage = urlImage;
  }
}

let moviesBase;
let moviesFromLS = JSON.parse(localStorage.getItem("moviesBase"));
console.log("Array de movies",moviesFromLS)

if (moviesFromLS) {
  moviesBase = moviesFromLS;
} else {
  moviesBase = [
    new Movie(
      1,
      "Movie1",
      "Terror",
      "si",
      "si",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque arcu dolor. Cras ut ipsum sagittis, viverra erat in, maximus leo. Aenean fringilla ligula vel tincidunt pharetra. Vivamus accumsan egestas tortor sed tincidunt. Suspendisse eu felis et ipsum viverra elementum eu porta mi. Cras sem ante, sollicitudin ac ante at, accumsan faucibus nisl. Fusce commodo eu eros sit amet molestie. Mauris at aliquet magna. Morbi tincidunt faucibus efficitur. Donec interdum neque neque, sit amet gravida lacus pharetra finibus. Morbi a convallis massa. Quisque finibus mauris quis urna elementum porttitor. Integer commodo dui dolor, eu viverra est sagittis quis. Phasellus elementum pretium aliquam. Duis rutrum magna sem. Ut a tristique ex.",
      "https://www.youtube.com/watch?v=jYRtFFa4hT8",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80"
    ),
    new Movie(
      2,
      "Movie2",
      "Drama",
      "si",
      "si",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque arcu dolor. Cras ut ipsum sagittis, viverra erat in, maximus leo. Aenean fringilla ligula vel tincidunt pharetra. Vivamus accumsan egestas tortor sed tincidunt. Suspendisse eu felis et ipsum viverra elementum eu porta mi. Cras sem ante, sollicitudin ac ante at, accumsan faucibus nisl. Fusce commodo eu eros sit amet molestie. Mauris at aliquet magna. Morbi tincidunt faucibus efficitur. Donec interdum neque neque, sit amet gravida lacus pharetra finibus. Morbi a convallis massa. Quisque finibus mauris quis urna elementum porttitor. Integer commodo dui dolor, eu viverra est sagittis quis. Phasellus elementum pretium aliquam. Duis rutrum magna sem. Ut a tristique ex.",
      "https://www.youtube.com/watch?v=jYRtFFa4hT8",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ),
    new Movie(
      3,
      "Movie3",
      "Comedia",
      "no",
      "no",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque arcu dolor. Cras ut ipsum sagittis, viverra erat in, maximus leo. Aenean fringilla ligula vel tincidunt pharetra. Vivamus accumsan egestas tortor sed tincidunt. Suspendisse eu felis et ipsum viverra elementum eu porta mi. Cras sem ante, sollicitudin ac ante at, accumsan faucibus nisl. Fusce commodo eu eros sit amet molestie. Mauris at aliquet magna. Morbi tincidunt faucibus efficitur. Donec interdum neque neque, sit amet gravida lacus pharetra finibus. Morbi a convallis massa. Quisque finibus mauris quis urna elementum porttitor. Integer commodo dui dolor, eu viverra est sagittis quis. Phasellus elementum pretium aliquam. Duis rutrum magna sem. Ut a tristique ex.",
      "https://www.youtube.com/watch?v=jYRtFFa4hT8",
      "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ),
    new Movie(
      4,
      "Movie3",
      "Comedia",
      "no",
      "si",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque arcu dolor. Cras ut ipsum sagittis, viverra erat in, maximus leo. Aenean fringilla ligula vel tincidunt pharetra. Vivamus accumsan egestas tortor sed tincidunt. Suspendisse eu felis et ipsum viverra elementum eu porta mi. Cras sem ante, sollicitudin ac ante at, accumsan faucibus nisl. Fusce commodo eu eros sit amet molestie. Mauris at aliquet magna. Morbi tincidunt faucibus efficitur. Donec interdum neque neque, sit amet gravida lacus pharetra finibus. Morbi a convallis massa. Quisque finibus mauris quis urna elementum porttitor. Integer commodo dui dolor, eu viverra est sagittis quis. Phasellus elementum pretium aliquam. Duis rutrum magna sem. Ut a tristique ex.",
      "https://www.youtube.com/watch?v=jYRtFFa4hT8",
      "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ),
    new Movie(
      5,
      "Movie3",
      "Comedia",
      "no",
      "si",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque arcu dolor. Cras ut ipsum sagittis, viverra erat in, maximus leo. Aenean fringilla ligula vel tincidunt pharetra. Vivamus accumsan egestas tortor sed tincidunt. Suspendisse eu felis et ipsum viverra elementum eu porta mi. Cras sem ante, sollicitudin ac ante at, accumsan faucibus nisl. Fusce commodo eu eros sit amet molestie. Mauris at aliquet magna. Morbi tincidunt faucibus efficitur. Donec interdum neque neque, sit amet gravida lacus pharetra finibus. Morbi a convallis massa. Quisque finibus mauris quis urna elementum porttitor. Integer commodo dui dolor, eu viverra est sagittis quis. Phasellus elementum pretium aliquam. Duis rutrum magna sem. Ut a tristique ex.",
      "https://www.youtube.com/watch?v=jYRtFFa4hT8",
      "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ),
    new Movie(
      6,
      "Movie3",
      "Comedia",
      "no",
      "si",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque arcu dolor. Cras ut ipsum sagittis, viverra erat in, maximus leo. Aenean fringilla ligula vel tincidunt pharetra. Vivamus accumsan egestas tortor sed tincidunt. Suspendisse eu felis et ipsum viverra elementum eu porta mi. Cras sem ante, sollicitudin ac ante at, accumsan faucibus nisl. Fusce commodo eu eros sit amet molestie. Mauris at aliquet magna. Morbi tincidunt faucibus efficitur. Donec interdum neque neque, sit amet gravida lacus pharetra finibus. Morbi a convallis massa. Quisque finibus mauris quis urna elementum porttitor. Integer commodo dui dolor, eu viverra est sagittis quis. Phasellus elementum pretium aliquam. Duis rutrum magna sem. Ut a tristique ex.",
      "https://www.youtube.com/watch?v=jYRtFFa4hT8",
      "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ),
    new Movie(
      7,
      "Movie3",
      "Comedia",
      "no",
      "si",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque arcu dolor. Cras ut ipsum sagittis, viverra erat in, maximus leo. Aenean fringilla ligula vel tincidunt pharetra. Vivamus accumsan egestas tortor sed tincidunt. Suspendisse eu felis et ipsum viverra elementum eu porta mi. Cras sem ante, sollicitudin ac ante at, accumsan faucibus nisl. Fusce commodo eu eros sit amet molestie. Mauris at aliquet magna. Morbi tincidunt faucibus efficitur. Donec interdum neque neque, sit amet gravida lacus pharetra finibus. Morbi a convallis massa. Quisque finibus mauris quis urna elementum porttitor. Integer commodo dui dolor, eu viverra est sagittis quis. Phasellus elementum pretium aliquam. Duis rutrum magna sem. Ut a tristique ex.",
      "https://www.youtube.com/watch?v=jYRtFFa4hT8",
      "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ),
    new Movie(
      8,
      "Movie3",
      "Comedia",
      "no",
      "si",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque arcu dolor. Cras ut ipsum sagittis, viverra erat in, maximus leo. Aenean fringilla ligula vel tincidunt pharetra. Vivamus accumsan egestas tortor sed tincidunt. Suspendisse eu felis et ipsum viverra elementum eu porta mi. Cras sem ante, sollicitudin ac ante at, accumsan faucibus nisl. Fusce commodo eu eros sit amet molestie. Mauris at aliquet magna. Morbi tincidunt faucibus efficitur. Donec interdum neque neque, sit amet gravida lacus pharetra finibus. Morbi a convallis massa. Quisque finibus mauris quis urna elementum porttitor. Integer commodo dui dolor, eu viverra est sagittis quis. Phasellus elementum pretium aliquam. Duis rutrum magna sem. Ut a tristique ex.",
      "https://www.youtube.com/watch?v=jYRtFFa4hT8",
      "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ),
    new Movie(
      9,
      "Movie3",
      "Comedia",
      "no",
      "no",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque arcu dolor. Cras ut ipsum sagittis, viverra erat in, maximus leo. Aenean fringilla ligula vel tincidunt pharetra. Vivamus accumsan egestas tortor sed tincidunt. Suspendisse eu felis et ipsum viverra elementum eu porta mi. Cras sem ante, sollicitudin ac ante at, accumsan faucibus nisl. Fusce commodo eu eros sit amet molestie. Mauris at aliquet magna. Morbi tincidunt faucibus efficitur. Donec interdum neque neque, sit amet gravida lacus pharetra finibus. Morbi a convallis massa. Quisque finibus mauris quis urna elementum porttitor. Integer commodo dui dolor, eu viverra est sagittis quis. Phasellus elementum pretium aliquam. Duis rutrum magna sem. Ut a tristique ex.",
      "https://www.youtube.com/watch?v=jYRtFFa4hT8",
      "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ),
    new Movie(
      10,
      "Movie3",
      "Comedia",
      "si",
      "si",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque arcu dolor. Cras ut ipsum sagittis, viverra erat in, maximus leo. Aenean fringilla ligula vel tincidunt pharetra. Vivamus accumsan egestas tortor sed tincidunt. Suspendisse eu felis et ipsum viverra elementum eu porta mi. Cras sem ante, sollicitudin ac ante at, accumsan faucibus nisl. Fusce commodo eu eros sit amet molestie. Mauris at aliquet magna. Morbi tincidunt faucibus efficitur. Donec interdum neque neque, sit amet gravida lacus pharetra finibus. Morbi a convallis massa. Quisque finibus mauris quis urna elementum porttitor. Integer commodo dui dolor, eu viverra est sagittis quis. Phasellus elementum pretium aliquam. Duis rutrum magna sem. Ut a tristique ex.",
      "https://www.youtube.com/watch?v=jYRtFFa4hT8",
      "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ),
    new Movie(
      11,
      "Movie3",
      "Comedia",
      "no",
      "no",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque arcu dolor. Cras ut ipsum sagittis, viverra erat in, maximus leo. Aenean fringilla ligula vel tincidunt pharetra. Vivamus accumsan egestas tortor sed tincidunt. Suspendisse eu felis et ipsum viverra elementum eu porta mi. Cras sem ante, sollicitudin ac ante at, accumsan faucibus nisl. Fusce commodo eu eros sit amet molestie. Mauris at aliquet magna. Morbi tincidunt faucibus efficitur. Donec interdum neque neque, sit amet gravida lacus pharetra finibus. Morbi a convallis massa. Quisque finibus mauris quis urna elementum porttitor. Integer commodo dui dolor, eu viverra est sagittis quis. Phasellus elementum pretium aliquam. Duis rutrum magna sem. Ut a tristique ex.",
      "https://www.youtube.com/watch?v=jYRtFFa4hT8",
      "https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ),
  ];
  localStorage.setItem("moviesBase", JSON.stringify(moviesBase));
}

moviesFromLS = JSON.parse(localStorage.getItem("moviesBase"))
console.log(moviesFromLS)

//* Creacion dinamica de destacadas

let carouselDestacadas = document.getElementById("carouselDestacadas");
let carouselInnerCreate = document.createElement("div");
carouselInnerCreate.classList.add("carousel-inner");
carouselInnerCreate.innerHTML = `<button class="carousel-control-prev" type="button" data-bs-target="#carouselDestacadas" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselDestacadas" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
`;
carouselDestacadas.appendChild(carouselInnerCreate);
let carouselInner = document.querySelector(".carousel-inner");

moviesFromLS.forEach((movie) => {
  if (movie.featured === "si") {
    let active = document.createElement("div");
    active.classList.add("carousel-item");
    active.innerHTML = `<div class="card text-white mt-0">
  <!-- <img src="${movie.urlImage}" class="d-block w-100 mainImage" alt="..." /> -->
  <iframe
      src="${movie.urlVideo}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen class = "w-100 mainImage"
    ></iframe>
  <div class="card-img-overlay card-carousel-movie d-flex flex-column m-lg-auto ">
    <div class="my-auto overflow-auto d-flex flex-column align-items-start mb-0">
      <h5 class="card-title">${movie.name}</h5>
      <button type="button" class="btn-play my-3" onclick="window.location.assign(window.location.origin+'/error404.html')">Reproducir</button>
      <p class="card-text fs-7 text-description">${movie.description}
      </p>
    </div>
  </div>
</div>`;
    carouselInner.appendChild(active);
    let carouselItem = document.querySelectorAll(".carousel-item");
    carouselItem[0].classList.add("active");
  }
});

//* Creación dinamica de categorías y películas

let categories = ["Recomendadas", "Comedia", "Drama", "Terror"];
// console.log(categories);

let moviesCategories = document.getElementById("categories");
console.log(moviesCategories);

for (let i = 0; i < categories.length; i++) {
  let catTitle = document.createElement("h3");
  let carousel = document.createElement("div");
  catTitle.innerHTML = categories[i];
  catTitle.style.marginLeft = "20px";
  carousel.id = categories[i];
  carousel.innerHTML = `
  <div class="d-flex carousel-${categories[i]}">
  </div>
  `;
  carousel.classList.add(
    "d-flex",
    "align-items-center",
    "lista-imagenes",
    "mt-0"
  );
  catTitle.classList.add("color6", "commontexts", "mb-0");
  moviesCategories.appendChild(catTitle);
  moviesCategories.appendChild(carousel);
}
let pelicula = document.getElementById("Comedia").offsetWidth;

let com = document.querySelector(".carousel-Comedia");
let dra = document.querySelector(".carousel-Drama");
let ter = document.querySelector(".carousel-Terror");
let rec = document.querySelector(".carousel-Recomendadas");

console.log(rec);

//? Llenar de peliculas
for (let j = 0; j < moviesFromLS.length; j++) {
  console.log(moviesFromLS[j].recomended);
  if (moviesFromLS[j].recomended === "si") {
    //! STEP 1: CREAR EL ELEMENTO
    let movie = document.createElement("a");
    movie.href = window.location.origin + "/detail.html#" + moviesFromLS[j].id;
    //! STEP 2: DECIRLE AL ELEMENTO QUE LLEVA ADENTRO
    //? productCard.id hace referencia al id del div que estamos creando, y product.id hace referencia al id de cada producto que se encuentra en el array
    movie.id = moviesFromLS[j].id;
    movie.classList.add("card", "my-3", "me-2");
    movie.style.width = "18rem";
    movie.innerHTML = `
  <img src=${moviesFromLS[j].urlImage} class="movieImage card-img-top customize-image" alt=${moviesFromLS[j].name}>
  <!-- <div class="card-body p-2">
    <h5 class="card-title bg-transparent">${moviesFromLS[j].name}</h5>
  </div> -->
  `;
    rec.appendChild(movie);
  }
  if (moviesFromLS[j].categories === "Comedia") {
    // let movieFilm = document.createElement("img");
    // movieFilm.classList.add("movieImage", "mx-2", "mb-2");
    // movieFilm.setAttribute("src", `${moviesFromLS[j].urlImage}`);

    //! STEP 1: CREAR EL ELEMENTO
    let movie = document.createElement("a");
    movie.href = window.location.origin + "/detail.html#" + moviesFromLS[j].id;
    //! STEP 2: DECIRLE AL ELEMENTO QUE LLEVA ADENTRO
    //? productCard.id hace referencia al id del div que estamos creando, y product.id hace referencia al id de cada producto que se encuentra en el array
    movie.id = moviesFromLS[j].id;
    movie.classList.add("card", "my-3", "me-2");
    movie.style.width = "18rem";
    movie.innerHTML = `
<img src=${moviesFromLS[j].urlImage} class="movieImage card-img-top customize-image" alt=${moviesFromLS[j].name}>
<!-- <div class="card-body p-2">
<h5 class="card-title bg-transparent">${moviesFromLS[j].name}</h5>
</div> -->
`;

    com.appendChild(movie);
  }
  if (moviesFromLS[j].categories === "Drama") {
    //! STEP 1: CREAR EL ELEMENTO
    let movie = document.createElement("a");
    movie.href = window.location.origin + "/detail.html#" + moviesFromLS[j].id;
    //! STEP 2: DECIRLE AL ELEMENTO QUE LLEVA ADENTRO
    //? productCard.id hace referencia al id del div que estamos creando, y product.id hace referencia al id de cada producto que se encuentra en el array
    movie.id = moviesFromLS[j].id;
    movie.classList.add("card", "my-3", "me-2");
    movie.style.width = "18rem";
    movie.innerHTML = `
<img src=${moviesFromLS[j].urlImage} class="movieImage card-img-top customize-image" alt=${moviesFromLS[j].name}>
<!-- <div class="card-body p-2">
<h5 class="card-title bg-transparent">${moviesFromLS[j].name}</h5>
</div> -->
`;

    dra.appendChild(movie);
  }
  if (moviesFromLS[j].categories === "Terror") {
   //! STEP 1: CREAR EL ELEMENTO
   let movie = document.createElement("a");
   movie.href = window.location.origin + "/detail.html#" + moviesFromLS[j].id;
   //! STEP 2: DECIRLE AL ELEMENTO QUE LLEVA ADENTRO
   //? productCard.id hace referencia al id del div que estamos creando, y product.id hace referencia al id de cada producto que se encuentra en el array
   movie.id = moviesFromLS[j].id;
   movie.classList.add("card", "my-3", "me-2");
   movie.style.width = "18rem";
   movie.innerHTML = `
<img src=${moviesFromLS[j].urlImage} class="movieImage card-img-top customize-image" alt=${moviesFromLS[j].name}>
<!-- <div class="card-body p-2">
<h5 class="card-title bg-transparent">${moviesFromLS[j].name}</h5>
</div> -->
`;

    ter.appendChild(movie);
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
<a class="nav-link" href="/admin.html">Administración</a>`;
  adminButton.classList.add("d-flex", "justify-content-end");
  document.getElementById("options-header").appendChild(adminButton);
}
