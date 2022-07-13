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
    new Movie(1,
      "The Prodigy",
      "Terror",
      "si",
      "si",
      "El 22 de agosto de 2010 en la zona rural de Ohio, el asesino en serie Edward Scarka es asesinado a tiros durante una redada policial en su granja. En el momento de la muerte de Edward, la pareja casada Sarah y John Blume dan a luz a su hijo, Miles, en Pennsylvania . Miles muestra extrema sabiduría e inteligencia desde una edad temprana, y comienza a hablar con fluidez incluso antes de que sea un niño pequeño.",
      "https://www.youtube.com/embed/HEeXv0x7a3s",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poster-peliculas-terror-2019-prodigy-1578395572.jpg?crop=1xw:1xh;center,top&resize=480:*"
    ),
    new Movie(2,
      "El Rito",
      "Terror",
      "no",
      "si",
      "Michael Kovak es un decepcionado seminarista de Estados Unidos que decide asistir a un curso de exorcismos en el Vaticano. Es allí donde su fe empezará a tambalearse al tiempo que se enfrenta a terribles fuerzas demoníacas y al lado más oscuro de sus creencias.",
      "https://www.youtube.com/embed/t5vA--Agb3U",
      "https://graffica.info/wp-content/uploads/2015/10/El-rito-20111.jpg"
    ),
    new Movie(3,
      "Tourist Trap",
      "Terror",
      "no",
      "si",
      "Un grupo de jóvenes turistas llegan a una casa en el medio del campo donde son recibidos por un viejo granjero. Sin embargo el aparentemente hospitalario buen hombre, es en realidad un psicópata que posee poderes telequinéticos",
      "https://www.youtube.com/embed/sDpxEdIxxg4",
      "https://i.pinimg.com/originals/53/95/be/5395be173f8f430e6c1933b3add99351.jpg"
    ),
    new Movie(4,
      "La casa del terror",
      "Terror",
      "no",
      "si",
      "En Halloween, seis amigos deciden entrar en una casa encantada que promete ofrecer una experiencia extrema a base de explotar sus miedos más profundos. La noche se volverá mortal cuando se den cuenta de que algunos monstruos son reales.",
      "https://www.youtube.com/embed/gtG1Y3_34ug",
      "https://img.aullidos.com/imagenes/caratulas/casa-terror-sp.jpg"
    ),
    new Movie(5,
      "Viernes 13",
      "Terror",
      "no",
      "no",
      "Wade (Jonathan Sadowski) les cuenta a sus amigos una historia de terror sobre un niño llamado Jason (Derek Mears), quien murió ahogado y ahora deambula por el bosque como un muerto en vida que castiga a los adolescentes irresponsables, pero nadie le cree. Esa noche, Jason aparece y asesina a los jóvenes.",
      "https://www.youtube.com/embed/gz3MkaQ85i0",
      "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/mejores-posters-cine-terror-miedo/friday-4-poster/137670541-1-esl-ES/Friday-4-Poster.jpg"
    ),
    new Movie(6,
      "IT",
      "Terror",
      "no",
      "no",
      "Cada 27 años aparece para secuestrar y matar niños. El grupo es atacado por el payaso, pero los niños consiguen huir. Los Perdedores llegan a la conclusión de que vive en la parte subterránea de una casa abandonada, el centro de la red de alcantarillado.",
      "https://www.youtube.com/embed/fP4BBZ76DGg",
      "http://www.paredro.com/wp-content/uploads/2016/10/te2.jpg"
    ),
    new Movie(7,
      "El exorcista",
      "Terror",
      "no",
      "si",
      "La cinta relata los fatídicos hechos de la posesión diabólica de Regan MacNeil, una niña de doce años de edad, y del exorcismo al que más tarde fue sometida. Blatty, el autor de la novela, explicó que el argumento se inspiró en un hecho verídico sobre el que empezó a trabajar cuando aún era estudiante universitario.",
      "https://www.youtube.com/embed/Q_Ytf1qGCTM",
      "https://media.diariopopular.com.ar/p/02b96fe61702d5a46d9410867c500e19/adjuntos/143/imagenes/005/499/0005499617/posters-hw-38_resultjpg.jpg"
    ),
    new Movie(8,
      "El renacido",
      "Drama",
      "si",
      "si",
      "Década de 1820. En una expedición al desconocido oeste norteamericano, todavía habitado por tribus indias, Hugh Glass (Leonardo DiCaprio), un trampero, explorador y cazador de pieles es brutalmente atacado por un gigante oso grizzly. El hombre resulta gravemente herido, y sus propios compañeros le dan por muerto.",
      "https://www.youtube.com/embed/a8HRA49kaok",
      "https://es.web.img3.acsta.net/pictures/15/11/04/17/06/413076.jpg"
    ),
    new Movie(9,
      "Titanic",
      "Drama",
      "no",
      "si",
      "La trama, una epopeya romántica,​​ relata la relación de Jack Dawson y Rose DeWitt Bukater, dos jóvenes que se conocen y se enamoran a bordo del transatlántico RMS Titanic en su viaje inaugural desde Southampton (Inglaterra) a Nueva York (Estados Unidos) en abril de 1912.",
      "https://www.youtube.com/embed/wMZuro21wtE",
      "https://i.pinimg.com/originals/fb/41/8e/fb418e89a9d058f1671d13f7a5afe6bd.jpg"
    ),
    new Movie(10,
      "El padrino",
      "Drama",
      "si",
      "si",
      "Vito Corleone, cabeza de la familia más importante de la Cosa Nostra de Nueva York celebra por todo lo alto la boda de su hija Connie, debiendo atender las peticiones que le hacen ese día, por lo que recibe las visitas entre otros de Bonasera, dueño de una funeraria que pide vengue la violación de su hija.",
      "https://www.youtube.com/embed/v72XprPxy3E",
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2017/11/20-mejores-peliculas-drama-historia-cine_4.jpg?itok=j2Sve7o0"
    ),
    new Movie(11,
      "Dark crimes",
      "Drama",
      "no",
      "no",
      "Tadek (Jim Carrey) es un detective que se dispone a resolver un crimen. Un hombre de negocios ha sido asesinado y su muerte coincide con un crimen que se describe en la reciente novela publicada por Kozlow (Marton Csokas).",
      "https://www.youtube.com/embed/NkMJPlenC3U",
      "https://i.pinimg.com/564x/d2/c0/23/d2c0237f24de29b449459598b68a06a0.jpg"
    ),
    new Movie(12,
      "Boyhood",
      "Drama",
      "no",
      "si",
      "BOYHOOD es la historia de Mason, desde que es un niño hasta que llega a la universidad, una historia llena de cambios: de ciudad de residencia, en la familia, de amistades,… “Un viaje íntimo y épico por la euforia de la niñez, los sísmicos cambios de una familia moderna y el paso del tiempo”3.",
      "https://www.youtube.com/embed/fPCzKI8W5P8",
      "https://i.pinimg.com/originals/25/2f/90/252f9073ef3845843d122786d8d63086.jpg"
    ),
    new Movie(13,
      "No tengas miedo",
      "Drama",
      "no",
      "si",
      "Silvia es una joven de 25 años marcada por un oscuro pasado de abuso sexual infantil por parte de su entorno familiar. En la película se retratan de una manera muy dura las distintas etapas de la vida de Silvia desde su infancia hasta su juventud.",
      "https://www.youtube.com/embed/NySWdWYZWwY",
      "http://www.elseptimoarte.net/carteles/no_tengas_miedo_8434.jpg"
    ),
    new Movie(14,
      "Un espía y medio",
      "Comedia",
      "si",
      "si",
      "Un espía y medio cuenta la historia de un letal agente de la CIA (Johnson) con un pasado friki y víctima del acoso escolar, que vuelve a casa para asistir a una reunión de compañeros de instituto.",
      "https://www.youtube.com/embed/eQnbwxzCzQ8",
      "https://es.web.img2.acsta.net/pictures/16/05/31/13/33/072749.jpg"
    ),
    new Movie(15,
      "Delivery man",
      "Comedia",
      "no",
      "no",
      "David Wozniak es un repartidor desafortunado para la carnicería de su familia, perseguidos por matones a quien le debe $ 80.000. Su novia Emma está embarazada de su hijo. Un día, David regresa del trabajo para encontrar un abogado en representación de un banco de esperma (donde dio 693 donaciones y obtuvo una suma de $ 24.255 durante sus años de estudiante), quien le dice que él era el padre de 533 hijos. De ellos, 142 se han unido a una acción de clase demanda para obligar a la clínica de fertilidad para revelar la identidad de 'Starbuck', el alias que había usado.",
      "https://www.youtube.com/embed/yGAktL45XNQ",
      "http://img5.allocine.fr/acmedia/medias/nmedia/19/00/03/09/20625190.jpg"
    ),
    new Movie(16,
      "Free guy",
      "Comedia",
      "no",
      "no",
      "La película está protagonizada por Ryan Reynolds en el papel de un cajero de banco que descubre que en realidad es un personaje no jugador en un videojuego de mundo abierto y decide convertirse en el héroe de la historia y salvar a sus amigos de ser eliminados por el creador del juego.",
      "https://www.youtube.com/embed/tZbNDmRGx_M",
      "https://www.nacionrex.com/__export/1637002266150/sites/debate/img/2021/11/15/peliculas-de-comedia-2021-free-guy.jpg_486653160.jpg"
    ),
    new Movie(17,
      "Noche de juegos",
      "Comedia",
      "no",
      "si",
      "La película está protagonizada por Ryan Reynolds en el papel de un cajero de banco que descubre que en realidad es un personaje no jugador en un videojuego de mundo abierto y decide convertirse en el héroe de la historia y salvar a sus amigos de ser eliminados por el creador del juego.",
      "https://www.youtube.com/embed/oDcq4GBOaTg",
      "https://imagenes.gatotv.com/categorias/peliculas/posters/noche_de_juegos.jpg"
    ),
    new Movie(18,
      "Garra",
      "Comedia",
      "no",
      "no",
      "Stanley Sugerman es un cazatalentos internacional envejecido de los Los del 76 de Filadelfia Philadelphia 76ers de la Asociación Nacional de Baloncesto, que vive la vida en la carretera en busca de futuras estrellas. Sus frecuentes viajes afectan a su esposa Teresa y su hija Alex.",
      "https://www.youtube.com/embed/lvRWUIUoaqU",
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/05/poster-garra-2698329.jpg?itok=ekUigtuq"
    ),
    new Movie(19,
      "...¿Y dónde estan las rubias?",
      "Comedia",
      "si",
      "si",
      "Dónde están la rubias comienza en una tienda donde dos agentes y hermanos del FBI, Kevin Copeland y Marcus Copeland intentan capturar a miembros de una organización que vende drogas dentro de cajas de helado, haciéndose pasar por oficinistas dominicanos.",
      "https://www.youtube.com/embed/5_uNOf-abIQ",
      "https://i.pinimg.com/originals/4d/56/19/4d5619d46fde30d04f7f456f1f9dc87d.jpg"
    ),
    new Movie(20,
      "Jackass, la película",
      "Comedia",
      "no",
      "si",
      "Johnny Knoxville y sus compañeros bromistas pasean por Japón vestidos de pandas, causan estragos en campos de golf, hacen proezas con caimanes, y más. Ve todo lo que quieras. La primera de las películas inspiradas en la serie de MTV protagonizada por Johnny Knoxville, Steve-O y amigos.",
      "https://www.youtube.com/embed/qynjN9xPh7Q",
      "https://es.web.img2.acsta.net/pictures/14/07/24/10/14/072574.jpg"
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
      src="${movie.urlVideo}?controls=0"
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
