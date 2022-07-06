let movie = document.getElementById("movie")
console.log(movie)

let moviesBase = JSON.parse(localStorage.getItem("moviesBase"))
console.log(moviesBase[0])

function completeMovie(){
    let title = document.createElement('h1');
    title.classList.add("d-flex","justify-content-center")
    title.innerHTML = `${moviesBase[0].name}`
    
    let cover = document.createElement('img');
    cover.classList.add("d-flex","justify-content-center","w-75","m-auto", "rounded-2")
    cover.setAttribute("src", `${moviesBase[0].urlImage}`)

    movie.appendChild(title)
    movie.appendChild(cover)
}

completeMovie()