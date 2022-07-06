if (!localStorage.getItem('userLogged')){
    window.location.assign(window.location.origin)
}

class Movie{
    constructor(id,name,categories, urlVideo, urlImage){
        this.id = id;
        this.name = name;
        this.categories = categories
        this.urlVideo = urlVideo;
        this.urlImage = urlImage;
      }
}

//! Base de peliculas

let moviesBase = [
    new Movie(1,'Movie1',"Terror",'https://www.youtube.com/watch?v=jYRtFFa4hT8','https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80'),
    new Movie(2,'Movie2',"Drama",'https://www.youtube.com/watch?v=jYRtFFa4hT8','https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
    new Movie(3,'Movie3',"Comedia",'https://www.youtube.com/watch?v=jYRtFFa4hT8','https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'),
    new Movie(3,'Movie3',"Comedia",'https://www.youtube.com/watch?v=jYRtFFa4hT8','https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'),
    new Movie(3,'Movie3',"Comedia",'https://www.youtube.com/watch?v=jYRtFFa4hT8','https://images.unsplash.com/photo-1534684686641-05569203ecca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'),
    ]

localStorage.setItem('moviesBase',JSON.stringify(moviesBase))

let moviesTable = JSON.parse(localStorage.getItem('movies'))



let carouselItem = document.getElementsByClassName("carousel-item")



let recommendedCarouselMovies = document.getElementById("recommendedCarouselMovies") // Llamo al div padre del corrousel

let divRecommendedCarouselMovies = document.querySelectorAll(".divRecommendedMovies") // Llamo al div que contiene las peliculas



// ! hacer un array dentro de otro array

//* Creación dinamica de pcategorías y películas

let categories = ["Recomendadas","Comedia","Drama","Terror"];
console.log(categories)

let moviesCategories = document.getElementById("categories")
console.log(moviesCategories)

// for (let i = 0; i < categories.length; i++) {
//     let catTitle = document.createElement("h3")
//     let carousel = document.createElement("div")
//     catTitle.innerHTML = categories[i]
//     catTitle.classList.add("carouselContainer", "mt-3", "mb-1")
//     carousel.id = categories[i]
//     carousel.classList.add("carousel","slide", `carousel-${categories[i]}`, "d-sm-flex", "container-fluid")
//     carousel.setAttribute("data-bs-ride", "true")
//     carousel.innerHTML= `
//     <button
//     class="carousel-control-prev"
//     type="button"
//     data-bs-target="#${categories[i]}"
//     data-bs-slide="prev"
//   >
//     <span
//       class="carousel-control-prev-icon d-block position-absolute start-0"
//       aria-hidden="true"
//     ></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button
//     class="carousel-control-next"
//     type="button"
//     data-bs-target="#${categories[i]}"
//     data-bs-slide="next"
//   >
//     <span
//       class="carousel-control-next-icon d-block position-absolute end-0"
//       aria-hidden="true"
//     ></span>
//     <span class="visually-hidden">Next</span>
//   </button>
//   `
//   moviesCategories.appendChild(catTitle)
//   moviesCategories.appendChild(carousel)
// }

let com = document.querySelector(".carousel-Comedia")
let dra = document.querySelector(".carousel-Drama")
let ter = document.querySelector(".carousel-Terror")



//? Llenar de peliculas
// for (let j = 0; j < moviesBase.length; j++){
//     let array = []
//     console.log(moviesBase[j].categories)
//     // console.log(moviesBase[j].urlImage)
//     if(moviesBase[j].categories === "Comedia"){
//         let movieFilm= document.createElement("div")
//         movieFilm.classList.add("carousel-inner")
//         movieFilm.innerHTML=`
//         <div class="carousel-item  active my-3">
//           <div class="row justify-content-start d-sm-flex flex-md-nowrap justify-content-sm-between">
//             <img src="testImage.jpg" class="movieImage col-6 col-md-2 mb-2" alt="..." />
//             <img src="testImage.jpg" class="movieImage col-6 col-md-2 mb-2" alt="..." />
//             <img src="testImage.jpg" class="movieImage col-6 col-md-2 mb-2" alt="..." />
//             <img src="testImage.jpg" class="movieImage col-6 col-md-2 mb-2" alt="..." />
//             <img src="testImage.jpg" class="movieImage col-6 col-md-2 mb-2" alt="..." />
//             <img src="testImage.jpg" class="movieImage col-6 col-md-2 mb-2" alt="..." />            
//           </div>
          
//         </div>
        
//         `
//         com.appendChild(movieFilm)
//     } 
// }
let asd = document.querySelectorAll(".movieImage")
console.log(asd)
    
// //* Aca tengo que agregar el detailPage

// })

// IDENTIFICAMOS SI EL USUARIO ES ADMIN O NO
let userId = localStorage.getItem('user');
// console.log(userId);
let users = JSON.parse(localStorage.getItem('users'));
users = JSON.parse(localStorage.getItem('users'));
// console.log(users);
let userActive = users.find(user=>user.id==userId);
// console.log(userActive);
if(userActive.admin){
let adminButton = document.createElement('li');
adminButton.classList.add('nav-item');
adminButton.innerHTML=`
<a class="nav-link" href="http://127.0.0.1:5500/admin.html">Administración</a>`;
document.getElementById('options-header').appendChild(adminButton)
}

