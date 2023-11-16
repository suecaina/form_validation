const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.querySelector('form')
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
    //errors will be stored in errors variable
    const errors = [];

    //if username has spaces will be an error then pushes the message
    //to errors
    if(username.value.trim() === ""){
        errors.push("Username required")
    }

    if (password.value.length < 4 ){
        errors.push("Password needs to be more than 4 characters")
    }

    if (password.value.length > 10){
        errors.push("Password must be less than 10 characters")
    }


    //if errors show then stop form submitting and show error message
    if(errors.length > 0) {
   e.preventDefault();
   errorMessage.toggleAttribute('hidden');
   //join is if more than 2 errors show display it with a comma
   errorMessage.innerHTML = errors.join(',')
    }
})