function emailSend(email){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nahueldlvega@gmail.com",
    Password : "950D3D5AA996A669F9325F5D05E63B6692E3",
    To : email,
    From : "rollingmovies@project.com",
    Subject : "Bienvenido a RollingMovies",
    Body : "Gracias por suscribirte y formar parte de nuestra comunidad! Estamos felices de tenerte con nosotros."
}).then(
    message => alert(message)
);
}