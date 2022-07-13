// VALIDACIONES FORM
const comments = (event) => {
    event.preventDefault();
    let name = document.querySelector("#comment-name").value;
    let lastName = document.querySelector("#comment-lastname").value;
    let email = document.querySelector("#comment-email").value;
    let comment = document.getElementById("comment-comment").value;

    let nameCheck = /^[A-Za-z0-9\s]{3,30}$/g.test(name);
    let lastNameCheck = /^[A-Za-z0-9\s]{3,30}$/g.test(lastName);
    let emailCheck = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    let commentCheck = /^[0-9]{5,500}$/.test(comment);

    if (
      nameCheck &&
      lastNameCheck &&
      emailCheck &&
      commentCheck &&
    ) {
        true
        console.log('Todo ok, puede enviar el comentario');
    }
}