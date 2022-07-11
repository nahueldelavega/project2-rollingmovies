const comments = (event) => {
    event.preventDefault();
    let name = document.querySelector("#comment-name").value;
    let lastName = document.querySelector("#comment-lastname").value;
    let email = document.querySelector("#comment-email").value;
    let comment = document.getElementById("comment-comment").value;
  
    let nameCheck = /^[A-Za-z0-9\s]{3,30}$/g.test(name);
    let lastNameCheck = /^[A-Za-z0-9\s]{3,30}$/g.test(lastName);
    let emailCheck = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    let commentCheck = /^([0-9])*{0,500}$/.test(comment);
  
    if (
      nameCheck &&
      lastNameCheck &&
      emailCheck &&
      commentCheck &&
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
    
    
    function emailSend(){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "nahueldlvega@gmail.com",
            Password : "950D3D5AA996A669F9325F5D05E63B6692E3",
            To : 'nahueldlvega@gmail.com',
            From : "",
            Subject : "Comentarios",
            Body : ""
        }).then(
            message => alert(message)
            );
        }
    };