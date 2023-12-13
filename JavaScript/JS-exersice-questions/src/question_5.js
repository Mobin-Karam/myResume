'use strict'

//^ #5 

let getSina = new Date();

const text = document.getElementById('Text')

const authAge = 18;
const firstName = prompt('What is your First Name ?')
const lastName = prompt('What is your Last Name ?')
const getBirthYear = Number(prompt('When you born ?'));

let currentYear = getSina.getFullYear();

let age = currentYear - getBirthYear;

if (firstName.length > 3) {
    text.innerHTML += `<h2>Hello ${firstName} ${lastName}.</h2>`;
}

// if (authAge <= (age)) {
//     text.textContent = `Your age is ${age} and Your Full name is ${firstName} ${lastName} and you can take driver's license ✅`;
// } else {

//     text.textContent = `Your age is ${age} and Your Full name is ${firstName} ${lastName} and you can't take driver's license 🛑`;
// } 
