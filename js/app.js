// PRUEBA DE USUARIOS

class User {
  constructor(id, name, lastName, email, password, admin) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.favs = [];
    this.cart = [];
    this.admin = admin;
  }
}

let users;

const usersFromLS = JSON.parse(localStorage.getItem("users"));

if (usersFromLS) {
  users = usersFromLS;
} else {
  users = [
    new User(),
  ];
  // users = [
  //   new User(),
  // ];
  localStorage.setItem("users", JSON.stringify(users));
}

// NAHUEL: MODAL DE REGISTRO
const register = (event) => {
  event.preventDefault();
  let name = document.querySelector("#register-name").value;
  let lastName = document.querySelector("#register-lastname").value;
  let email = document.querySelector("#register-email").value;
  let pass = document.getElementById("register-password").value;
  let pass2 = document.getElementById("register-password-confirm").value;

  let nameCheck = /^[A-Za-z0-9\s]{3,30}$/g.test(name);
  let lastNameCheck = /^[A-Za-z0-9\s]{3,30}$/g.test(lastName);
  let emailCheck = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
    email
  );
  let passCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass);
  let pass2Check = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass2);
  let idemPass = pass === pass2;

  if (
    nameCheck &&
    lastNameCheck &&
    emailCheck &&
    pass2Check &&
    passCheck &&
    idemPass
  ) {
    let usersLS = JSON.parse(localStorage.getItem("users"));

    if (usersLS.find((user) => user.email == email)) {
      console.log("sos otra persona");
    } else {
      usersLS.push(
        new User(usersLS.length + 1, name, lastName, email, pass, false)
      );
      localStorage.setItem("userLogged", true)
      localStorage.setItem("user", JSON.stringify(usersLS.length + 1));
      window.location.assign(window.location.origin + "/homepage.html");
    }

    localStorage.setItem("users", JSON.stringify(usersLS));
  } else {
    console.log("no puedes entrar");
  }
};




//***************************************/



const login = (event)=>{
  event.preventDefault();
  let email = document.querySelector('#login-email').value;
  let pass = document.querySelector('#login-pass').value;
  let emailCheck= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
  if(emailCheck){
    let userFound = users.find(user=>user.email===email);
    if(userFound && userFound.password === pass){
      localStorage.setItem('favs',JSON.stringify(userFound.favs));
      localStorage.setItem('cart',JSON.stringify(userFound.cart));
      localStorage.setItem('user',JSON.stringify(userFound.id));
      window.location.assign(window.location.origin + '/homepage.html')
  }else{
    errorAlert('Email o contraseña invalida')
  }
  }
}

function errorAlert (texto){
  let errorMessage = document.createElement('div');
  errorMessage.innerText = texto;
  errorMessage.classList.add('alert','alert-danger');
  let loginForm = document.getElementById('login-form');
  loginForm.appendChild(errorMessage);
  setTimeout(()=>{
    errorMessage.remove()
  },3000)
}