// NAHUEL: MODAL DE REGISTRO
const register = (event) =>{
    event.preventDefault();
    let name = document.querySelector('#register-name').value;
    let lastName = document.querySelector('#register-lastname').value;
    let email = document.querySelector('#register-email').value;
    let pass= document.getElementById('register-password').value;
    let pass2= document.getElementById('register-password-confirm').value;

    let nameCheck = /^([a-zA-Z]){4,35}$/.test(name); 
    let lastNameCheck = /^([a-zA-Z]){4,35}$/.test(lastName);
    let emailCheck= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    let passCheck= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass);
    let pass2Check= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass2);
    let idemPass = pass === pass2;

    if(nameCheck  && lastNameCheck && emailCheck && pass2Check && passCheck && idemPass){
    let usersLS = JSON.parse(localStorage.getItem('users'));

    if(usersLS.find(user=>user.email==email)){
        console.log('no te veo');
    }else{
        usersLS.push(new User(usersLS.length+1,name,lastName,email,pass,false));
        window.location.assign(window.location.origin + '/homepage.html')
    }

    //! VER DE REDIRIGIR EL BOTON DE REGISTRO A HOME PAGE

    localStorage.setItem('users',JSON.stringify(usersLS))
    }else{
    console.log('no existes');
    }

} 