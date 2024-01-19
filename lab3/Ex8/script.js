let password = document.getElementById('password');
let showPassword = document.getElementById('showPassword');
let showPassword2 = document.getElementById('showPassword2');
let repeatedPassword = document.getElementById('repeatedPassword')

let characters = document.getElementById('characters');
let specialCharacter = document.getElementById('specialCharacter');
let capitalLetter = document.getElementById('capitalLetter');
let digit = document.getElementById('digit');

let characterTick = document.getElementById('failure1');
let specialTick = document.getElementById('failure2');
let capitalTick = document.getElementById('failure3');
let digitTick = document.getElementById('failure4');

function checkPassword(pass){
    const Characters = new RegExp('(?=.{8,})');
    const SpecialCharacter = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
    const CapitalLetter = new RegExp(/[A-Z-ŚĄĘŁĆŻŹ]+/)
    const Digit = new RegExp('(?=.*[0-9])');

    if(Characters.test(pass)) {
        characterTick.setAttribute('src', 'success.png');
    } else {
        characterTick.setAttribute('src', 'fail.png');
    }

    if(SpecialCharacter.test(pass)) {
        specialTick.setAttribute('src', 'success.png');
    } else {
        specialTick.setAttribute('src', 'fail.png');
    }

    if(CapitalLetter.test(pass)) {
        capitalTick.setAttribute('src', 'success.png');
    } else {
        capitalTick.setAttribute('src', 'fail.png');
    }

    if(Digit.test(pass)) {
        digitTick.setAttribute('src', 'success.png');
    } else {
        digitTick.setAttribute('src', 'fail.png');
    }
}

function arePasswordsEquals(pass, repeatedPass) {
    if(repeatedPass == pass) {
        repeatedPassword.style.borderColor = "green";
    }
    else {
        repeatedPassword.style.borderColor = "red";
    }
}

showPassword.onclick = function(){
    if(password.type === 'password') {
        password.setAttribute('type', 'text');
        showPassword.classList.add('hide');
    } else {
        password.setAttribute('type', 'password');
        showPassword.classList.remove('hide');
    }
}

showPassword2.onclick = function(){
    if(repeatedPassword.type === 'password') {
        repeatedPassword.setAttribute('type', 'text');
        showPassword2.classList.add('hide');
    } else {
        repeatedPassword.setAttribute('type', 'password');
        showPassword2.classList.remove('hide');
    }
}