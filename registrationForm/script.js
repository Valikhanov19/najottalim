let signIn = document.querySelector('.signIn');
let signUp = document.querySelector('.signUp');
let sendCode = document.querySelector('.sendCode');
let changePassword = document.querySelector('.changePassword');

let signS = document.querySelectorAll('.signS');

let forgetPassword = document.querySelector('.forgetPassword');
let RememeberPassword = document.querySelector('.RememeberPassword')
let sendCodeBtn = document.querySelector('.sendCodeBtn');
let changePasswordBtn = document.querySelector('.changePasswordBtn');
let signUpBtn = document.querySelector('.signUpBtn');
let signInBtn = document.querySelector('.signInBtn');

forgetPassword.onclick = () => {
    signS.forEach(el => {
        el.style.display = 'none';
    })
    sendCode.style.display = 'flex';
}

RememeberPassword.onclick = () => {
    signS.forEach(el => {
        el.style.display = 'none';
    })
    signIn.style.display = 'flex';
}

sendCodeBtn.onclick = () => {
    signS.forEach(el => {
        el.style.display = 'none';
    })
    changePassword.style.display = 'flex';
}

changePasswordBtn.onclick = () => {
    signS.forEach(el => {
        el.style.display = 'none';
    })
    signIn.style.display = 'flex';
}

signUpBtn.onclick = () => {
    signS.forEach(el => {
        el.style.display = 'none';
    })
    signUp.style.display = 'flex';
}

signInBtn.onclick = () => {
    signS.forEach(el => {
        el.style.display = 'none';
    })
    signIn.style.display = 'flex';
}
