if (!localStorage.getItem('userLogged')){
    window.location.assign(window.location.origin)
}

class Movie {
    constructor(id, name, categories,featured, recomended,description, urlVideo, urlImage) {
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


  if(moviesFromLS){
    moviesBase = moviesFromLS;
  }else{
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
    localStorage.setItem("moviesBase",JSON.stringify(moviesFromLS));
  }



// // IDENTIFICAMOS SI EL USUARIO ES ADMIN O NO
let userId = localStorage.getItem('user');
console.log(userId);
let usersFromLS = JSON.parse(localStorage.getItem('users'));
console.log(usersFromLS);
let userActive = usersFromLS.find(user=>user.id==userId);
console.log(userActive);
if(userActive.admin){
let adminButton = document.createElement('li');
adminButton.classList.add('nav-item');
adminButton.innerHTML=`
<a class="nav-link" href="./admin.html">Administración</a>`;
document.getElementById('options-header').appendChild(adminButton)
}
