const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const regexPassword = /[a-z]/g;

function errorMessage (input,msg) {
    const formControl = input.parentElement;
    formControl.className="form-control error";
    const span = formControl.querySelector('span');
    span.innerText = msg;
}
function successMessage (input) {
    formControl = input.parentElement;
    formControl.className = 'form-control success ';
}
function nameCheck() {
    if(username.value === '') {
        errorMessage(username,  'Username is required' )
    }else {
        successMessage(username)
    }
}
function passwordCheck() {
    if(password.value === '') {
            errorMessage(password, 'Password is required');
        }
        else if(password.value.length < 6 ) {
            errorMessage(password, 'Password is to shoort')
        }else if (!password.value.match(regexPassword)) {
            errorMessage(password, 'Least one lowercase')
        }
        else { 
            successMessage(password)
        }
}
function password2Check() {
    if(password2.value === '' || password2.value.length < 6 || !password.value.match(regexPassword) ) {
        errorMessage(password2, 'Confirm password')
    }
    else {
        successMessage(password2)
    }
}
function passwordConfirm(input1,input2) {
if(input1.value !== input2.value ) {
    errorMessage(password2, 'Passwords dont match')
}else {
    // successMessage(password2)
}
}
 

    form.addEventListener('submit', e => {
        e.preventDefault();
        nameCheck(username);
        passwordCheck(password);
        password2Check(password2)
        passwordConfirm(password, password2)
    })

   