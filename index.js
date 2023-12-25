let input = document.getElementById('inputs');
let checking = document.getElementById('check');
let restart = document.getElementById('reset');
let code_create = document.getElementById('code_create');
let message = document.getElementById('message');

let code = 'abcdefghrjklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUWXYZ';
let code_gunrated = '';

//captcha random code generate
function Gunrate() {
    for (let i = 0; i < 7; i++) {
        code_gunrated += code[Math.floor(Math.random() * 50)];
    }
    console.log(code_gunrated)
    code_create.innerHTML = code_gunrated;
}

//start btn logic
let btns_style = function () {
    Gunrate()
    restart.setAttribute('disabled', true)
    checking.removeAttribute('disabled')
    checking.style.opacity = '2'
    checking.style.cursor = 'pointer'

    restart.style.cursor = 'not-allowed';
    restart.style.opacity = '0.2';



    setTimeout(() => {
        restart.style.cursor = 'pointer';
        restart.style.opacity = '2'
        code_create.innerHTML = ''
        restart.removeAttribute('disabled')

    }, 13000)
}

//validations
let velidation = function () {
    let input_value = input.value;
    if (input_value === code_gunrated) {
        message.classList.add('message')
        message.innerText = "Captcha Matching"


        setTimeout(() => {
            message.classList.remove('message')
            message.innerText = ''
        }, 5000)
    }
    else if (input_value === '') {
        message.classList.add('message-empty')
        message.innerText = " Enter Captcha  code"


        setTimeout(() => {
            message.classList.remove('message-empty')
            message.innerText = ''
        }, 5000)
    }
    else {
        message.classList.add('message-invalid')
        message.innerText = "Captcha Not Matching"

        setTimeout(() => {
            message.classList.remove('message-invalid')
            message.innerText = ''
        }, 5000)
    }
    setTimeout(() => {
        input.value = ''
    }, 4000)
}


restart.addEventListener('click', () => {
    btns_style();

})


checking.addEventListener('click', () => {
    velidation();

})



