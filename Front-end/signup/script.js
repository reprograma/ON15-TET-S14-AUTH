const init = () => {

    const validateName = (event) => {

        const input = event.currentTarget;

        const regex = /^[a-zA-Z ]*$/;

        const nameTest = regex.test(input.value)

        if (!nameTest) {
            submitButton.setAttribute('disabled', "disabled")
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute('disabled')
            input.nextElementSibling.classList.remove('error');
        }
    }

    const validateEmail = (event) => {
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        const emailTest = regex.test(input.value);

        if (!emailTest) {
            submitButton.setAttribute('disabled', "disabled")
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute('disabled')
            input.nextElementSibling.classList.remove('error');
        }
    }

      

    const validatePassword = (event) => {

        const input = event.currentTarget;

        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,20}$/
        const passwordTest = regex.test(input.value)

        if (!passwordTest) {
            submitButton.setAttribute('disabled', "disabled")
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute('disabled')
            input.nextElementSibling.classList.remove('error');
        }
    }


    

    const inputName = document.querySelector('input[type="name"]')
    const inputEmail = document.querySelector('input[type="email"]')
    const inputPassword = document.querySelector('input[type="password"]')
    const submitButton = document.querySelector('.signup__submit')

    inputName.addEventListener('input', validateName)
    inputEmail.addEventListener('input', validateEmail)
    inputPassword.addEventListener('input', validatePassword)

    const errorHandler = () => {
        submitButton.classList.remove('sucess');
        submitButton.classList.add('error');
        submitButton.textContent = "Error :("
    }

    const sucessHandler = () => {
        submitButton.classList.remove('error');
        submitButton.classList.add('sucess');
        submitButton.textContent = "Sent! :)";
        location.href = "../login/login.html"
    }
    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            submitButton.textContent = "...Loading"
            fetch('http://localhost:8099/users/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: inputName.value,
                    email: inputEmail.value,
                    password: inputPassword.value
                })
            }).then((response) => {
                if (response.status !== 201){
                    console.log(response.json())
                    return errorHandler();

                }
                sucessHandler();
                console.log(response.json())

            
            }).catch(() => {
                errorHandler();
            })
        })
    }
}

window.onload = init;
