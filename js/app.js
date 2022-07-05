// PRUEBA DE USUARIOS

class User {
  constructor(id, name, lastName, email, password, admin) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.favs = [];
    this.admin = admin;
  }
}

let users;
console.log(users)

const usersFromLS = JSON.parse(localStorage.getItem("users"));

if (usersFromLS) {
  users = usersFromLS;
} else {
  users = [
    new User(1,'Nahuel', 'De La Vega','nahuel@gmail.com','nahuel123',true),
    new User(2,'Gonzalo', 'Arguello','gonzalo@gmail.com','gonzalo123',true),
    new User(3,'Pablo', 'Brennan','pablo@gmail.com','pablo123',true),
    new User(4, 'Victor','Vargas', 'victor@gmail.com', 'victor123', true)
  ];
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
      console.log("no pudimos validar tu identidad");
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
      console.log("no puedes entrar aquí, pero si a la página de al lado");
      incorrectAlert('Contraseña incorrecta.')
  }
};

function incorrectAlert (texto){
  let errorMessage = document.createElement('div');
  errorMessage.innerText = texto;
  errorMessage.classList.add('alert','alert-danger');
  let registerForm = document.getElementById('register-form-1');
  registerForm.appendChild(errorMessage);
  setTimeout(()=>{
    errorMessage.remove()
  },3000)
}

//LOGIN

const login = (event)=>{
  event.preventDefault();
  let email = document.querySelector('#login-email').value;
  let pass = document.querySelector('#login-pass').value;
  let emailCheck= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
  if(emailCheck){
    let userFound = users.find(user=>user.email===email);
    if(userFound && userFound.password === pass){
      localStorage.setItem('favs',JSON.stringify(userFound.favs));
      localStorage.setItem('user',JSON.stringify(userFound.id));
      localStorage.setItem("userLogged", true)
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

// IDENTIFICAMOS SI EL USUARIO ES ADMIN O NO
let userId = localStorage.getItem('user');
console.log(userId);
users = JSON.parse(localStorage.getItem('users'));
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