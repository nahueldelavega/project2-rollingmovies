// let row = document.querySelector(".carouselContainer");
// let movies = document.querySelectorAll(".movie");

// let leftArrow = document.getElementById("leftArrow");
// let rigthArrow = document.getElementById("rigthArrow");

// console.log(row, movies, leftArrow, rigthArrow);

// // * Scroll hacia la derecha
// rigthArrow.addEventListener("click", function () {
//   row.scrollLeft += row.offsetWidth;
//   let activeIndicator = document.querySelector(".indicators .active");
//   if (activeIndicator.nextSibling) {
//     activeIndicator.nextSibling.classList.add("active");
//     activeIndicator.classList.remove("active");
//   }
// });

// // * Scroll hacia la izquierda
// leftArrow.addEventListener("click", function () {
//   row.scrollLeft -= row.offsetWidth;
//   let activeIndicator = document.querySelector(".indicators .active");
//   if (activeIndicator.previousSibling) {
//     activeIndicator.previousSibling.classList.add("active");
//     activeIndicator.classList.remove("active");
//   }
// });

// //* Páginas
// let numberPages = Math.ceil(movies.length / 5);
// for (let i = 0; i < numberPages; i++) {
//   let indicator = document.createElement("button");
//   if (i === 0) {
//     indicator.classList.add("active");
//   }
//   document.querySelector(".indicators").appendChild(indicator);
//   indicator.addEventListener("click", function (e) {
//     row.scrollLeft = i * row.offsetWidth;
//     document.querySelector(".indicators .active").classList.remove("active");
//     e.target.classList.add("active");
//   });
// }

// //* Hover en carousel

// movies.forEach((movie) => {
//   movie.addEventListener("mouseenter", function (e) {
//     let element = e.currentTarget;
//     setTimeout(() => {
//       movies.forEach((movie) => movie.classList.remove("hover"));
//       element.classList.add("hover");
//     }, 300);
//   });
// });

// row.addEventListener("mouseleave", function(){
//     movies.forEach((movie) => movie.classList.remove("hover"));
// })
