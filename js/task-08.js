const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();    

    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;    
    const password = formEl.password.value;

    if (email.length === 0 || password.length === 0) {
       return alert('You have to fill all the input fields')
    }
    const userInfo = { 
        email, 
        password,
    };
    console.log(userInfo);
    form.reset();
}

