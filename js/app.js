// NAHUEL: MODAL DE REGISTRO
const register = (event) =>{
    event.preventDefault();
    let name = document.querySelector('#register-name').value;
    let lastName = document.querySelector('#register-lastname').value;
    let email = document.querySelector('#register-email').value;
    // let age = document.getElementById('register-age').value;
    let pass= document.getElementById('register-password').value;
    let pass2= document.getElementById('register-password-confirm').value;

    let nameOk = /^([a-zA-Z]){4,35}$/.test(name); //true
    let lastNameOk = /^([a-zA-Z]){4,35}$/.test(lastName); //true
    let emailOk= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email); //true
    // let ageOk = age>=16 && age<150; //true
    let passOk= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass); //true
    let pass2Ok= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass2); //true
    let equalPass = pass === pass2; //true

    if(name  && lastNameOk && emailOk /*&& ageOk*/ && pass2Ok && passOk && equalPass){
    let usersLS = JSON.parse(localStorage.getItem('users'));

    if(usersLS.find(user=>user.email==email)){
        console.log('no me hagas trampa');
    }else{
        usersLS.push(new User(usersLS.length+1,name,lastName,email,pass,false));
        window.location.assign(window.location.origin + '/ecommerce/ecommerce.html')
    }

    localStorage.setItem('users',JSON.stringify(usersLS))
    }else{
    console.log('not available');
    }

} 