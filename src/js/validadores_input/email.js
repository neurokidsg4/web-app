
const regex = new RegExp('^([a-zA-Z0-9&.!_-]+@[a-zA-Z0-9&.!_-]+.[a-zA-Z0-9&.!_-]+)$');

const input = document.getElementById("email");
const field = document.getElementById("field--email");
const message = document.querySelector("#message--email.message--invalid");
const messageExists = document.querySelector("#message--email_exists.message--invalid");

input.addEventListener("input", inputFunction);

function inputFunction() {
    
    if(!regex.test(input.value)) {

            field.classList.add('field--invalid');
            input.classList.add('input--invalid');
            message.style.display = 'inline-block';
    
        } else {
    
            const email = input.value;

            const url = `https://api-neurokids.vercel.app/users?email=${email}`;

            fetch(url, {
                method : "GET",
                headers: {'Content-Type': 'application/json'}
            })
            .then(response => response.json())
            .then((user) => {

                if(user[0].email === email) {

                    field.classList.add('field--invalid');
                    input.classList.add('input--invalid');
                    messageExists.style.display = 'inline-block';
                    message.style.display = 'none';
                };
            })
            .catch(err => {
                
                field.classList.remove('field--invalid');
                input.classList.remove('input--invalid');
                messageExists.style.display = 'none';
                message.style.display = 'none';
            });
        }
}
