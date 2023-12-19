const form = document.querySelector('form');
const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwd-confirm');

console.log(document.querySelector('#pwd + .error-message'))

pwd.addEventListener('input', () => {
    pwd.classList.remove('error');
    document.querySelector('#pwd + .error-message').classList.add('hidden');
})

pwdConfirm.addEventListener('input', () => {
    pwdConfirm.classList.remove('error');
    document.querySelector('#pwd + .error-message').classList.add('hidden');
})

form.addEventListener('submit', (event) => {
    if (!checkPwd()) {
      event.preventDefault();
      pwd.classList.add('error');
      pwdConfirm.classList.add('error');
      document.querySelector('#pwd + .error-message').classList.remove('hidden');
    }  
});

function checkPwd() {
    return pwd.value === pwdConfirm.value
}