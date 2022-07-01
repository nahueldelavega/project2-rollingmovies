if (!localStorage.getItem('userLogged')){
    window.location.assign(window.location.origin)
}

class Movie{
    constructor(id,name, urlVideo, urlImage){
        this.id = id;
        this.name = name;
        this.urlVideo = urlVideo;
        this.urlImage = urlImage;
      }
}

//! Base de peliculas

let moviesBase = [
    new Movie(1,'Movie1','https://www.youtube.com/watch?v=jYRtFFa4hT8','https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80'),
    new Movie(2,'Movie2','https://www.youtube.com/watch?v=jYRtFFa4hT8','https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
    new Movie(3,'Movie3','https://www.youtube.com/watch?v=jYRtFFa4hT8','https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'),
    ]

localStorage.setItem('moviesBase',JSON.stringify(moviesBase))

let moviesTable = JSON.parse(localStorage.getItem('movies'))



let carouselItem = document.getElementsByClassName("carousel-item")



let recommendedCarouselMovies = document.getElementById("recommendedCarouselMovies") // Llamo al div padre del corrousel

let divRecommendedCarouselMovies = document.querySelectorAll(".divRecommendedMovies") // Llamo al div que contiene las peliculas

if(divRecommendedCarouselMovies.length === 0){
    let moviesPost = document.createElement('div')
    moviesPost.classList.add("divRecommendedMovies")
    moviesPost.innerHTML=`
    <div class="row justify-content-start d-sm-flex flex-md-nowrap justify-content-sm-between">
        <img src="testImage.jpg" class="movieImage col-6 col-md-2 mb-2" alt="..." />
        <img src="testImage.jpg" class="movieImage col-6 col-md-2 mb-2" alt="..." />
        <img src="testImage.jpg" class="movieImage col-6 col-md-2 mb-2" alt="..." />
        <img src="testImage.jpg" class="movieImage col-6 col-md-2 mb-2" alt="..." />
        <img src="testImage.jpg" class="movieImage col-6 col-md-2 mb-2" alt="..." />
        <img src="testImage.jpg" class="movieImage col-6 col-md-2 mb-2" alt="..." />
    </div>`
    recommendedCarouselMovies.appendChild(moviesPost)
}

//? Crear post de película
// moviesBase.forEach(movies=>{
       
// //* Aca tengo que agregar el detailPage

// })



console.log(recommendedCarouselMovies.length)
console.log(divRecommendedCarouselMovies.length)

// IDENTIFICAMOS SI EL USUARIO ES ADMIN O NO
let userId = localStorage.getItem('user');
console.log(userId);
let users = JSON.parse(localStorage.getItem('users'));
console.log(users);
let userActive = users.find(user=>user.id==userId);
console.log(userActive);
if(userActive.admin){
  let adminButton = document.createElement('li');
  adminButton.classList.add('nav-item');
  adminButton.innerHTML=`
  <a class="nav-link" href="http://127.0.0.1:5500/admin.html">Administración</a>
  `;
  document.getElementById('options-header').appendChild(adminButton)
}