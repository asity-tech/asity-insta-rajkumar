//onclick forgot password go to password recovery page
//in password recovry page, onclicking send go to create password page
//in password recovry page, onclicking back move back to signIn form


const forgotPassBtn = document.querySelector('#forgotBtn'),
    cp = document.querySelector('#Cp'),
    back = document.querySelector('#backBtn'),
    send = document.querySelector('#sendBtn');

forgotPassBtn.addEventListener('click', () => {
    document.querySelector('#PasswordRecovery').classList.add('active');
});

send.addEventListener('click', () => {
    document.querySelector('#Createpassword').classList.add('active');
})

back.addEventListener('click', () => {
    document.querySelector('#PasswordRecovery').classList.remove('active');
});